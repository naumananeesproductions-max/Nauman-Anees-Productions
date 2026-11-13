import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import {
  OFFICIAL_APPS_SCRIPT_URL,
  RequestDuplicateGuard,
  validateSubmissionPayload,
  verifyAppsScriptResponse,
} from './src/utils/submission';
import type { SubmissionPayload } from './src/types/studio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const duplicateGuard = new RequestDuplicateGuard(10 * 60 * 1000);

// Simple sliding-window IP rate limiter (max 15 requests per 5 minutes)
const rateBuckets = new Map<string, number[]>();
function isRateLimited(ip: string, nowMs = Date.now()): boolean {
  const windowMs = 5 * 60 * 1000;
  const recent = (rateBuckets.get(ip) ?? []).filter((ts) => nowMs - ts < windowMs);
  if (recent.length >= 15) {
    rateBuckets.set(ip, recent);
    return true;
  }
  recent.push(nowMs);
  rateBuckets.set(ip, recent);
  return false;
}

async function startServer() {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '256kb' }));

  app.use('/api', (_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
    next();
  });

  app.options('/api/*', (_req, res) => {
    res.sendStatus(204);
  });

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      configured: Boolean(process.env.APPS_SCRIPT_SECRET),
    });
  });

  app.post('/api/submit', async (req, res) => {
    const clientIp = req.ip || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        success: false,
        error: 'Too many requests in a short window. Please wait a minute and retry.',
      });
      return;
    }

    const payload = req.body as Partial<SubmissionPayload>;
    const validation = validateSubmissionPayload(payload);
    if (!validation.valid) {
      res.status(400).json({
        success: false,
        error: 'Validation failed. Please review your required fields.',
        fieldErrors: validation.errors,
      });
      return;
    }

    const requestId = String(payload.requestId).trim();
    if (duplicateGuard.isDuplicate(requestId)) {
      res.status(409).json({
        success: false,
        requestId,
        error: 'This request ID has already been accepted.',
      });
      return;
    }

    const appsScriptSecret = process.env.APPS_SCRIPT_SECRET?.trim();
    const appsScriptUrl = process.env.APPS_SCRIPT_URL?.trim() || OFFICIAL_APPS_SCRIPT_URL;

    if (!appsScriptSecret) {
      res.status(503).json({
        success: false,
        requestId,
        code: 'CONFIG_MISSING',
        error:
          'Google Apps Script submission is awaiting APPS_SCRIPT_SECRET environment configuration. Your answers are preserved—please retry once configured.',
      });
      return;
    }

    const upstreamBody = {
      secret: appsScriptSecret,
      type: payload.type,
      requestId,
      category: payload.category,
      selectedService: payload.selectedService,
      sourcePage: payload.sourcePage,
      data: payload.data,
    };

    try {
      const upstreamResponse = await fetch(appsScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(upstreamBody),
        redirect: 'follow',
      });

      const rawText = await upstreamResponse.text();
      const verified = verifyAppsScriptResponse(rawText);

      if (!upstreamResponse.ok || !verified.ok) {
        res.status(502).json({
          success: false,
          requestId,
          error:
            verified.error ||
            'Unable to confirm receipt with Google Sheets. Please retry in a moment.',
        });
        return;
      }

      duplicateGuard.markAccepted(requestId);
      res.json({
        success: true,
        requestId,
        message: 'Submission verified and recorded.',
      });
    } catch {
      res.status(502).json({
        success: false,
        requestId,
        error: 'Network error communicating with Google Apps Script. Please retry.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nauman Anees Productions server listening on port ${PORT}`);
  });
}

startServer();

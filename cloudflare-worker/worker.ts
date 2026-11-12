import { onRequestPost } from '../functions/api/submit';

interface WorkerEnv {
  APPS_SCRIPT_URL?: string;
  APPS_SCRIPT_SECRET?: string;
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (url.pathname === '/api/submit' && request.method === 'POST') {
      return onRequestPost({ request, env });
    }

    return Response.json({ error: 'Not found' }, { status: 404 });
  },
};

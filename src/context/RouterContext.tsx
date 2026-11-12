import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { applyRouteSeo } from '../utils/seo';

export type CurtainTransitionPhase = 'idle' | 'closing' | 'opening';

interface RouterContextValue {
  pathname: string;
  search: string;
  queryParams: URLSearchParams;
  navigate: (to: string) => void;
  introDone: boolean;
  completeIntro: () => void;
  transitionPhase: CurtainTransitionPhase;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function shouldSkipIntroOnLoad(): boolean {
  if (typeof window === 'undefined') return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get('autostart') === '1') return true;
  if (prefersReducedMotion()) return true;
  if (window.location.pathname !== '/') return true;
  return false;
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locationState, setLocationState] = useState(() => ({
    pathname: typeof window !== 'undefined' ? window.location.pathname || '/' : '/',
    search: typeof window !== 'undefined' ? window.location.search || '' : '',
  }));
  const [introDone, setIntroDone] = useState<boolean>(() => shouldSkipIntroOnLoad());
  const [transitionPhase, setTransitionPhase] = useState<CurtainTransitionPhase>('idle');
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    for (const t of timersRef.current) {
      window.clearTimeout(t);
    }
    timersRef.current = [];
  }, []);

  useEffect(() => {
    applyRouteSeo(locationState.pathname);
  }, [locationState.pathname]);

  const runCurtainTransition = useCallback(
    (applyNavigation: () => void) => {
      clearTimers();

      if (prefersReducedMotion()) {
        applyNavigation();
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      setTransitionPhase('closing');

      const swapTimer = window.setTimeout(() => {
        applyNavigation();
        window.scrollTo({ top: 0, behavior: 'auto' });
        setTransitionPhase('opening');

        const doneTimer = window.setTimeout(() => {
          setTransitionPhase('idle');
        }, 420);
        timersRef.current.push(doneTimer);
      }, 280);

      timersRef.current.push(swapTimer);
    },
    [clearTimers]
  );

  const navigate = useCallback(
    (to: string) => {
      const targetUrl = new URL(to, window.location.origin);
      const nextPathname = targetUrl.pathname || '/';
      const nextSearch = targetUrl.search || '';

      if (
        nextPathname === locationState.pathname &&
        nextSearch === locationState.search &&
        !targetUrl.hash
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      runCurtainTransition(() => {
        window.history.pushState({}, '', `${nextPathname}${nextSearch}${targetUrl.hash}`);
        setLocationState({ pathname: nextPathname, search: nextSearch });
        if (targetUrl.hash) {
          window.requestAnimationFrame(() => {
            const targetEl = document.getElementById(targetUrl.hash.slice(1));
            targetEl?.scrollIntoView({ behavior: 'smooth' });
          });
        }
      });
    },
    [locationState.pathname, locationState.search, runCurtainTransition]
  );

  useEffect(() => {
    const onPopState = () => {
      const nextPathname = window.location.pathname || '/';
      const nextSearch = window.location.search || '';
      runCurtainTransition(() => {
        setLocationState({ pathname: nextPathname, search: nextSearch });
      });
    };
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      clearTimers();
    };
  }, [clearTimers, runCurtainTransition]);

  const completeIntro = useCallback(() => {
    setIntroDone(true);
  }, []);

  const queryParams = useMemo(() => new URLSearchParams(locationState.search), [locationState.search]);

  const value = useMemo<RouterContextValue>(
    () => ({
      pathname: locationState.pathname,
      search: locationState.search,
      queryParams,
      navigate,
      introDone,
      completeIntro,
      transitionPhase,
    }),
    [locationState.pathname, locationState.search, queryParams, navigate, introDone, completeIntro, transitionPhase]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return ctx;
}

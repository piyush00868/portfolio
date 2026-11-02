'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

const root = () => document.documentElement;
const readTheme = (): Theme => (root().getAttribute('data-theme') === 'light' ? 'light' : 'dark');

/** Re-render subscribers whenever <html data-theme> changes (from any tab of the UI). */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(root(), { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function applyTheme(theme: Theme) {
  root().setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable; theme still applies for this page view */
  }
}

/**
 * Current theme plus a toggle. The toggle animates a circular reveal from
 * `origin` (usually the button's center) using the View Transitions API,
 * and falls back to an instant switch when unsupported or reduced motion is on.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => DEFAULT_THEME);

  const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion || !origin) {
      applyTheme(next);
      return;
    }
    const { x, y } = origin;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document
      .startViewTransition(() => applyTheme(next))
      .ready.then(() => {
        root().animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 550,
            easing: 'cubic-bezier(.2,.7,.2,1)',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      });
  }, []);

  return { theme, toggleTheme };
}

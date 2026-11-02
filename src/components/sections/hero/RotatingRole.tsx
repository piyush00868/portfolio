'use client';

import { useEffect, useRef, useState } from 'react';

const INTERVAL_MS = 2600;
const EXIT_MS = 450;

/**
 * Cycles through titles: the current one slides up and out, the next one
 * enters from below. The first title is server-rendered.
 */
export function RotatingRole({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (roles.length < 2) return;
    const timers: number[] = [];

    const tick = window.setInterval(() => {
      const el = textRef.current;
      if (!el) return;
      // 1. slide the current title up and fade it out
      el.style.transform = 'translateY(-100%)';
      el.style.opacity = '0';

      timers.push(
        window.setTimeout(() => {
          // 2. swap text and jump (without transition) to below the box
          setIndex((i) => (i + 1) % roles.length);
          el.style.transition = 'none';
          el.style.transform = 'translateY(100%)';
          // 3. on the next frames, re-enable the transition and slide in
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              el.style.transition = '';
              el.style.transform = '';
              el.style.opacity = '1';
            }),
          );
        }, EXIT_MS),
      );
    }, INTERVAL_MS);

    return () => {
      window.clearInterval(tick);
      timers.forEach(window.clearTimeout);
    };
  }, [roles.length]);

  return (
    <div
      className="text-muted relative h-7 overflow-hidden text-[19px] font-semibold tracking-[0.01em] max-[720px]:h-6 max-[720px]:text-base"
      aria-live="polite"
    >
      <span ref={textRef} className="block [transition:transform_.5s_var(--ease-out),opacity_.5s]">
        {roles[index]}
      </span>
    </div>
  );
}

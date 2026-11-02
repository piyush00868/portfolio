'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which section is in the middle band of the viewport. The band
 * (45% from the top, 50% from the bottom) matches the original site.
 */
export function useActiveSection<T extends string>(ids: readonly T[], initial: T) {
  const [active, setActive] = useState<T>(initial);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as T);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive] as const;
}

'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { navItems, type NavSectionId } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

const sectionIds = navItems.map((item) => item.id);

/**
 * Section links with a dot that follows the hovered link and returns to the
 * active section when the pointer leaves.
 */
export function NavLinks() {
  const [active, setActive] = useActiveSection<NavSectionId>(sectionIds, 'home');
  const [hovered, setHovered] = useState<NavSectionId | null>(null);
  const linkRefs = useRef(new Map<NavSectionId, HTMLAnchorElement>());
  const dotRef = useRef<HTMLSpanElement>(null);

  const placeDot = useCallback(() => {
    const dot = dotRef.current;
    if (!dot) return;
    const link = linkRefs.current.get(hovered ?? active);
    // offsetParent is null when the link is hidden (mobile).
    if (!link || !link.offsetParent) {
      dot.style.opacity = '0';
      return;
    }
    dot.style.transform = `translateX(${link.offsetLeft + link.offsetWidth / 2 - 2}px)`;
    dot.style.opacity = '1';
  }, [active, hovered]);

  useLayoutEffect(placeDot, [placeDot]);

  // Re-measure on resize and once web fonts settle (link widths change).
  useEffect(() => {
    window.addEventListener('resize', placeDot);
    void document.fonts?.ready.then(placeDot);
    return () => window.removeEventListener('resize', placeDot);
  }, [placeDot]);

  return (
    <div
      className="relative flex items-center gap-[22px] text-sm"
      onMouseLeave={() => setHovered(null)}
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          ref={(el) => {
            if (el) linkRefs.current.set(item.id, el);
            else linkRefs.current.delete(item.id);
          }}
          className={cn(
            'hover:text-fg relative transition-colors duration-200',
            active === item.id ? 'text-fg font-semibold' : 'text-muted',
            !item.mobile && 'max-[720px]:hidden',
          )}
          aria-current={active === item.id ? 'true' : undefined}
          onMouseEnter={() => setHovered(item.id)}
          onFocus={() => setHovered(item.id)}
          onBlur={() => setHovered(null)}
          onClick={() => setActive(item.id)}
        >
          {item.label}
        </a>
      ))}
      <span
        ref={dotRef}
        className="bg-fg pointer-events-none absolute bottom-[5px] left-0 size-1 rounded-full opacity-0 [transition:transform_.35s_var(--ease-dot),opacity_.2s]"
        aria-hidden
      />
      <ThemeToggle />
    </div>
  );
}

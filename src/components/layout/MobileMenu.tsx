'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import type { NavSectionId } from '@/data/profile';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  items: ReadonlyArray<{ id: NavSectionId; label: string }>;
  active: NavSectionId;
  onSelect: (id: NavSectionId) => void;
}

/** Breakpoint above which the inline links show and the menu is hidden. */
const DESKTOP_QUERY = '(min-width: 721px)';

/**
 * Cancel the click that follows a dismissing tap, so closing the menu by
 * tapping the page doesn't also open whatever was underneath (e.g. a project).
 */
function swallowNextClick() {
  const block = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  document.addEventListener('click', block, { capture: true, once: true });
  // If no click follows (e.g. the tap became a scroll), stop listening.
  window.setTimeout(() => document.removeEventListener('click', block, { capture: true }), 500);
}

/**
 * Phone/tablet navigation: a ☰ button that turns into ✕ and drops a panel
 * with the section links. Closes on link tap, outside tap (which is not passed
 * through to the page), Escape, or when the viewport grows to desktop width.
 */
export function MobileMenu({ items, active, onSelect }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
      swallowNextClick();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => desktop.matches && setOpen(false);

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="flex items-center gap-2 min-[721px]:hidden">
      <span className="bg-line-strong h-5 w-px" aria-hidden />
      <IconButton
        ref={buttonRef}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <div
        id={panelId}
        inert={!open}
        className={cn(
          'border-line-strong bg-bg-2 absolute top-[calc(100%+13px)] right-0 w-[220px] origin-top-right rounded-xl border p-1.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]',
          '[transition:opacity_.2s,translate_.25s_var(--ease-out),scale_.25s_var(--ease-out),visibility_.25s]',
          open
            ? 'visible translate-y-0 scale-100 opacity-100'
            : 'invisible -translate-y-1 scale-[.98] opacity-0',
        )}
      >
        <nav aria-label="Mobile">
          <ul className="grid list-none">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] transition-colors duration-200',
                    active === item.id
                      ? 'bg-chip text-fg font-semibold'
                      : 'text-fg-2 hover:bg-chip hover:text-fg',
                  )}
                  onClick={() => {
                    onSelect(item.id);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  {active === item.id && <span className="bg-fg size-1 rounded-full" aria-hidden />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

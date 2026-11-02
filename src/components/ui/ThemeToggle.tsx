'use client';

import type { MouseEvent } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { MoonIcon, SunIcon } from '@/components/ui/icons';
import { useTheme } from '@/hooks/useTheme';

/**
 * Sun/moon button. Which icon shows is decided by CSS from <html data-theme>,
 * so the server HTML is correct before hydration and never mismatches.
 */
export function ThemeToggle({ size }: { size?: 'md' | 'sm' }) {
  const { theme, toggleTheme } = useTheme();

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  return (
    <IconButton
      size={size}
      onClick={onClick}
      aria-label="Toggle theme"
      title="Toggle theme"
      aria-pressed={theme === 'light'}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </IconButton>
  );
}

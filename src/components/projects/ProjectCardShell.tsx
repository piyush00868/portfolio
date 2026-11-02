'use client';

import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { useProjectDialog } from './ProjectDialogProvider';
import { revealClass } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface ProjectCardShellProps {
  slug: string;
  title: string;
  className?: string;
  delay?: number;
  children: ReactNode;
}

/**
 * The interactive outer element of a project card: scroll reveal plus
 * opening the details modal. Card content stays server-rendered.
 */
export function ProjectCardShell({
  slug,
  title,
  className,
  delay,
  children,
}: ProjectCardShellProps) {
  const { open } = useProjectDialog();
  const [ref, inView] = useInView<HTMLElement>();

  const onClick = (e: MouseEvent<HTMLElement>) => {
    // Links inside the card (live site, repo) keep their normal behavior.
    if ((e.target as HTMLElement).closest('a')) return;
    open(slug);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open(slug);
    }
  };

  return (
    <article
      ref={ref}
      className={cn(revealClass, className)}
      data-visible={inView}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={`${title}, view project details`}
    >
      {children}
    </article>
  );
}

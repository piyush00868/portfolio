'use client';

import type { AnchorHTMLAttributes, ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

/** Hidden until `data-visible="true"`, then fades, unblurs and lifts into place. */
export const revealClass = cn(
  'translate-y-[18px] opacity-0 blur-[4px]',
  '[transition:opacity_.8s_var(--ease-out),translate_.8s_var(--ease-out),filter_.8s]',
  'data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 data-[visible=true]:blur-none',
  'motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none',
);

type RevealProps = AnchorHTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Element to render. Defaults to div. */
  as?: ElementType;
  /** Transition delay in ms (used to stagger the project grid). */
  delay?: number;
};

/**
 * Reveals its content the first time it scrolls into view. Children stay
 * server-rendered; only this wrapper runs on the client.
 */
export function Reveal({
  children,
  className,
  as: Tag = 'div',
  delay,
  style,
  ...rest
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      {...rest}
      ref={ref}
      className={cn(revealClass, className)}
      data-visible={inView}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}

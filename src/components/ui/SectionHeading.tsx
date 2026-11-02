import type { ReactNode } from 'react';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { externalLinkProps } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  /** Right-aligned content: a hint, a link, filters... */
  children?: ReactNode;
}

/** Serif section title on a full-bleed dashed band. */
export function SectionHeading({ title, children }: SectionHeadingProps) {
  return (
    <div className="hl flex items-center justify-between px-5 py-1.5 max-[720px]:flex-wrap max-[720px]:gap-1.5">
      <h2 className="font-serif text-[32px] leading-[1.25] font-normal tracking-[-0.01em]">
        {title}
      </h2>
      {children}
    </div>
  );
}

/** Small mono note next to a heading, e.g. "( writing in progress )". */
export function SectionHint({ children }: { children: ReactNode }) {
  return <span className="text-faint ml-2.5 font-mono text-[11px]">{children}</span>;
}

/** "View all ↗" style link on the right of a heading. */
export function SectionLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="text-muted hover:text-fg inline-flex items-center gap-[5px] text-[13.5px]"
      href={href}
      {...externalLinkProps}
    >
      {children} <ArrowUpRightIcon width={13} height={13} />
    </a>
  );
}

/** Standard padded body under a SectionHeading. */
export const sectionBodyClass = 'px-5 pt-[18px] pb-[26px]';

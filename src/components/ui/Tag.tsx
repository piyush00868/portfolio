import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Small rounded technology tag. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border-line bg-chip text-fg-2 rounded-md border px-2 py-[3px] text-xs">
      {children}
    </span>
  );
}

/** Wrapping row of tags. */
export function TagList({ tags, className }: { tags: readonly string[]; className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}

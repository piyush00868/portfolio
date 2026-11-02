'use client';

import { useState, type CSSProperties } from 'react';
import { TechIcon, techIconHover } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading, sectionBodyClass } from '@/components/ui/SectionHeading';
import type { TechFilter, TechItem } from '@/types/tech-stack';
import { cn } from '@/lib/utils';

interface TechStackExplorerProps {
  filters: readonly TechFilter[];
  items: readonly TechItem[];
}

/** Stack chips with category tabs. Non-matching chips dim instead of disappearing. */
export function TechStackExplorer({ filters, items }: TechStackExplorerProps) {
  const [filter, setFilter] = useState<TechFilter['id']>('all');

  return (
    <>
      <SectionHeading title="Tech Stack">
        <div className="flex flex-wrap gap-0.5" role="group" aria-label="Filter technologies">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="text-muted hover:text-fg aria-pressed:border-line-strong aria-pressed:bg-chip aria-pressed:text-fg cursor-pointer rounded-[7px] border border-transparent bg-transparent px-[9px] py-1 text-[12.5px] font-medium transition-all duration-200 aria-pressed:font-semibold"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </SectionHeading>
      <div className={sectionBodyClass}>
        <Reveal className="flex flex-wrap gap-2">
          {items.map((item) => {
            const hover = techIconHover(item.icon);
            const dimmed = filter !== 'all' && item.category !== filter;
            return (
              <span
                key={item.name}
                className={cn(
                  'group border-line bg-chip text-fg-2 hover:border-line-strong hover:text-fg inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-[14.5px] [transition:opacity_.3s,translate_.3s,border-color_.2s,color_.2s] hover:-translate-y-px',
                  dimmed && 'opacity-[.18]',
                )}
                style={hover ? ({ '--brand': hover } as CSSProperties) : undefined}
              >
                <TechIcon
                  icon={item.icon}
                  className="text-muted size-3.5 shrink-0 fill-current transition-colors duration-200 group-hover:text-[var(--brand,var(--fg))]"
                />
                {item.name}
              </span>
            );
          })}
        </Reveal>
      </div>
    </>
  );
}

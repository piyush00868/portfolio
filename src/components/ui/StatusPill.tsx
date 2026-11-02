import type { ReactNode } from 'react';

/** Rounded pill with a pulsing green "available" dot. */
export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="border-line bg-chip text-fg-2 inline-flex items-center gap-[7px] rounded-full border py-0.5 pr-[9px] pl-2 text-[11.5px]">
      <i className="animate-ping-dot bg-online size-[7px] rounded-full" />
      {children}
    </span>
  );
}

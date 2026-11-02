import Image from 'next/image';
import type { ReactNode } from 'react';
import { EventDashboardMock } from './EventDashboardMock';
import { TerminalMock } from './TerminalMock';
import type { CoverGradient, ProjectCover as ProjectCoverSpec } from '@/types/project';
import { cn } from '@/lib/utils';

const gradientClass: Record<CoverGradient, string> = {
  blue: 'bg-[linear-gradient(135deg,#eff6ff_0%,#93c5fd_45%,#2563eb_100%)]',
  green: 'bg-[linear-gradient(135deg,#f0fdf4_0%,#86efac_40%,#059669_100%)]',
  orange: 'bg-[linear-gradient(135deg,#fff7ed_0%,#fdba74_40%,#f43f5e_100%)]',
  mono: 'bg-[radial-gradient(120%_120%_at_100%_0%,#3f3f46_0%,#18181b_55%,#09090b_100%)]',
};

/** Tilted "window" sitting inside the gradient frame. Lifts further on card hover. */
const insetClass =
  'absolute top-[21%] right-[-2%] bottom-[-6%] left-[13%] overflow-hidden rounded-tl-[10px] bg-white shadow-[0_0_0_8px_rgba(255,255,255,.35),0_20px_50px_rgba(0,0,0,.25)] [transition:translate_.45s_var(--ease-out)] group-hover:-translate-x-1.5 group-hover:-translate-y-1.5';

/** Gradient frame used by every cover. Lifts slightly when its card is hovered. */
export function CoverFrame({
  gradient,
  children,
}: {
  gradient: CoverGradient;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative h-[232px] overflow-hidden rounded-lg [transition:translate_.35s_var(--ease-out)] group-hover:-translate-y-[3px]',
        gradientClass[gradient],
      )}
    >
      {children}
    </div>
  );
}

/** Picks the right illustration for a project's cover spec. */
export function ProjectCover({ cover, ribbon }: { cover: ProjectCoverSpec; ribbon?: string }) {
  return (
    <CoverFrame gradient={cover.gradient}>
      {ribbon && (
        <div className="bg-soon absolute top-[22px] right-[-38px] z-[2] flex rotate-45 items-center gap-1.5 px-11 py-1 text-[11px] font-bold tracking-[0.02em] text-[#111] shadow-[0_4px_12px_rgba(0,0,0,.2)]">
          <i className="size-1.5 rounded-full bg-[#0d9488]" />
          {ribbon}
        </div>
      )}
      {cover.kind === 'screenshot' && (
        <div className={insetClass}>
          <Image
            src={cover.image}
            alt={cover.alt}
            width={1200}
            height={733}
            sizes="(max-width: 720px) 90vw, 360px"
            className="size-full object-cover object-top-left"
          />
        </div>
      )}
      {cover.kind === 'terminal' && (
        <div className={cn(insetClass, 'bg-[#0b0f0e]')}>
          <TerminalMock />
        </div>
      )}
      {cover.kind === 'event-dashboard' && (
        <div className={insetClass}>
          <EventDashboardMock />
        </div>
      )}
    </CoverFrame>
  );
}

import {
  cardClass,
  cardFootClass,
  cardHeadClass,
  cardSummaryClass,
  cardTaglineClass,
} from './card-styles';
import { CoverFrame } from './covers/ProjectCover';
import { GitHubIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { TagList } from '@/components/ui/Tag';
import type { MoreProjectsCard as MoreProjectsCardData } from '@/types/project';
import { externalLinkProps } from '@/lib/utils';

/** Last tile in the grid, linking to all repositories on GitHub. */
export function MoreProjectsCard({ data, delay }: { data: MoreProjectsCardData; delay?: number }) {
  return (
    <Reveal as="a" className={cardClass} delay={delay} href={data.href} {...externalLinkProps}>
      <CoverFrame gradient="mono">
        <div className="grid h-full place-items-center text-center text-[#fafafa]">
          <div>
            <GitHubIcon className="mx-auto size-[54px] opacity-[.92]" />
            <div className="mt-2.5 font-serif text-[30px] tracking-[-0.01em]">{data.title}</div>
            <div className="mt-0.5 font-mono text-[11px] text-[#a1a1aa]">{data.handle}</div>
          </div>
        </div>
      </CoverFrame>
      <div className={cardHeadClass} />
      <div className={cardTaglineClass}>{data.tagline}</div>
      <p className={cardSummaryClass}>{data.summary}</p>
      <div className={cardFootClass}>
        <TagList tags={data.tags} />
      </div>
    </Reveal>
  );
}

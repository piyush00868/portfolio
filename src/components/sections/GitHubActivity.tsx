import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading, sectionBodyClass } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';
import {
  buildContributionCalendar,
  fetchContributions,
  type ContributionCalendar,
} from '@/lib/github';
import { externalLinkProps } from '@/lib/utils';

/** Heatmap color per contribution level (0-4). */
const levelClass = ['bg-c0', 'bg-c1', 'bg-c2', 'bg-c3', 'bg-c4'] as const;

async function loadCalendar(): Promise<ContributionCalendar | null> {
  try {
    return buildContributionCalendar(await fetchContributions(profile.githubUsername));
  } catch (err) {
    console.error('GitHub contributions unavailable', err);
    return null;
  }
}

/**
 * Contribution heatmap, rendered on the server (cached for an hour), so it
 * shows up instantly with no client fetch or loading state.
 */
export async function GitHubActivity() {
  const calendar = await loadCalendar();

  return (
    <section id="github">
      <SectionHeading title="GitHub Activity" />
      <Reveal className={sectionBodyClass}>
        <div className="overflow-x-auto pb-1">
          {calendar && calendar.cells.length > 0 ? (
            <>
              <div
                className="text-fg-2 ml-0.5 grid h-5 auto-cols-[14px] grid-flow-col text-[12.5px]"
                aria-hidden
              >
                {calendar.monthLabels.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
              <div
                className="grid auto-cols-[11px] grid-flow-col grid-rows-[repeat(7,11px)] gap-[3px]"
                role="img"
                aria-label={`${calendar.total} GitHub contributions in the last year`}
              >
                {calendar.cells.map(({ day }, i) =>
                  day ? (
                    <span
                      key={day.date}
                      className={`rounded-[2px] ${levelClass[day.level]}`}
                      title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                    />
                  ) : (
                    <span key={`pad-${i}`} className="invisible" />
                  ),
                )}
              </div>
            </>
          ) : (
            <div className="text-faint grid h-[120px] place-items-center font-mono text-[13px]">
              <a href={`https://github.com/${profile.githubUsername}`} {...externalLinkProps}>
                view activity on github ↗
              </a>
            </div>
          )}
        </div>
        <div className="text-fg-2 mt-2.5 flex items-center justify-between text-[13px]">
          <span>{calendar ? `${calendar.total} contributions in the last year` : '\u00a0'}</span>
          <span className="flex items-center gap-1" aria-hidden>
            Less
            {levelClass.map((c) => (
              <span key={c} className={`size-2.5 rounded-[2px] ${c}`} />
            ))}
            More
          </span>
        </div>
      </Reveal>
    </section>
  );
}

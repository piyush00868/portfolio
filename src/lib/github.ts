import 'server-only';
import type { ContributionDay, ContributionsResponse } from '@/types/github';

const API_BASE = 'https://github-contributions-api.jogruber.de/v4';

/** How long contribution data is cached (seconds). Matches the old proxy's 1h TTL. */
export const CONTRIBUTIONS_REVALIDATE = 3600;

/**
 * Fetch the last year of public contributions for a GitHub user.
 * Cached by Next's data cache and revalidated hourly. Throws on failure.
 */
export async function fetchContributions(username: string): Promise<ContributionsResponse> {
  const res = await fetch(`${API_BASE}/${encodeURIComponent(username)}?y=last`, {
    next: { revalidate: CONTRIBUTIONS_REVALIDATE },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Contributions API responded ${res.status}`);
  const data = (await res.json()) as ContributionsResponse;
  if (!Array.isArray(data.contributions)) throw new Error('Unexpected contributions payload');
  return data;
}

export interface CalendarCell {
  /** null = leading padding cell before the first day */
  day: ContributionDay | null;
}

export interface ContributionCalendar {
  cells: CalendarCell[];
  /** One label per week column ('' when no month label belongs there). */
  monthLabels: string[];
  total: number;
}

const parseDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

/**
 * Lay out days into a 7-row, week-column grid (Sunday first), with month
 * labels on the first week of each month. Same layout as the original site.
 */
export function buildContributionCalendar(data: ContributionsResponse): ContributionCalendar {
  const days = data.contributions;
  const first = days[0];
  if (!first) return { cells: [], monthLabels: [], total: 0 };

  const pad = parseDate(first.date).getUTCDay();
  const cells: CalendarCell[] = [
    ...Array.from({ length: pad }, () => ({ day: null })),
    ...days.map((day) => ({ day })),
  ];

  const weeks = Math.ceil(cells.length / 7);
  const monthLabels: string[] = [];
  let lastMonth = -1;
  for (let w = 0; w < weeks; w++) {
    const day = days[Math.max(0, w * 7 - pad)];
    if (!day) {
      monthLabels.push('');
      continue;
    }
    const date = parseDate(day.date);
    const month = date.getUTCMonth();
    if (month !== lastMonth && w < weeks - 2) {
      monthLabels.push(date.toLocaleString('en', { month: 'short', timeZone: 'UTC' }));
      lastMonth = month;
    } else {
      monthLabels.push('');
    }
  }

  const total = data.total.lastYear ?? Object.values(data.total)[0] ?? 0;
  return { cells, monthLabels, total };
}

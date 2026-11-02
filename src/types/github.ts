/** Shape returned by github-contributions-api.jogruber.de (v4, ?y=last). */
export interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

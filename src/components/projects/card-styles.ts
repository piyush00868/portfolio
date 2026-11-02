/**
 * Shared Tailwind classes for the project grid cells, used by both the
 * project cards and the trailing "More on GitHub" tile.
 */
export const cardClass =
  'group relative block cursor-pointer border-b border-dashed border-line-strong px-4 pt-3.5 pb-[22px] odd:border-r [&:nth-last-child(-n+2)]:border-b-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-fg max-[720px]:odd:border-r-0 max-[720px]:[&:nth-last-child(2)]:border-b';
export const cardHeadClass = 'mt-3.5 flex items-baseline justify-between';
export const cardTaglineClass = 'text-[12.5px] text-muted';
export const cardSummaryClass = 'mt-3 text-[14.5px] leading-[1.45] text-muted';
export const cardFootClass = 'mt-4 flex items-center justify-between gap-2.5';

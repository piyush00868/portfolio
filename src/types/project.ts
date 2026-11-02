export type ProjectLinkIcon = 'globe' | 'github';

export interface ProjectLink {
  label: string;
  href: string;
  icon: ProjectLinkIcon;
  /** Shown as an icon button on the card (all links always appear in the modal). */
  onCard?: boolean;
  /** Tooltip for the card icon button. */
  cardTitle?: string;
}

/** Visual style of the card cover. Each maps to a component in components/projects/covers. */
export type ProjectCover =
  | { kind: 'screenshot'; gradient: CoverGradient; image: string; alt: string }
  | { kind: 'terminal'; gradient: CoverGradient }
  | { kind: 'event-dashboard'; gradient: CoverGradient };

export type CoverGradient = 'blue' | 'green' | 'orange' | 'mono';

export type ProjectStatus = 'live' | 'open-source';

export interface Project {
  slug: string;
  title: string;
  /** One-liner under the title on the card. */
  tagline: string;
  /** Short paragraph on the card. */
  summary: string;
  /** Heading shown under the title in the modal. */
  modalSubtitle: string;
  status?: ProjectStatus;
  /** Optional diagonal ribbon on the cover. */
  ribbon?: string;
  cover: ProjectCover;
  /** A few headline technologies shown on the card. */
  cardTags: readonly string[];
  /** Full technology list shown in the modal. */
  tags: readonly string[];
  /** Detailed bullet points for the modal. */
  highlights: readonly string[];
  links: readonly ProjectLink[];
}

/** The trailing "More on GitHub" tile in the projects grid. */
export interface MoreProjectsCard {
  href: string;
  title: string;
  handle: string;
  tagline: string;
  summary: string;
  tags: readonly string[];
}

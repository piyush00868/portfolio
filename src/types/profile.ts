/** Text with optional emphasized runs, e.g. ['I build with ', { strong: 'Node.js' }, '.'] */
export type RichText = ReadonlyArray<string | { strong: string }>;

export type SocialIcon = 'github' | 'linkedin' | 'x' | 'mail' | 'clip';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
  /** Open in a new tab (default true for http links). */
  external?: boolean;
}

export interface Profile {
  name: string;
  shortName: string;
  age: number;
  location: string;
  email: string;
  githubUsername: string;
  resumePath: string;
  /** Short status shown in the hero badge. */
  availability: string;
  /** Longer status used on the contact page. */
  availabilityLong: string;
  /** Titles that rotate under the name. The first one is server-rendered. */
  roles: readonly [string, ...string[]];
  timezone: { iana: string; label: string };
  about: readonly RichText[];
  interests: readonly string[];
  socials: readonly SocialLink[];
  quote: { text: string; author: string };
  banner: { src: string; alt: string };
  avatar: { src: string; alt: string };
}

export interface SiteConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface Education {
  institution: string;
  shortName: string;
  degree: string;
  start: string;
  end: string;
  /** Small details row under the degree. */
  details: readonly string[];
}

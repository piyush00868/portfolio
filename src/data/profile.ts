import type { Profile, SiteConfig } from '@/types/profile';

/**
 * Who I am. Edit this file to change the hero, About, contact links,
 * quote and anything else personal on the site.
 */
export const profile = {
  name: 'Piyush Kumar',
  shortName: 'Piyush',
  age: 19,
  location: 'Patna, India',
  email: 'piyushkumar52679@gmail.com',
  githubUsername: 'piyush00868',
  resumePath: '/resume.pdf',
  availability: 'Open to internships',
  availabilityLong: 'Open to internships & collaborations',
  roles: ['Full-Stack Developer', 'Build Web Apps', 'AI Agent', 'Problem Solver'],
  timezone: { iana: 'Asia/Kolkata', label: 'IST' },
  about: [
    ["I'm a ", { strong: 'Full-Stack & Developer' }, ' who love building web apps end to end.'],
    [
      'I build with ',
      { strong: 'Node.js, Express.js, TypeScript' },
      ' and ',
      { strong: 'PostgreSQL' },
    ],
    [
      'Currently in 2nd-year undergraduate at ',
      { strong: 'IIT Patna' },
      ', studying Computer Science   & open to internships, freelance work and collaborations.',
    ],
  ],
  interests: ['Backend engineering', 'Agentic AI', 'RAG', 'AI agents', 'System design'],
  socials: [
    { label: 'GitHub', href: 'https://github.com/piyush00868', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/piyush-kumar-7a594227a/',
      icon: 'linkedin',
    },
    { label: 'Twitter', href: 'https://x.com/piyushkumarr_', icon: 'x' },
    { label: 'Mail', href: 'mailto:piyushkumar52679@gmail.com', icon: 'mail', external: false },
    { label: 'Resume', href: '/resume.pdf', icon: 'clip', external: true },
  ],
  quote: { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  banner: { src: '/assets/banner.webp', alt: 'Pixel art of a riverside at dusk' },
  avatar: { src: '/assets/avatar.webp', alt: 'Piyush Kumar' },
} as const satisfies Profile;

export const site = {
  title: 'Piyush Kumar Portfolio',
  description:
    'Piyush Kumar — Backend & AI engineer at IIT Patna. Building full-stack apps, RAG pipelines and agentic systems.',
  ogTitle: 'Piyush Kumar — Portfolio',
  ogDescription:
    'Backend & AI engineer at IIT Patna. Building full-stack apps, RAG pipelines and agentic systems.',
  ogImage: '/assets/banner.webp',
} as const satisfies SiteConfig;

/** Sections linked from the navbar, in order. `mobile` links stay visible on small screens. */
export const navItems = [
  { id: 'home', label: 'Home', mobile: true },
  { id: 'projects', label: 'Projects', mobile: false },
  { id: 'education', label: 'Education', mobile: false },
  { id: 'stack', label: 'Stack', mobile: false },
  { id: 'blog', label: 'Blog', mobile: true },
] as const;

export type NavSectionId = (typeof navItems)[number]['id'];

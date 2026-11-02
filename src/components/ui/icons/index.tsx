import type { SVGProps } from 'react';
import type { SocialIcon } from '@/types/profile';
import type { ProjectLinkIcon } from '@/types/project';
import type { TechIcon as TechIconSpec } from '@/types/tech-stack';
import { brandIcons } from '@/data/icons/brand-icons';
import { glyphIcons } from '@/data/icons/glyph-icons';
import { GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon, PaperclipIcon, XIcon } from './ui-icons';

export * from './ui-icons';

type IconProps = SVGProps<SVGSVGElement>;

const socialIcons: Record<SocialIcon | ProjectLinkIcon, (p: IconProps) => React.JSX.Element> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: MailIcon,
  clip: PaperclipIcon,
  globe: GlobeIcon,
};

/** Renders one of the named link icons (social tiles, project links). */
export function LinkIcon({ name, ...props }: IconProps & { name: SocialIcon | ProjectLinkIcon }) {
  const Icon = socialIcons[name];
  return <Icon {...props} />;
}

/** Filled 24x24 logo for a tech-stack chip. */
export function TechIcon({ icon, ...props }: IconProps & { icon: TechIconSpec }) {
  const d = 'brand' in icon ? brandIcons[icon.brand].path : glyphIcons[icon.glyph];
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path d={d} />
    </svg>
  );
}

/** Hover color for a tech icon, or null to fall back to the text color. */
export function techIconHover(icon: TechIconSpec): string | null {
  return 'brand' in icon ? brandIcons[icon.brand].hover : null;
}

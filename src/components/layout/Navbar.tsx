import { NavLinks } from './NavLinks';
import { profile } from '@/data/profile';

/** Sticky, blurred top bar. Only the links (active dot, theme) hydrate. */
export function Navbar() {
  return (
    <nav
      className="hl-top sticky top-0 z-50 bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] backdrop-blur-[14px]"
      aria-label="Main"
    >
      <div className="flex h-12 items-center justify-between px-3">
        <a href="#home" className="font-serif text-[30px] leading-none tracking-[-0.01em]">
          {profile.shortName}
        </a>
        <NavLinks />
      </div>
    </nav>
  );
}

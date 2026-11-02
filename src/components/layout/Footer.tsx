import { VisitorCounter } from './VisitorCounter';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="hl text-muted px-5 pt-[30px] pb-[34px] text-center text-sm leading-[2]">
      Designed &amp; Developed by <b className="text-fg font-semibold">{profile.shortName}</b>
      <br />© {new Date().getFullYear()} All rights reserved.
      <VisitorCounter />
    </footer>
  );
}

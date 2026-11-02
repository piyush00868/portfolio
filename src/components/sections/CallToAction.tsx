import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** "Scrolled Too Far" + Let's Talk button to the contact page. */
export function CallToAction() {
  return (
    <section>
      <SectionHeading title="Scrolled Too Far" />
      <Reveal className="px-5 pt-[70px] pb-20 text-center">
        <p className="text-muted text-xl">
          If you&apos;ve read this far, you might be interested in what I build.
        </p>
        <Link
          className="group bg-btn-bg text-btn-fg mt-[22px] inline-flex items-center gap-2.5 rounded-full px-[46px] py-3 text-[15px] font-semibold [box-shadow:var(--shadow)] transition-transform duration-200 hover:-translate-y-0.5"
          href="/contact"
        >
          Let&apos;s Talk{' '}
          <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
        </Link>
      </Reveal>
    </section>
  );
}

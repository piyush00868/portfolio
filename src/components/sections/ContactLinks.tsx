import { ArrowUpRightIcon, LinkIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';
import { externalLinkProps, isExternalUrl } from '@/lib/utils';

/**
 * The row of GitHub / LinkedIn / Twitter / Mail / Resume tiles. On phones
 * (≤720px) each tile collapses to a centered icon; the label stays available
 * to screen readers and as a tooltip.
 */
export function ContactLinks() {
  return (
    <section id="contact">
      <SectionHeading title="Contact" />
      <Reveal className="grid grid-cols-5">
        {profile.socials.map((link) => {
          const external = 'external' in link ? link.external : isExternalUrl(link.href);
          return (
            <a
              key={link.label}
              className="group border-line-strong hover:bg-chip relative flex items-center gap-2.5 border-r border-dashed px-3 py-2 text-base font-medium transition-colors duration-200 last:border-r-0 max-[720px]:justify-center max-[720px]:px-0 max-[720px]:py-2.5"
              href={link.href}
              title={link.label}
              {...(external ? externalLinkProps : {})}
            >
              <span className="border-line-strong bg-bg grid size-10 shrink-0 place-items-center rounded-[10px] border [&_svg]:size-[19px]">
                <LinkIcon name={link.icon} />
              </span>
              <span className="max-[720px]:sr-only">{link.label}</span>
              <ArrowUpRightIcon className="text-muted group-hover:text-fg ml-auto size-[13px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-[720px]:hidden" />
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}

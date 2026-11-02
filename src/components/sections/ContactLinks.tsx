import { ArrowUpRightIcon, LinkIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';
import { externalLinkProps, isExternalUrl } from '@/lib/utils';

/** The row of GitHub / LinkedIn / Twitter / Mail / Resume tiles. */
export function ContactLinks() {
  return (
    <section id="contact">
      <SectionHeading title="Contact" />
      <Reveal className="grid grid-cols-5 max-[720px]:grid-cols-2">
        {profile.socials.map((link) => {
          const external = 'external' in link ? link.external : isExternalUrl(link.href);
          return (
            <a
              key={link.label}
              className="group border-line-strong hover:bg-chip relative flex items-center gap-2.5 border-r border-dashed px-3 py-2 text-base font-medium transition-colors duration-200 last:border-r-0 max-[720px]:border-b max-[720px]:last:col-span-2 max-[720px]:last:border-b-0 max-[720px]:even:border-r-0"
              href={link.href}
              {...(external ? externalLinkProps : {})}
            >
              <span className="border-line-strong bg-bg grid size-10 shrink-0 place-items-center rounded-[10px] border [&_svg]:size-[19px]">
                <LinkIcon name={link.icon} />
              </span>
              {link.label}
              <ArrowUpRightIcon className="text-muted group-hover:text-fg ml-auto size-[13px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}

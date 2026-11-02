import { Reveal } from '@/components/ui/Reveal';
import { RichText } from '@/components/ui/RichText';
import { SectionHeading, sectionBodyClass } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

export function About() {
  return (
    <section id="about">
      <SectionHeading title="About" />
      <Reveal className={sectionBodyClass}>
        <ul className="grid list-none gap-3.5">
          {profile.about.map((line, i) => (
            <li
              key={i}
              className="text-fg-2 before:bg-muted [&_b]:text-fg relative pl-[18px] text-base leading-[1.55] before:absolute before:top-2.5 before:left-0.5 before:size-[5px] before:rounded-full before:content-[''] [&_b]:font-semibold [&_b]:underline [&_b]:decoration-[1.5px] [&_b]:underline-offset-[3px]"
            >
              <RichText value={line} />
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-faint mr-1 font-mono text-[11px]">( currently into )</span>
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="border-line-strong text-fg-2 rounded-full border border-dashed px-[11px] py-[3px] text-[12.5px]"
            >
              {interest}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

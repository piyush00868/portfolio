import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading, sectionBodyClass } from '@/components/ui/SectionHeading';
import { education } from '@/data/education';

export function Education() {
  return (
    <section id="education">
      <SectionHeading title="Education" />
      <Reveal className={sectionBodyClass}>
        {education.map((item) => (
          <div key={item.institution} className="flex items-start gap-4">
            <div className="border-line-strong bg-chip grid size-12 shrink-0 place-items-center rounded-[10px] border font-serif text-xl">
              {item.shortName}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2.5">
                <h3 className="text-[17px] font-semibold">{item.institution}</h3>
                <span className="text-muted font-mono text-[12.5px]">
                  {item.start} — {item.end}
                </span>
              </div>
              <div className="text-fg-2 mt-0.5 text-[14.5px]">{item.degree}</div>
              <div className="text-muted mt-1.5 flex flex-wrap gap-3.5 text-[13px]">
                {item.details.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

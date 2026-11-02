import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading, SectionHint, sectionBodyClass } from '@/components/ui/SectionHeading';

/** Placeholder until the first posts are published. */
export function Blog() {
  return (
    <section id="blog">
      <SectionHeading title="Blog">
        <SectionHint>( writing in progress )</SectionHint>
      </SectionHeading>
      <Reveal className={sectionBodyClass}>
        <div className="hatch-wide border-line-strong rounded-xl border border-dashed px-5 py-[38px] text-center">
          <div className="border-line bg-chip text-muted inline-flex items-center gap-[7px] rounded-full border px-2.5 py-0.5 font-mono text-[11.5px]">
            <i className="bg-soon size-1.5 rounded-full" />
            coming soon
          </div>
          <p className="mt-3 font-serif text-[40px] leading-[1.1] tracking-[-0.01em]">
            Dropping them soon
            <span aria-hidden>
              <span className="animate-blink">.</span>
              <span className="animate-blink [animation-delay:.2s]">.</span>
              <span className="animate-blink [animation-delay:.4s]">.</span>
            </span>
          </p>
          <p className="text-muted mt-2 text-[14.5px]">
            Notes on backend engineering, system design, RAG and building AI agents.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

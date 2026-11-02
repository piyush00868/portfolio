import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

export function Quote() {
  return (
    <Reveal as="section" className="px-5 pt-[34px] pb-10 text-center">
      <div
        className="text-faint h-[30px] [font-family:Georgia,serif] text-[56px] leading-[0.6]"
        aria-hidden
      >
        &ldquo;
      </div>
      <blockquote className="text-fg-2 mx-auto mt-2 max-w-[640px] text-[30px] leading-[1.6] font-medium tracking-[0.03em] italic max-[720px]:text-[23px]">
        &ldquo;{profile.quote.text}&rdquo;
      </blockquote>
      <cite className="text-muted before:bg-line-strong after:bg-line-strong mt-[22px] flex items-center justify-center gap-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase not-italic before:h-px before:w-10 before:content-[''] after:h-px after:w-10 after:content-['']">
        {profile.quote.author}
      </cite>
    </Reveal>
  );
}

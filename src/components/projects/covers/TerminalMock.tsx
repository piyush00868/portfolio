import { Fragment } from 'react';

const stages = ['search', 'reader', 'writer', 'critic'];

const steps: Array<[string, string]> = [
  ['▸ search_agent', 'tavily · tool call'],
  ['▸ reader_agent', 'scrape · strip · cap'],
  ['▸ writer_chain', 'prompt | llm | parser'],
  ['▸ critic_chain', 'score /10 · verdict'],
];

const dim = 'text-[#6b7280]';
const bright = 'text-white';

/** Illustration for the Multi-Agent Research card (not a screenshot). */
export function TerminalMock() {
  return (
    <div className="h-full bg-[#0b0f0e] font-mono text-[9.5px] text-[#d1fae5]" aria-hidden>
      <div className="flex gap-[5px] border-b border-[#1f2a27] px-2.5 py-2">
        <i className="size-2 rounded-full bg-[#f87171]" />
        <i className="size-2 rounded-full bg-[#fbbf24]" />
        <i className="size-2 rounded-full bg-[#34d399]" />
      </div>
      <div className="flex items-center gap-[5px] px-3 pt-2.5">
        {stages.map((stage, i) => (
          <Fragment key={stage}>
            {i > 0 && <em className="text-[#4b5563] not-italic">→</em>}
            <span className="rounded-[5px] border border-[#1f3b33] bg-[#0f1d19] px-1.5 py-[3px] text-[8.5px] text-[#a7f3d0]">
              {stage}
            </span>
          </Fragment>
        ))}
      </div>
      <pre className="px-3 py-2.5 font-[inherit] leading-[1.75] whitespace-pre">
        <span className={dim}>$</span> <span className={bright}>python app.py</span>{' '}
        <span className={dim}>--topic &quot;&lt;your topic&gt;&quot;</span>
        {steps.map(([key, note]) => (
          <Fragment key={key}>
            {'\n'}
            <span className="text-[#6ee7b7]">{key}</span>
            {'  '}
            <span className={dim}>{note}</span>
          </Fragment>
        ))}
        {'\n'}
        <span className={bright}>✓ report ready</span>
        {'  '}
        <span className={dim}>temperature=0</span>
      </pre>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { EyeIcon } from '@/components/ui/icons';
import { formatVisitors, getVisitorCount } from '@/lib/visitors';

type State = { status: 'loading' } | { status: 'ready'; count: number } | { status: 'error' };

/** Eye badge with the unique-visitor count. Hides itself if the counter is unreachable. */
export function VisitorCounter() {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    getVisitorCount(controller.signal)
      .then((count) => setState({ status: 'ready', count }))
      .catch((err: unknown) => {
        if (!controller.signal.aborted) {
          console.warn('Visitor counter unavailable', err);
          setState({ status: 'error' });
        }
      });
    return () => controller.abort();
  }, []);

  if (state.status === 'error') return null;

  return (
    <div
      className="border-line bg-chip text-muted mx-auto mt-3.5 flex w-fit items-center gap-[7px] rounded-full border py-[3px] pr-3 pl-2.5 font-mono text-[12.5px] leading-[1.6]"
      title="Visitors"
    >
      <EyeIcon className="size-[15px]" />
      <span>{state.status === 'ready' ? formatVisitors(state.count) : '…'}</span>
    </div>
  );
}

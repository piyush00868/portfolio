'use client';

import { useEffect, useState } from 'react';
import { ClockIcon } from '@/components/ui/icons';

const REFRESH_MS = 15_000;

function formatTime(timeZone: string, label: string) {
  const time = new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone,
  }).format(new Date());
  return `${time.toUpperCase()} ${label}`;
}

/**
 * My local time. Renders a placeholder on the server and fills in after
 * mount, so server and client HTML always match.
 */
export function LocalClock({ timeZone, label }: { timeZone: string; label: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatTime(timeZone, label));
    update();
    const id = window.setInterval(update, REFRESH_MS);
    return () => window.clearInterval(id);
  }, [timeZone, label]);

  return (
    <div
      className="text-faint absolute top-[18px] right-[22px] flex items-center gap-1.5 font-mono text-xs max-[720px]:hidden"
      title={`My local time (${label})`}
    >
      <ClockIcon className="size-[13px]" />
      <span>{time ?? '--:--'}</span>
    </div>
  );
}

import { cn } from '@/lib/utils';

/** t = taken, s = selected, . = free (16 seats, two rows of 8) */
const SEATS = 'tts.t..t.t.s..t.';

const bookings: Array<{ width: string; approved: boolean }> = [
  { width: '60%', approved: true },
  { width: '50%', approved: false },
  { width: '66%', approved: true },
  { width: '44%', approved: false },
];

const pillButton = 'rounded-full px-2 py-[3px] font-semibold text-white';
const line = 'h-[5px] rounded-[3px]';
const statusChip = 'rounded px-1 py-px text-[7.5px] font-semibold';

/** Illustration for the EventEra card: booking page + admin approvals (not a screenshot). */
export function EventDashboardMock() {
  return (
    <div className="h-full px-3.5 py-3 font-sans text-[9px] text-[#111]" aria-hidden>
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-[5px] text-[11px] font-bold">
          <i className="size-3 rounded bg-[linear-gradient(135deg,#fb923c,#e11d48)]" />
          EventEra
        </div>
        <div className="flex gap-2 text-[#666]">
          <span>Events</span>
          <span>Bookings</span>
          <span>Admin</span>
        </div>
        <span className={cn(pillButton, 'bg-[#111]')}>Sign in</span>
      </div>

      <div className="grid grid-cols-[1.2fr_1fr] gap-2.5">
        <div className="overflow-hidden rounded-lg border border-[#eee]">
          <div className="relative h-[54px] bg-[linear-gradient(135deg,#fed7aa,#fda4af)]">
            <b className="absolute top-1.5 left-1.5 rounded-[5px] bg-white px-[5px] py-0.5 text-[8px]">
              Upcoming
            </b>
          </div>
          <div className="grid gap-1 px-[7px] py-1.5">
            <div className={cn(line, 'w-[80%] bg-[#d4d4d4]')} />
            <div className={cn(line, 'w-[55%] bg-[#e5e5e5]')} />
            <div className="mt-[3px] grid grid-cols-8 gap-[3px]">
              {[...SEATS].map((s, i) => (
                <span
                  key={i}
                  className={cn(
                    'aspect-square rounded-[2px]',
                    s === 't' ? 'bg-[#f43f5e]' : s === 's' ? 'bg-[#fb923c]' : 'bg-[#e5e5e5]',
                  )}
                />
              ))}
            </div>
            <div className="mt-1 flex justify-end">
              <span className={cn(pillButton, 'bg-[#f43f5e]')}>Book ticket</span>
            </div>
          </div>
        </div>

        <div className="grid gap-1.5 rounded-lg border border-[#eee] p-[7px]">
          <b className="text-[9px]">Bookings</b>
          {bookings.map((b, i) => (
            <div key={i} className="flex items-center justify-between gap-1.5">
              <div className={cn(line, 'bg-[#e5e5e5]')} style={{ width: b.width }} />
              <span
                className={cn(
                  statusChip,
                  b.approved ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fef3c7] text-[#92400e]',
                )}
              >
                {b.approved ? 'Approved' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

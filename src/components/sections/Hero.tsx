import Image from 'next/image';
import { LocalClock } from './hero/LocalClock';
import { RotatingRole } from './hero/RotatingRole';
import { StatusPill } from '@/components/ui/StatusPill';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section id="home" className="hl-top">
      <div className="px-2 py-1">
        <div
          className="relative h-[210px] overflow-hidden rounded bg-[#0f172a] bg-cover bg-center bg-no-repeat [image-rendering:pixelated] max-[720px]:h-[140px]"
          role="img"
          aria-label={profile.banner.alt}
          style={{ backgroundImage: `url('${profile.banner.src}')` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,.25))]" />
        </div>
      </div>

      <div className="hl-top relative flex items-center gap-7 px-6 py-5 max-[720px]:items-start max-[720px]:gap-4 max-[720px]:px-4 max-[720px]:py-[18px]">
        <div className="border-line-strong bg-chip size-[120px] shrink-0 rounded-[14px] border p-1 shadow-[inset_0_0_0_3px_var(--bg-2)] max-[720px]:size-[84px]">
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            width={120}
            height={120}
            priority
            className="size-full rounded-[10px] object-cover"
          />
        </div>
        <div>
          <div className="text-muted inline-flex items-center gap-2 text-[13px]">
            <StatusPill>{profile.availability}</StatusPill>
          </div>
          <h1 className="mt-1 font-serif text-[46px] leading-[1.05] font-normal tracking-[-0.01em] max-[720px]:text-[36px]">
            {profile.name}
          </h1>
          <RotatingRole roles={profile.roles} />
          <div className="text-muted mt-0.5 text-[12.5px] font-medium">
            {profile.age}, {profile.location}
          </div>
        </div>
        <LocalClock timeZone={profile.timezone.iana} label={profile.timezone.label} />
      </div>
    </section>
  );
}

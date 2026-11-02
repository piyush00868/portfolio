import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact/ContactForm';
import { PageContainer } from '@/components/layout/PageContainer';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Contact · ${profile.name}`,
  description: `Get in touch with ${profile.name} about internships, projects and collaborations.`,
};

export default function ContactPage() {
  return (
    <PageContainer as="main" className="flex flex-col">
      <div className="hl-bottom flex items-center justify-between gap-3 px-[22px] py-[18px]">
        <Link
          className="group text-muted hover:text-fg inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.08em] transition-colors duration-200"
          href="/"
        >
          <ArrowLeftIcon className="size-[15px] transition-transform duration-200 group-hover:-translate-x-[3px]" />
          HOME
        </Link>
        <div className="flex items-center gap-2">
          <span className="border-line-strong bg-chip text-fg-2 inline-flex items-center gap-[7px] rounded-md border px-2.5 py-1 text-xs">
            <i className="animate-ping-dot-sm bg-online size-1.5 rounded-full" />
            <span className="max-[600px]:hidden">{profile.availabilityLong}</span>
          </span>
          <ThemeToggle size="sm" />
        </div>
      </div>

      <div className="hl-bottom animate-enter px-[22px] pt-10 pb-[30px] [animation-delay:.08s] motion-reduce:animate-none">
        <h1 className="font-serif text-[64px] leading-none tracking-[-0.01em] max-[600px]:text-5xl">
          Let&apos;s Connect
        </h1>
        <p className="text-muted mt-2.5 text-lg">
          Let&apos;s talk about internships, projects or your next idea.
        </p>
      </div>

      <ContactForm />
    </PageContainer>
  );
}

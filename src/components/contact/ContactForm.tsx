'use client';

import Link from 'next/link';
import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/icons';
import { profile } from '@/data/profile';
import { sendContactMessage, validateContactMessage } from '@/lib/contact';

type FormState =
  | { status: 'idle' }
  | { status: 'sending' }
  | { status: 'error'; message: string }
  | { status: 'sent' };

const SEND_FAILED = "Couldn't send right now. Please email me directly instead.";

const inputClass =
  'w-full resize-y border-0 border-b border-line-strong bg-transparent px-0.5 pt-3 pb-3.5 text-[16.5px] text-fg outline-none transition-[border-color] duration-[250ms] placeholder:text-faint focus:border-fg';

/** Labeled underline field. The label lights up while the field has focus. */
function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="text-faint group-focus-within:text-fg block font-mono text-[11px] tracking-[0.1em] uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/** Name / email / message form with inline validation, loading, error and success states. */
export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: 'idle' });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('_honey')) return; // bot

    const result = validateContactMessage({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    });
    if (!result.ok) {
      setState({ status: 'error', message: result.error });
      return;
    }

    setState({ status: 'sending' });
    try {
      await sendContactMessage(result.value);
      setState({ status: 'sent' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Contact form failed', err);
      setState({ status: 'error', message: SEND_FAILED });
    }
  }

  if (state.status === 'sent') {
    return (
      <section className="px-[22px] pt-[50px] pb-[60px] text-center" aria-live="polite">
        <div className="border-line-strong bg-chip mx-auto grid size-[54px] place-items-center rounded-full border">
          <CheckIcon className="text-online size-6" />
        </div>
        <h2 className="mt-4 font-serif text-[40px] tracking-[-0.01em]">Message sent</h2>
        <p className="text-muted mt-1.5">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <Link
          href="/"
          className="border-line-strong hover:bg-chip mt-[22px] inline-flex rounded-full border px-[18px] py-2 text-sm"
        >
          ← Back to home
        </Link>
      </section>
    );
  }

  const statusText =
    state.status === 'sending' ? 'Sending…' : state.status === 'error' ? state.message : '';

  return (
    <>
      <form
        className="animate-enter grid gap-[26px] px-[22px] pt-[30px] pb-2.5 [animation-delay:.16s] motion-reduce:animate-none"
        onSubmit={onSubmit}
        noValidate
      >
        {/* Spam trap: invisible to people, filled in by naive bots */}
        <input
          className="absolute -left-[9999px] size-px opacity-0"
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
        />
        <Field id="name" label="Name">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="What should I call you?"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="How can I contact you?"
            required
            maxLength={200}
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field id="message" label="Message">
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
            maxLength={5000}
            className={`${inputClass} min-h-[120px]`}
          />
        </Field>
        <div className="mt-1.5 flex flex-wrap items-center gap-[18px]">
          <button
            type="submit"
            disabled={state.status === 'sending'}
            className="group bg-btn-bg text-btn-fg light:shadow-[0_10px_40px_rgba(0,0,0,.12)] inline-flex cursor-pointer items-center gap-2.5 rounded-full border-0 px-7 py-[13px] text-base font-semibold shadow-[0_10px_40px_rgba(0,0,0,.5)] [transition:translate_.2s,opacity_.2s] hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-progress disabled:opacity-60"
          >
            Send Message{' '}
            <ArrowRightIcon className="size-[17px] transition-transform duration-200 group-hover:translate-x-[3px]" />
          </button>
          <span
            className="text-muted text-sm data-[tone=error]:text-[#f87171]"
            data-tone={state.status === 'error' ? 'error' : undefined}
            role="status"
            aria-live="polite"
          >
            {statusText}
          </span>
        </div>
      </form>
      <p className="animate-enter text-muted px-[22px] pt-[26px] pb-10 text-[13.5px] motion-reduce:animate-none">
        Prefer email? Write to{' '}
        <a href={`mailto:${profile.email}`} className="text-fg underline underline-offset-[3px]">
          {profile.email}
        </a>
      </p>
    </>
  );
}

/**
 * Contact form delivery via FormSubmit (formsubmit.co). Messages go straight
 * to the inbox below. The very first submission triggers a one-time
 * activation email from FormSubmit that must be confirmed.
 */
import { profile } from '@/data/profile';

const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export type ValidationResult = { ok: true; value: ContactMessage } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Trim and validate raw form input. Error copy matches the original form. */
export function validateContactMessage(input: ContactMessage): ValidationResult {
  const value = {
    name: input.name.trim(),
    email: input.email.trim(),
    message: input.message.trim(),
  };
  if (!value.name || !value.email || !value.message) {
    return { ok: false, error: 'Please fill in all three fields.' };
  }
  if (!EMAIL_RE.test(value.email)) return { ok: false, error: "That email doesn't look right." };
  return { ok: true, value };
}

/** Send a validated message. Throws on any delivery failure. */
export async function sendContactMessage(msg: ContactMessage): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...msg,
      _subject: `Portfolio message from ${msg.name}`,
      _replyto: msg.email,
      _template: 'table',
      _captcha: 'false',
    }),
  });
  const body = (await res.json().catch(() => ({}))) as { success?: unknown; message?: string };
  if (!res.ok || String(body.success) === 'false') {
    throw new Error(body.message ?? 'Message could not be sent');
  }
}

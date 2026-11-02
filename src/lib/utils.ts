/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Props for a link that should open in a new tab. */
export const externalLinkProps = { target: '_blank', rel: 'noopener' } as const;

/** True for absolute http(s) URLs. */
export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/** Absolute site URL for metadata. Prefers an explicit env var, then Vercel's production domain. */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);
  return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
}

import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Instrument_Serif, Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { profile, site } from '@/data/profile';
import { themeInitScript } from '@/lib/theme';
import { getSiteUrl } from '@/lib/utils';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name }],
  icons: { icon: { url: '/assets/favicon.png', type: 'image/png' } },
  openGraph: {
    title: site.ogTitle,
    description: site.ogDescription,
    images: [site.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.ogTitle,
    description: site.ogDescription,
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // data-theme is replaced before paint by themeInitScript, hence suppressHydrationWarning.
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

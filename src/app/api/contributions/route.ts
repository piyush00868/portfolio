import { NextResponse } from 'next/server';
import { profile } from '@/data/profile';
import { fetchContributions } from '@/lib/github';

/**
 * GET /api/contributions
 * Same contract as the original Vercel function: proxies the GitHub
 * contributions JSON unchanged, edge-cached for an hour (stale for a day),
 * or 502 { error: 'unavailable' } if the upstream fails.
 */
export async function GET() {
  try {
    const data = await fetchContributions(profile.githubUsername);
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('GET /api/contributions failed', err);
    return NextResponse.json({ error: 'unavailable' }, { status: 502 });
  }
}

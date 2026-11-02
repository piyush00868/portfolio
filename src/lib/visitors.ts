/**
 * Visitor counter backed by Abacus (abacus.jasoncameron.dev), a free hosted
 * counter API. Each browser is counted once: the first visit increments
 * ("hit"), later visits only read ("get").
 */
const BASE = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'piyush00868-portfolio';
const KEY = 'visitors';
const SEEN_STORAGE_KEY = 'pk_visited';

function hasVisited(): boolean {
  try {
    return localStorage.getItem(SEEN_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function markVisited(): void {
  try {
    localStorage.setItem(SEEN_STORAGE_KEY, '1');
  } catch {
    /* storage unavailable (private mode); count may repeat, which is fine */
  }
}

/** Returns the current unique-visitor count. Throws if the counter is unreachable. */
export async function getVisitorCount(signal?: AbortSignal): Promise<number> {
  const seen = hasVisited();
  let res = await fetch(`${BASE}/${seen ? 'get' : 'hit'}/${NAMESPACE}/${KEY}`, { signal });
  // A "get" on a key that was never hit 404s; fall back to creating it.
  if (!res.ok && seen) res = await fetch(`${BASE}/hit/${NAMESPACE}/${KEY}`, { signal });
  if (!res.ok) throw new Error(`Visitor counter responded ${res.status}`);
  const { value } = (await res.json()) as { value: number };
  if (!seen) markVisited();
  return value;
}

export function formatVisitors(count: number): string {
  return `${count.toLocaleString('en-IN')} ${count === 1 ? 'visitor' : 'visitors'}`;
}

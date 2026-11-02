// Vercel serverless function: proxies GitHub contribution data for the activity graph.
export default async function handler(req, res) {
  try {
    const r = await fetch('https://github-contributions-api.jogruber.de/v4/piyush00868?y=last');
    if (!r.ok) throw new Error('upstream ' + r.status);
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(await r.json());
  } catch (e) {
    res.status(502).json({ error: 'unavailable' });
  }
}

// Local dev server: `node server.js` then open http://localhost:3000
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import handler from './api/contributions.js';
const root = path.join(import.meta.dirname, 'public');
const types = { '.html': 'text/html; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.pdf': 'application/pdf' };
http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x').pathname;
  if (url === '/api/contributions') {
    const shim = { setHeader: (k, v) => res.setHeader(k, v), status: (c) => ({ json: (b) => { res.writeHead(c, { 'content-type': 'application/json' }); res.end(JSON.stringify(b)); } }) };
    return handler(req, shim);
  }
  const file = path.join(root, url === '/' ? 'index.html' : url);
  if (!file.startsWith(root) || !fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(process.env.PORT || 3000, () => console.log('http://localhost:' + (process.env.PORT || 3000)));

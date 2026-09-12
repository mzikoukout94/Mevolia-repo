// Dev runner for the preview environment.
// Angular 18's application (Vite) dev-server blocks unknown hosts and ignores
// --disable-host-check, which breaks the reverse-proxied preview URL.
// Instead we run `ng build --watch` and serve the output with a small SPA
// static server (no host checking) on 0.0.0.0:3000.
import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BROWSER_DIR = path.join(__dirname, 'dist', 'frontend', 'browser');
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

// Start Angular build in watch mode.
const build = spawn(
  'npx',
  ['ng', 'build', '--watch', '--configuration', 'development', '--output-hashing', 'none'],
  { cwd: __dirname, stdio: 'inherit', env: process.env }
);
build.on('exit', (code) => {
  console.error(`[ng build] exited with code ${code}`);
  process.exit(code ?? 1);
});

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  const stream = fs.createReadStream(filePath);
  const cache = ext === '.html' ? 'no-cache' : 'public, max-age=3600';
  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': cache });
  stream.pipe(res);
  stream.on('error', () => { res.writeHead(500); res.end('Server error'); });
}

const server = http.createServer((req, res) => {
  const indexPath = path.join(BROWSER_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    res.writeHead(503, { 'Content-Type': 'text/html; charset=utf-8', 'Retry-After': '3' });
    res.end('<!doctype html><meta http-equiv="refresh" content="3"><body style="font-family:sans-serif;padding:2rem">Compilation en cours… la page se rechargera automatiquement.</body>');
    return;
  }

  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (urlPath.includes('..')) { res.writeHead(400); res.end('Bad request'); return; }
  if (urlPath === '/') urlPath = '/index.html';

  const candidate = path.join(BROWSER_DIR, urlPath);
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    sendFile(res, candidate);
    return;
  }

  // No file extension -> SPA route -> serve index.html
  if (!path.extname(urlPath)) {
    sendFile(res, indexPath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[serve-dev] SPA server ready on http://0.0.0.0:${PORT} (serving ${BROWSER_DIR})`);
});

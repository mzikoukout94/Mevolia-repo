// Dev runner: run the real Angular dev-server on an internal port and expose it
// on 0.0.0.0:3000 through a tiny proxy that rewrites the Host header to
// "localhost" so Vite's allowed-hosts check accepts the reverse-proxied
// preview domain. Keeps HMR, lazy loading and source maps intact.
import { spawn } from 'node:child_process';
import http from 'node:http';
import net from 'node:net';

const PUBLIC_PORT = Number(process.env.PORT || 3000);
const INTERNAL_PORT = 4200;
const INTERNAL_HOST = '127.0.0.1';

const ng = spawn(
  'npx',
  ['ng', 'serve', '--host', INTERNAL_HOST, '--port', String(INTERNAL_PORT), '--poll', '1000'],
  { cwd: process.cwd(), stdio: 'inherit', env: process.env }
);
ng.on('exit', (code) => { console.error(`[ng serve] exited ${code}`); process.exit(code ?? 1); });

const proxy = http.createServer((req, res) => {
  const options = {
    host: INTERNAL_HOST,
    port: INTERNAL_PORT,
    method: req.method,
    path: req.url,
    headers: { ...req.headers, host: `localhost:${INTERNAL_PORT}` },
  };
  const upstream = http.request(options, (up) => {
    res.writeHead(up.statusCode || 502, up.headers);
    up.pipe(res);
  });
  upstream.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/html; charset=utf-8', 'Retry-After': '2' });
    res.end('<!doctype html><meta http-equiv="refresh" content="2"><body style="font-family:sans-serif;padding:2rem">Démarrage du serveur de développement… (' + err.code + ')</body>');
  });
  req.pipe(upstream);
});

// Proxy websocket upgrades (HMR / live reload).
proxy.on('upgrade', (req, socket, head) => {
  const upstream = net.connect(INTERNAL_PORT, INTERNAL_HOST, () => {
    const headers = { ...req.headers, host: `localhost:${INTERNAL_PORT}` };
    let raw = `${req.method} ${req.url} HTTP/1.1\r\n`;
    for (const [k, v] of Object.entries(headers)) raw += `${k}: ${v}\r\n`;
    raw += '\r\n';
    upstream.write(raw);
    if (head && head.length) upstream.write(head);
    socket.pipe(upstream);
    upstream.pipe(socket);
  });
  upstream.on('error', () => socket.destroy());
  socket.on('error', () => upstream.destroy());
});

proxy.listen(PUBLIC_PORT, '0.0.0.0', () => {
  console.log(`[proxy-dev] listening on 0.0.0.0:${PUBLIC_PORT} -> ${INTERNAL_HOST}:${INTERNAL_PORT}`);
});

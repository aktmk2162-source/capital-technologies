// ローカル確認用の簡易サーバー。GitHub Pages への公開には不要です。
// 起動: node serve.js  →  http://localhost:8791
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8791;
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon' };

http.createServer((req, res) => {
  let rel = decodeURIComponent((req.url || '/').split('?')[0]);
  if (rel === '/' || rel === '') { rel = '/index.html'; }
  const file = path.join(__dirname, rel);
  if (!file.startsWith(__dirname)) { res.writeHead(403); res.end('forbidden'); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
}).listen(PORT, () => console.log('serving ' + __dirname + ' on http://localhost:' + PORT));

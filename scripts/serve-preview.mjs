#!/usr/bin/env node

/**
 * Serve Preview Script
 * 
 * Creates a temporary directory structure matching the GitHub Pages deployment
 * and serves it locally for testing.
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const PORT = process.env.PORT || 5000;
const BASE_PATH = '/20forms-20designs';

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

const server = http.createServer((req, res) => {
  let url = req.url || '/';
  
  // Remove query string
  url = url.split('?')[0];
  
  // Handle base path
  if (url.startsWith(BASE_PATH)) {
    url = url.slice(BASE_PATH.length) || '/';
  } else if (url === '/') {
    // Redirect root to base path
    res.writeHead(302, { Location: BASE_PATH + '/' });
    res.end();
    return;
  }
  
  // Default to index.html for directories
  if (url.endsWith('/')) {
    url += 'index.html';
  }
  
  const filePath = path.join(DIST_DIR, url);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try serving index.html for SPA routing (within each mini-app)
        const indexPath = path.join(path.dirname(filePath), 'index.html');
        fs.readFile(indexPath, (err2, indexContent) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(indexContent);
          }
        });
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`
🚀 Preview server running!

   Local:   http://localhost:${PORT}${BASE_PATH}/

   This serves the production build with the correct base path.
   Press Ctrl+C to stop.
`);
});


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

// Try these ports in order if one is in use
const PORTS_TO_TRY = [3000, 3001, 3002, 4000, 4001, 5001, 8000, 8080];
const PORT = process.env.PORT ? parseInt(process.env.PORT) : null;
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

// Try to start server on available port
function startServer(port) {
  server.listen(port, () => {
    console.log(`
🚀 Preview server running!

   Local:   http://localhost:${port}${BASE_PATH}/

   This serves the production build with the correct base path.
   Press Ctrl+C to stop.
`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE' && !PORT) {
    const currentIndex = PORTS_TO_TRY.indexOf(server.currentPort);
    if (currentIndex < PORTS_TO_TRY.length - 1) {
      const nextPort = PORTS_TO_TRY[currentIndex + 1];
      console.log(`Port ${server.currentPort} in use, trying ${nextPort}...`);
      server.currentPort = nextPort;
      server.listen(nextPort);
    } else {
      console.error('All ports are in use. Please specify a port with PORT=XXXX npm run preview');
      process.exit(1);
    }
  } else {
    console.error('Server error:', err.message);
    process.exit(1);
  }
});

// Start with specified port or first in list
const initialPort = PORT || PORTS_TO_TRY[0];
server.currentPort = initialPort;
startServer(initialPort);


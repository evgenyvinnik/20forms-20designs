#!/usr/bin/env node

/**
 * Build Copy Script
 * 
 * This script copies all built mini-apps to the dist directory for GitHub Pages deployment.
 * 
 * Usage: node scripts/copy-builds-to-dist.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS_DIR = path.join(ROOT_DIR, 'apps');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

/**
 * Recursively copy a directory
 */
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Clean the dist directory
 */
function cleanDist() {
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

/**
 * Copy shell app build to dist root
 */
function copyShellBuild() {
  const shellDist = path.join(APPS_DIR, 'shell', 'dist');
  
  if (!fs.existsSync(shellDist)) {
    console.error('❌ Shell app build not found. Run build first.');
    return false;
  }
  
  copyDir(shellDist, DIST_DIR);
  console.log('✅ Copied shell app to dist/');
  return true;
}

/**
 * Copy all mini-app builds to dist subdirectories
 */
function copyMiniAppBuilds() {
  const appDirs = fs.readdirSync(APPS_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && entry.name !== 'shell')
    .map(entry => entry.name);
  
  let copied = 0;
  let missing = 0;
  
  for (const appName of appDirs) {
    const appDist = path.join(APPS_DIR, appName, 'dist');
    const targetDir = path.join(DIST_DIR, appName);
    
    if (fs.existsSync(appDist)) {
      copyDir(appDist, targetDir);
      copied++;
      console.log(`✅ Copied ${appName}`);
    } else {
      missing++;
      console.warn(`⚠️  Missing build for ${appName}`);
    }
  }
  
  return { copied, missing };
}

/**
 * Copy static assets (favicon, etc.)
 */
function copyStaticAssets() {
  const publicDir = path.join(ROOT_DIR, 'public');
  
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    for (const file of files) {
      const src = path.join(publicDir, file);
      const dest = path.join(DIST_DIR, file);
      
      if (fs.statSync(src).isFile()) {
        fs.copyFileSync(src, dest);
        console.log(`📄 Copied ${file}`);
      }
    }
  }
}

/**
 * Generate a simple 404.html for GitHub Pages SPA support
 */
function generate404() {
  const html404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found - Form Library Comparison</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
      color: #e4e4e7;
    }
    .container {
      text-align: center;
      padding: 40px;
    }
    h1 {
      font-size: 6rem;
      margin: 0;
      background: linear-gradient(135deg, #e4e4e7 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: #a1a1aa;
      margin: 16px 0;
    }
    a {
      display: inline-block;
      margin-top: 24px;
      padding: 12px 24px;
      background: #818cf8;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      transition: background 0.2s;
    }
    a:hover {
      background: #6366f1;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/20forms-20designs/">← Back to Home</a>
  </div>
</body>
</html>`;
  
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), html404);
  console.log('📄 Generated 404.html');
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Copying builds to dist...\n');
  
  // Clean dist directory
  cleanDist();
  console.log('🧹 Cleaned dist directory\n');
  
  // Copy shell build
  if (!copyShellBuild()) {
    process.exit(1);
  }
  
  console.log('\n📦 Copying mini-app builds...');
  const { copied, missing } = copyMiniAppBuilds();
  
  console.log('\n📄 Copying static assets...');
  copyStaticAssets();
  
  console.log('\n📄 Generating 404 page...');
  generate404();
  
  console.log(`\n✨ Done!`);
  console.log(`   Copied: ${copied} mini-apps`);
  console.log(`   Missing: ${missing} mini-apps`);
  console.log(`\n   Output directory: ${DIST_DIR}`);
}

main();


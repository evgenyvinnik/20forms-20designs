#!/usr/bin/env node

/**
 * Clean Script
 * 
 * This script cleans build artifacts and node_modules from all apps.
 * 
 * Usage: node scripts/clean.mjs [--deep]
 * 
 * Options:
 *   --deep    Also remove node_modules directories
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS_DIR = path.join(ROOT_DIR, 'apps');
const PACKAGES_DIR = path.join(ROOT_DIR, 'packages');

const deepClean = process.argv.includes('--deep');

/**
 * Remove a directory if it exists
 */
function removeDir(dir, label) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`🗑️  Removed ${label}`);
    return true;
  }
  return false;
}

/**
 * Clean a single app directory
 */
function cleanApp(appDir, appName) {
  let cleaned = false;
  
  // Remove dist
  if (removeDir(path.join(appDir, 'dist'), `${appName}/dist`)) {
    cleaned = true;
  }
  
  // Remove node_modules if deep clean
  if (deepClean) {
    if (removeDir(path.join(appDir, 'node_modules'), `${appName}/node_modules`)) {
      cleaned = true;
    }
  }
  
  return cleaned;
}

/**
 * Main execution
 */
function main() {
  console.log(`🧹 Cleaning project${deepClean ? ' (deep)' : ''}...\n`);
  
  let cleanedCount = 0;
  
  // Clean root dist
  if (removeDir(path.join(ROOT_DIR, 'dist'), 'dist')) {
    cleanedCount++;
  }
  
  // Clean root node_modules if deep
  if (deepClean) {
    if (removeDir(path.join(ROOT_DIR, 'node_modules'), 'node_modules')) {
      cleanedCount++;
    }
  }
  
  // Clean all apps
  if (fs.existsSync(APPS_DIR)) {
    const apps = fs.readdirSync(APPS_DIR, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
    
    for (const appName of apps) {
      const appDir = path.join(APPS_DIR, appName);
      if (cleanApp(appDir, `apps/${appName}`)) {
        cleanedCount++;
      }
    }
  }
  
  // Clean all packages
  if (fs.existsSync(PACKAGES_DIR)) {
    const packages = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
    
    for (const pkgName of packages) {
      const pkgDir = path.join(PACKAGES_DIR, pkgName);
      if (cleanApp(pkgDir, `packages/${pkgName}`)) {
        cleanedCount++;
      }
    }
  }
  
  console.log(`\n✨ Cleaned ${cleanedCount} directories`);
}

main();


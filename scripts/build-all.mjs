#!/usr/bin/env node

/**
 * Build All Script
 * 
 * This script builds all apps in the monorepo:
 * 1. Builds the shell app
 * 2. Builds all mini-apps in parallel (with concurrency limit)
 * 3. Copies all builds to the dist directory
 * 
 * Usage: node scripts/build-all.mjs
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS_DIR = path.join(ROOT_DIR, 'apps');

// Maximum concurrent builds (increase based on CPU cores - typically 8-12 is safe)
const MAX_CONCURRENCY = 12;

/**
 * Run a command in a directory
 */
function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      cwd,
      stdio: 'pipe',
      shell: true,
    });

    let stdout = '';
    let stderr = '';

    proc.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`Command failed with code ${code}\n${stderr}`));
      }
    });

    proc.on('error', reject);
  });
}

/**
 * Build a single app
 */
async function buildApp(appName) {
  const appDir = path.join(APPS_DIR, appName);
  const packageJsonPath = path.join(appDir, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    console.log(`⚠️  Skipping ${appName}: No package.json found`);
    return { app: appName, success: false, reason: 'no-package-json' };
  }

  try {
    await runCommand('npm', ['run', 'build'], appDir);
    console.log(`✅ Built ${appName}`);
    return { app: appName, success: true };
  } catch (error) {
    console.error(`❌ Failed to build ${appName}: ${error.message}`);
    return { app: appName, success: false, reason: error.message };
  }
}

/**
 * Build apps with concurrency limit
 */
async function buildWithConcurrency(appNames, concurrency) {
  const results = [];
  const queue = [...appNames];

  async function worker() {
    while (queue.length > 0) {
      const appName = queue.shift();
      if (appName) {
        const result = await buildApp(appName);
        results.push(result);
      }
    }
  }

  // Start workers
  const workers = Array(Math.min(concurrency, appNames.length))
    .fill(null)
    .map(() => worker());

  await Promise.all(workers);
  return results;
}

/**
 * Get all app directories
 */
function getAppDirectories() {
  return fs.readdirSync(APPS_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Building all apps...\n');
  const startTime = Date.now();

  // Get all apps
  const allApps = getAppDirectories();
  const shellApp = allApps.find(app => app === 'shell');
  const miniApps = allApps.filter(app => app !== 'shell');

  console.log(`Found ${allApps.length} apps (1 shell + ${miniApps.length} mini-apps)\n`);

  // Build shell first
  if (shellApp) {
    console.log('📦 Building shell app...');
    const shellResult = await buildApp('shell');
    if (!shellResult.success) {
      console.error('❌ Shell build failed. Aborting.');
      process.exit(1);
    }
    console.log('');
  }

  // Build mini-apps in parallel
  console.log(`📦 Building ${miniApps.length} mini-apps (concurrency: ${MAX_CONCURRENCY})...\n`);
  const results = await buildWithConcurrency(miniApps, MAX_CONCURRENCY);

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log(`\n✨ Build complete in ${duration}s`);
  console.log(`   ✅ Successful: ${successful + 1} (including shell)`);
  console.log(`   ❌ Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\n❌ Failed builds:');
    failed.forEach(f => console.log(`   - ${f.app}: ${f.reason}`));
  }

  // Copy builds to dist
  console.log('\n📋 Copying builds to dist...');
  try {
    await runCommand('node', ['scripts/copy-builds-to-dist.mjs'], ROOT_DIR);
    console.log('✅ Builds copied to dist/');
  } catch (error) {
    console.error('❌ Failed to copy builds:', error.message);
    process.exit(1);
  }

  console.log('\n🎉 All done! Check the dist/ directory.');
}

main().catch(console.error);


#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const includedExtensions = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.mjs',
  '.cjs',
  '.css',
  '.scss',
  '.less',
  '.html',
  '.json',
  '.md',
]);

const ignoredDirectories = new Set([
  '.cache',
  '.git',
  '.husky',
  '.idea',
  '.next',
  '.pnpm-store',
  '.svelte-kit',
  '.tamagui',
  '.turbo',
  '.vercel',
  '.vitepress',
  '.vscode',
  '.yarn',
  'build',
  'coverage',
  'dist',
  'node_modules',
  'out',
  'storybook-static',
  'temp',
  'tmp',
]);

const ignoredFiles = new Set([
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function isBinary(buffer) {
  return buffer.includes(0);
}

function countFileLines(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (isBinary(buffer)) return 0;
  const text = buffer.toString('utf8');
  return text
    .split(/\r?\n/)
    .filter((line) => line.trim() !== '')
    .length;
}

function walk(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  let total = 0;
  const perExtension = new Map();

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) continue;
      const { total: dirTotal, perExtension: dirExt } = walk(fullPath);
      total += dirTotal;
      for (const [ext, count] of dirExt.entries()) {
        perExtension.set(ext, (perExtension.get(ext) ?? 0) + count);
      }
    } else {
      if (ignoredFiles.has(entry.name)) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!includedExtensions.has(ext)) continue;
      const count = countFileLines(fullPath);
      total += count;
      perExtension.set(ext, (perExtension.get(ext) ?? 0) + count);
    }
  }

  return { total, perExtension };
}

function main() {
  const rootArg = process.argv[2];
  const root = rootArg ? path.resolve(rootArg) : path.resolve(__dirname, '..');
  const { total, perExtension } = walk(root);

  console.log(`Calculating SLOC from ${root}`);
  console.log('SLOC by extension (non-empty lines):');
  const sorted = [...perExtension.entries()].sort((a, b) => b[1] - a[1]);
  for (const [ext, count] of sorted) {
    console.log(`${ext.padEnd(6)}: ${count.toLocaleString('en-US')}`);
  }
  console.log('\nTotal SLOC:', total.toLocaleString('en-US'));
}

main();

import fs from 'node:fs';
import path from 'node:path';

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
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  'coverage',
  '.turbo',
  '.vercel',
  '.cache',
  '.husky',
  '.vscode',
  '.idea',
  '.tamagui',
]);

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
  const root = process.cwd();
  const { total, perExtension } = walk(root);

  console.log('SLOC by extension (non-empty lines):');
  const sorted = [...perExtension.entries()].sort((a, b) => b[1] - a[1]);
  for (const [ext, count] of sorted) {
    console.log(`${ext.padEnd(6)}: ${count.toLocaleString('en-US')}`);
  }
  console.log('\nTotal SLOC:', total.toLocaleString('en-US'));
}

main();

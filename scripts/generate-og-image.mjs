#!/usr/bin/env node

/**
 * Generate Open Graph image (PNG) from SVG
 * 
 * This script converts the og-image.svg to og-image.png for social media sharing.
 * Run with: node scripts/generate-og-image.mjs
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const svgPath = join(publicDir, 'og-image.svg');
const pngPath = join(publicDir, 'og-image.png');

async function generateOgImage() {
  console.log('📸 Generating Open Graph image...');
  
  try {
    const svgBuffer = readFileSync(svgPath);
    
    await sharp(svgBuffer)
      .resize(1200, 630)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(pngPath);
    
    console.log('✅ Generated og-image.png successfully!');
  } catch (error) {
    console.error('❌ Failed to generate OG image:', error.message);
    process.exit(1);
  }
}

generateOgImage();

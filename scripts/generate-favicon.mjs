#!/usr/bin/env node
/**
 * Generates public/favicon.ico from public/teen-patti-gold.webp
 * Run: node scripts/generate-favicon.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const webpPath = path.join(root, 'public', 'teen-patti-gold.webp');
const icoPath = path.join(root, 'public', 'favicon.ico');
const tempPng = path.join(root, 'public', '.favicon-temp.png');

async function main() {
  if (!fs.existsSync(webpPath)) {
    console.error('Source image not found: public/teen-patti-gold.webp');
    process.exit(1);
  }

  console.log('Reading teen-patti-gold.webp...');
  await sharp(webpPath)
    .resize(256, 256)
    .png()
    .toFile(tempPng);

  console.log('Creating favicon.ico...');
  const icoBuf = await pngToIco(tempPng);
  fs.writeFileSync(icoPath, icoBuf);

  fs.unlinkSync(tempPng);
  console.log('Done. Written: public/favicon.ico');
}

main().catch((err) => {
  console.error(err);
  if (fs.existsSync(tempPng)) fs.unlinkSync(tempPng);
  process.exit(1);
});

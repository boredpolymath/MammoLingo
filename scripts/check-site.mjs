import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = new URL('../dist/', import.meta.url);
const requiredFiles = ['index.html', 'privacy.html', 'terms.html', '404.html', 'app.js', 'legal.js', 'styles.css', 'sw.js', 'manifest.webmanifest'];
const externalLink = /<a\b[^>]*href="https:\/\/[^\"]+"[^>]*target="_blank"[^>]*>/g;

const files = await readdir(dist);
for (const file of requiredFiles) assert(files.includes(file), `Missing dist/${file}`);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = await readFile(new URL(file, dist), 'utf8');
  assert.match(html, /Content-Security-Policy/, `${file} needs a CSP`);
  assert.match(html, /<a class="skip-link" href="#main">/, `${file} needs a skip link`);
  for (const tag of html.match(externalLink) || []) assert.match(tag, /rel="noopener noreferrer"/, `${file} external link needs noopener noreferrer`);
}
const appHtml = await readFile(new URL('index.html', dist), 'utf8');
assert.match(appHtml, /<link rel="icon" href="favicon-32\.png" sizes="32x32" type="image\/png"/, 'The app needs a PNG favicon fallback');
assert.match(appHtml, /<link rel="apple-touch-icon" href="apple-touch-icon\.png" sizes="180x180"/, 'The app needs an iOS-compatible Apple touch icon');
for (const asset of ['favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) {
  await stat(path.join(fileURLToPath(dist), asset));
}
const manifest = JSON.parse(await readFile(new URL('manifest.webmanifest', dist), 'utf8'));
assert(manifest.icons.some((icon) => icon.src === 'icon-192.png' && icon.sizes === '192x192' && icon.type === 'image/png'), 'Manifest needs a 192px PNG icon');
assert(manifest.icons.some((icon) => icon.src === 'icon-512.png' && icon.sizes === '512x512' && icon.type === 'image/png'), 'Manifest needs a 512px PNG icon');
const app = await readFile(new URL('app.js', dist), 'utf8');
assert.match(app, /window\.MammoLingo/, 'App test API is missing');
assert.doesNotMatch(app, /innerHTML=.*search\.value/i, 'Search input must not be injected as HTML');
const sw = await readFile(new URL('sw.js', dist), 'utf8');
assert.match(sw, /new URL\(event\.request\.url\)\.origin !== self\.location\.origin/, 'Service worker must not intercept cross-origin requests');
for (const asset of [...sw.matchAll(/'\.\/([^']+)'/g)].map((match) => match[1]).filter((asset) => asset !== '')) {
  try { await stat(path.join(fileURLToPath(dist), asset)); } catch { assert.fail(`Service worker references missing asset: ${asset}`); }
}
console.log(`Validated ${htmlFiles.length} HTML pages and service-worker assets.`);

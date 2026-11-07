import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const worker = await readFile(new URL('../dist/sw.js', import.meta.url), 'utf8');

test('service worker has a versioned cache, same-origin boundary, and navigation-only offline fallback', () => {
  assert.match(worker, /const VERSION='mammogram-explainer-v\d+'/);
  assert.match(worker, /new URL\(event\.request\.url\)\.origin !== self\.location\.origin/);
  assert.match(worker, /event\.request\.mode === 'navigate' \? caches\.match\('\.\/index\.html'\) : Response\.error\(\)/);
  assert.match(worker, /self\.skipWaiting\(\)/);
  assert.match(worker, /self\.clients\.claim\(\)/);
});

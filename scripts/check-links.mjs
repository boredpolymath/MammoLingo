import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const files = (await readdir(dist)).filter((file) => file.endsWith('.html') || file.endsWith('.js'));
const urls = new Set();
for (const file of files) {
  const text = await readFile(new URL(file, dist), 'utf8');
  for (const match of text.matchAll(/https:\/\/[^'"\s<]+/g)) urls.add(match[0].replace(/[).,]+$/, ''));
}
for (const url of urls) {
  const options = { redirect: 'follow', headers: { 'user-agent': 'MammoLingo-LinkCheck/1.0 (+https://github.com/boredpolymath/MammoLingo)', accept: 'text/html,application/xhtml+xml' } };
  let response = await fetch(url, { ...options, method: 'HEAD' });
  if (!response.ok) response = await fetch(url, { ...options, method: 'GET' });
  assert(response.ok, `${url} returned ${response.status}`);
  console.log(`${response.status} ${url}`);
}

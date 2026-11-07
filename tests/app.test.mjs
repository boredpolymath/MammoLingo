import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { JSDOM } from 'jsdom';

const [html, app] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/app.js', import.meta.url), 'utf8')
]);

function boot({ storedBookmarks = null } = {}) {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://example.test/' });
  const { window } = dom;
  window.scrollTo = () => {};
  window.confirm = () => true;
  Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: true });
  Object.defineProperty(window.navigator, 'serviceWorker', { configurable: true, value: { register: () => Promise.resolve({ waiting: null, addEventListener: () => {} }) } });
  window.HTMLDialogElement.prototype.showModal = function showModal() { this.open = true; };
  window.HTMLDialogElement.prototype.close = function close() { this.open = false; this.dispatchEvent(new window.Event('close')); };
  if (storedBookmarks !== null) window.localStorage.setItem('mammogram-bookmarks', storedBookmarks);
  window.eval(app);
  return { dom, window, document: window.document };
}

test('search filters entries and reports the active count', () => {
  const { document } = boot();
  document.querySelector('#search').value = 'density';
  document.querySelector('#searchButton').click();
  assert.equal(document.querySelectorAll('#resultsList .entry-card').length, 2);
  assert.match(document.querySelector('#resultMeta').textContent, /2 entries/);
  assert.deepEqual(Array.from(document.querySelectorAll('#resultsList .entry-open'), (entry) => entry.textContent), ['Breast density', 'Asymmetry']);
});

test('topic filters and clear search return the full glossary', () => {
  const { document } = boot();
  document.querySelector('[data-search="BI-RADS"]').click();
  assert.equal(document.querySelectorAll('#resultsList .entry-card').length, 8);
  document.querySelector('#clearSearch').click();
  assert.equal(document.querySelectorAll('#resultsList .entry-card').length, 41);
  assert.equal(document.querySelector('#search').value, '');
});

test('category pills filter the expanded library without changing the search field', () => {
  const { document } = boot();
  const expectedCounts = { assessment: 8, exam: 8, finding: 18, context: 7 };
  for (const [category, count] of Object.entries(expectedCounts)) {
    document.querySelector(`[data-category="${category}"]`).click();
    assert.equal(document.querySelectorAll('#resultsList .entry-card').length, count);
  }
  assert.equal(document.querySelector('#search').value, '');
  assert.match(document.querySelector('#resultMeta').textContent, /^Context · 7 entries/);
  assert.equal(document.querySelector('[data-category="context"]').getAttribute('aria-pressed'), 'true');
});

test('saved terms update both visible counters and local storage', () => {
  const { window, document } = boot();
  window.MammoLingo.toggleBookmark('mass');
  assert.equal(document.querySelector('.saved-nav-count').textContent, '1');
  assert.equal(document.querySelector('.saved-screen-count').textContent, '1');
  assert.deepEqual(JSON.parse(window.localStorage.getItem('mammogram-bookmarks')).map((item) => item.entry_id), ['mass']);
  window.MammoLingo.toggleBookmark('mass');
  assert.equal(document.querySelector('.saved-nav-count').textContent, '0');
});

test('invalid stored bookmark data is safely ignored', () => {
  const { document } = boot({ storedBookmarks: '{not valid json' });
  assert.match(document.querySelector('#bookmarksList').textContent, /Bookmarks aren’t available/);
});

test('entry dialog contains a protected external source link and restores focus', async () => {
  const { window, document } = boot();
  const opener = document.querySelector('#resultsList .entry-open');
  let restored = false;
  opener.focus = () => { restored = true; };
  window.MammoLingo.openEntry('mass', opener);
  const dialog = document.querySelector('#entryDialog');
  const source = dialog.querySelector('.source-block a');
  assert.equal(dialog.open, true);
  assert.equal(source.target, '_blank');
  assert.equal(source.rel, 'noopener noreferrer');
  dialog.close();
  await new Promise((resolve) => window.setTimeout(resolve, 0));
  assert.equal(restored, true);
});

test('hash navigation exposes one screen and marks its navigation item current', () => {
  const { window, document } = boot();
  window.location.hash = '#help';
  window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  assert.equal(document.querySelector('#help').hidden, false);
  assert.equal(document.querySelector('#home').hidden, true);
  assert.equal(document.querySelector('nav a[href="#help"]').getAttribute('aria-current'), 'page');
});

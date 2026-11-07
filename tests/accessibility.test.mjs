import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import axe from 'axe-core';
import { JSDOM } from 'jsdom';

for (const page of ['index.html', 'privacy.html', 'terms.html', '404.html']) {
  test(`${page} has no automated axe accessibility violations`, async () => {
    const markup = await readFile(new URL(`../dist/${page}`, import.meta.url), 'utf8');
    const dom = new JSDOM(markup, { runScripts: 'outside-only', url: `https://example.test/${page}` });
    dom.window.eval(axe.source);
    const result = await dom.window.axe.run(dom.window.document, { rules: { 'color-contrast': { enabled: false } } });
    const violations = Array.from(result.violations, (violation) => violation.id);
    assert.equal(violations.length, 0, violations.join(', '));
  });
}

// Replace a Mermaid block in an HTML page with the two SVGs render.mjs wrote, one shown per colour
// scheme, so the page never depends on Mermaid running in the viewer's browser.
//
//   node inline.mjs <page.html> <name> [--svg <dir>] [--out <file>]
//
// Reads <dir>/<name>-light.svg and <dir>/<name>-dark.svg (dir defaults to the working directory).
// Target, first match wins:
//   1. <!-- diagram:<name> --> … <!-- /diagram:<name> -->   a block this script inlined before (re-run after edits)
//   2. <pre class="mermaid" data-diagram="<name>">…</pre>
//   3. the only <pre class="mermaid">…</pre> in the page
// Adds one <style id="diagram-themes"> to <head>: dark/light switching that follows prefers-color-scheme
// and an explicit :root[data-theme], plus a panel that scrolls sideways when the diagram is wider than the page.
import fs from 'node:fs';
import path from 'node:path';
import { fail, parseArgs } from './lib.mjs';

const { positional, flags } = parseArgs(process.argv.slice(2));
const [pagePath, name] = positional;
if (!pagePath || !name) fail('usage: node inline.mjs <page.html> <name> [--svg <dir>] [--out <file>]');

const svgDir = flags.svg ?? '.';
const read = (variant) => {
  const file = path.join(svgDir, `${name}-${variant}.svg`);
  if (!fs.existsSync(file)) fail(`missing ${file}; run render.mjs first`);
  return fs.readFileSync(file, 'utf8');
};
const light = read('light');
const dark = read('dark');

// Shrink to 70% of the natural width at most, then scroll inside the panel: below that, labels stop being readable.
const naturalWidth = Number(/max-width:\s*([\d.]+)px/.exec(light)?.[1] ?? 0);
const minWidth = naturalWidth ? ` style="min-width:${Math.round(naturalWidth * 0.7)}px"` : '';

const block = [
  `<!-- diagram:${name} -->`,
  `<div class="diagram" data-diagram="${name}"><div class="diagram-inner"${minWidth}>`,
  `<div class="diagram-light">${light}</div>`,
  `<div class="diagram-dark">${dark}</div>`,
  `</div></div>`,
  `<!-- /diagram:${name} -->`,
].join('\n');

const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const targets = [
  new RegExp(`<!-- diagram:${escapedName} -->[\\s\\S]*?<!-- /diagram:${escapedName} -->`),
  new RegExp(`<pre\\b[^>]*class="mermaid"[^>]*data-diagram="${escapedName}"[^>]*>[\\s\\S]*?</pre>`),
];
let html = fs.readFileSync(pagePath, 'utf8');
let target = targets.find((pattern) => pattern.test(html));
if (!target) {
  const bare = html.match(/<pre\b[^>]*class="mermaid"[^>]*>[\s\S]*?<\/pre>/g) ?? [];
  if (bare.length !== 1) fail(`no target for "${name}" in ${pagePath}: add data-diagram="${name}" to its <pre class="mermaid">`);
  target = /<pre\b[^>]*class="mermaid"[^>]*>[\s\S]*?<\/pre>/;
}
html = html.replace(target, () => block);

const style = `<style id="diagram-themes">
.diagram{max-width:100%;overflow-x:auto}
.diagram svg{display:block;width:100%;height:auto}
.diagram .diagram-dark{display:none}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]) .diagram .diagram-light{display:none}
  :root:not([data-theme="light"]) .diagram .diagram-dark{display:block}
}
:root[data-theme="dark"] .diagram .diagram-light{display:none}
:root[data-theme="dark"] .diagram .diagram-dark{display:block}
</style>`;
if (!html.includes('id="diagram-themes"')) {
  html = /<\/head>/i.test(html) ? html.replace(/<\/head>/i, `${style}\n</head>`) : `${style}\n${html}`;
}

const out = flags.out ?? pagePath;
fs.writeFileSync(out, html);
console.log(`inlined ${name} (light ${Buffer.byteLength(light)} B, dark ${Buffer.byteLength(dark)} B) -> ${out}`);

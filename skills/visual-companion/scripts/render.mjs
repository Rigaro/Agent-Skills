// Render a Mermaid definition to two SVGs, one per colour scheme, in headless Chromium.
//
//   node render.mjs <diagram.mmd> [out-name] [--light neutral] [--dark dark] [--width 190]
//
// Writes <out-name>-light.svg and <out-name>-dark.svg (out-name defaults to the input path without .mmd).
// An invalid definition exits 1 with Mermaid's parse error, which is the first check a diagram gets.
import fs from 'node:fs';
import path from 'node:path';
import { fail, launchBrowser, parseArgs, resolveFromCwd } from './lib.mjs';

const { positional, flags } = parseArgs(process.argv.slice(2));
const [input, outArg] = positional;
if (!input) fail('usage: node render.mjs <diagram.mmd> [out-name] [--light neutral] [--dark dark] [--width 190]');

const definition = fs.readFileSync(input, 'utf8');
const out = outArg ?? input.replace(/\.mmd$/i, '');
const baseId = path.basename(out).replace(/[^\w-]/g, '-');
const themes = { light: flags.light ?? 'neutral', dark: flags.dark ?? 'dark' };
const actorWidth = Number(flags.width ?? 190);
const mermaidJs = resolveFromCwd('mermaid/dist/mermaid.min.js');

const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setContent('<!doctype html><html><body></body></html>');
  await page.addScriptTag({ path: mermaidJs });

  for (const [variant, theme] of Object.entries(themes)) {
    const id = `${baseId}-${variant}`;
    const result = await page.evaluate(
      async ({ id, definition, theme, actorWidth }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme,
          sequence: { useMaxWidth: true, wrap: true, width: actorWidth },
        });
        try {
          await mermaid.parse(definition);
          return { svg: (await mermaid.render(id, definition)).svg };
        } catch (error) {
          return { error: String(error?.message ?? error) };
        }
      },
      { id, definition, theme, actorWidth },
    );
    if (result.error) fail(`${input}: ${result.error}`);

    const svg = suffixGlobalIds(result.svg, id);
    const file = `${out}-${variant}.svg`;
    fs.writeFileSync(file, svg);
    console.log(`${variant} (${theme}) ${Buffer.byteLength(svg)} bytes -> ${file}`);
  }
} finally {
  await browser.close();
}

// Mermaid scopes its <style> under #<render id>, but some ids (arrow markers, gradients) are not
// prefixed with it. Two SVGs on one page (the light and dark copy, or two diagrams) would then share
// those ids and draw each other's markers, so every id outside the render id gets the render id as a suffix.
function suffixGlobalIds(svg, renderId) {
  const ids = new Set(
    [...svg.matchAll(/\bid="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((value) => value !== renderId && !value.startsWith(`${renderId}-`) && !value.startsWith(`${renderId}_`)),
  );
  for (const value of ids) {
    const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    svg = svg
      .replace(new RegExp(`(\\bid=")${escaped}(")`, 'g'), `$1${value}-${renderId}$2`)
      .replace(new RegExp(`#${escaped}(?![\\w-])`, 'g'), `#${value}-${renderId}`);
  }
  return svg;
}

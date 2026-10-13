// Screenshot a page the way the render-and-look check needs it: desktop light, desktop dark, phone.
//
//   node shot.mjs <page.html | url> [out-prefix]
//
// Writes <out-prefix>-desktop-light.png, -desktop-dark.png and -phone.png (full page; prefix defaults to "shot")
// and prints, per view, the page's scrollWidth against innerWidth, the rendered size of every visible SVG,
// and any console errors. Exits 1 when a view scrolls sideways at page level. The numbers point at what to
// look for; the check itself is reading the three images.
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { fail, launchBrowser, parseArgs } from './lib.mjs';

const { positional } = parseArgs(process.argv.slice(2));
const [target, prefix = 'shot'] = positional;
if (!target) fail('usage: node shot.mjs <page.html | url> [out-prefix]');
const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(fs.realpathSync(target)).href;

const views = [
  { name: 'desktop-light', viewport: { width: 1280, height: 800 }, colorScheme: 'light' },
  { name: 'desktop-dark', viewport: { width: 1280, height: 800 }, colorScheme: 'dark' },
  { name: 'phone', viewport: { width: 390, height: 844 }, colorScheme: 'light', isMobile: true, hasTouch: true },
];

let pageScrolls = false;
const browser = await launchBrowser();
try {
  for (const { name, ...options } of views) {
    const context = await browser.newContext(options);
    const page = await context.newPage();
    const errors = [];
    page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    const report = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      svgs: [...document.querySelectorAll('svg')]
        .filter((svg) => svg.getClientRects().length > 0 && svg.getBoundingClientRect().width > 40)
        .map((svg) => {
          const box = svg.getBoundingClientRect();
          return `${svg.id || '(no id)'} ${Math.round(box.width)}x${Math.round(box.height)}`;
        }),
    }));
    const file = `${prefix}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });

    const scrolls = report.scrollWidth > report.innerWidth;
    pageScrolls ||= scrolls;
    console.log(`${name}: ${file}`);
    console.log(`  {scrollWidth: ${report.scrollWidth}, innerWidth: ${report.innerWidth}}${scrolls ? '  <- page scrolls sideways' : ''}`);
    console.log(`  visible svg: ${report.svgs.join(', ') || 'none'}`);
    if (errors.length) console.log(`  console errors:\n    ${errors.join('\n    ')}`);
    await context.close();
  }
} finally {
  await browser.close();
}
process.exit(pageScrolls ? 1 : 0);

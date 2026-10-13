// Shared helpers for render.mjs, inline.mjs and shot.mjs.
// Dependencies (mermaid, playwright-core) are resolved from the working directory, not from
// beside these scripts, so the skill folder stays read-only: install them in a scratch dir and run from there.
import { createRequire } from 'node:module';
import path from 'node:path';

const INSTALL_HINT = 'npm install --no-save mermaid@11.12.0 playwright-core@1.56.0';
const requireFromCwd = createRequire(path.join(process.cwd(), 'noop.js'));

export function fail(message) {
  console.error(message);
  process.exit(1);
}

export function resolveFromCwd(specifier) {
  try {
    return requireFromCwd.resolve(specifier);
  } catch {
    fail(`cannot resolve ${specifier} from ${process.cwd()}\nrun in this directory: ${INSTALL_HINT}`);
  }
}

// --key value pairs become flags; everything else is positional.
export function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) flags[argv[i].slice(2)] = argv[++i];
    else positional.push(argv[i]);
  }
  return { positional, flags };
}

// Tries, in order: $CHROMIUM_PATH, Playwright's own Chromium, installed Chrome, installed Edge.
export async function launchBrowser() {
  let playwright;
  for (const name of ['playwright-core', 'playwright']) {
    try {
      playwright = requireFromCwd(name);
      break;
    } catch {}
  }
  if (!playwright) fail(`playwright-core not found from ${process.cwd()}\nrun in this directory: ${INSTALL_HINT}`);

  const args = process.platform === 'linux' ? ['--no-sandbox', '--disable-gpu'] : [];
  const attempts = [];
  if (process.env.CHROMIUM_PATH) attempts.push({ executablePath: process.env.CHROMIUM_PATH });
  attempts.push({}, { channel: 'chrome' }, { channel: 'msedge' });

  const errors = [];
  for (const options of attempts) {
    try {
      return await playwright.chromium.launch({ ...options, args });
    } catch (error) {
      errors.push(`${JSON.stringify(options)}: ${error.message.split('\n')[0]}`);
    }
  }
  fail(`no browser could be launched:\n  ${errors.join('\n  ')}\nset CHROMIUM_PATH to a Chrome or Chromium binary`);
}

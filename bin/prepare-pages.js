/**
 * Sync Hexo build output (public/) into docs/ for GitHub Pages.
 * Preserves docs/CNAME and standalone subsites (portfolio, feelflow, etc.).
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const docsDir = path.join(root, 'docs');
const cnamePath = path.join(docsDir, 'CNAME');
const defaultCname = 'linusshyu.dev\n';

/** Folders in docs/ that are not produced by Hexo — do not delete on sync. */
const PRESERVE_DIRS = new Set([
  'feelflow',
  'portfolio',
  'causelink',
  'starfetch',
  'paytube',
  'YoungAgentLab',
]);

/** Standalone subsites maintained at repo root — copied into docs/ on each deploy. */
const SUBSITE_SOURCES = ['YoungAgentLab'];

if (!fs.existsSync(publicDir)) {
  console.error('Missing public/ — run `npm run build` first.');
  process.exit(1);
}

const cname = fs.existsSync(cnamePath)
  ? fs.readFileSync(cnamePath, 'utf8')
  : defaultCname;

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, ent.name);
    const to = path.join(dest, ent.name);
    if (ent.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function rmHexoOutput(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name === 'CNAME' || PRESERVE_DIRS.has(name)) continue;
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

fs.mkdirSync(docsDir, { recursive: true });
rmHexoOutput(docsDir);
copyDir(publicDir, docsDir);

for (const name of SUBSITE_SOURCES) {
  const src = path.join(root, name);
  const dest = path.join(docsDir, name);
  if (fs.existsSync(src)) {
    fs.rmSync(dest, { recursive: true, force: true });
    copyDir(src, dest);
  }
}

fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
fs.writeFileSync(cnamePath, cname.trim() + '\n');

console.log('Prepared docs/ for GitHub Pages (preserved subsites).');

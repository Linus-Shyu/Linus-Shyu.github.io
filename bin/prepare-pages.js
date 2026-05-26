/**
 * Sync Hexo build output (public/) into docs/ for GitHub Pages.
 * Preserves docs/CNAME.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const docsDir = path.join(root, 'docs');
const cnamePath = path.join(docsDir, 'CNAME');
const defaultCname = 'linusshyu.dev\n';

if (!fs.existsSync(publicDir)) {
  console.error('Missing public/ — run `npm run build` first.');
  process.exit(1);
}

const cname = fs.existsSync(cnamePath)
  ? fs.readFileSync(cnamePath, 'utf8')
  : defaultCname;

function rmExceptCname(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name === 'CNAME') continue;
    const target = path.join(dir, name);
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, ent.name);
    const to = path.join(dest, ent.name);
    if (ent.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

fs.mkdirSync(docsDir, { recursive: true });
rmExceptCname(docsDir);
copyDir(publicDir, docsDir);
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
fs.writeFileSync(cnamePath, cname.trim() + '\n');

console.log('Prepared docs/ for GitHub Pages.');

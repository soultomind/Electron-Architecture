const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src', 'renderer', 'index.html');
const destDir = path.join(root, 'dist', 'renderer');
const dest = path.join(destDir, 'index.html');

try {
  if (!fs.existsSync(src)) {
    console.error('Source index.html not found:', src);
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Copied', src, '->', dest);
} catch (err) {
  console.error('Failed to copy index.html:', err);
  process.exit(1);
}

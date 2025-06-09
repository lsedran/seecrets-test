import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');
const publicDir = path.join(__dirname, '..', 'public');

// Create images directory in dist if it doesn't exist
const distImagesDir = path.join(distDir, 'images');
if (!fs.existsSync(distImagesDir)) {
  fs.mkdirSync(distImagesDir, { recursive: true });
}

// Copy all images from public/images to dist/images
const publicImagesDir = path.join(publicDir, 'images');
if (fs.existsSync(publicImagesDir)) {
  const files = fs.readdirSync(publicImagesDir);
  files.forEach(file => {
    // Only copy image files (jpg, jpeg, png, gif, webp)
    if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
      fs.copyFileSync(
        path.join(publicImagesDir, file),
        path.join(distImagesDir, file)
      );
    }
  });
  console.log('Copied all images to dist folder');
}

// Read and modify index.html to ensure relative paths
const indexPath = path.join(distDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// Ensure all paths are relative
indexContent = indexContent
  .replace(/src="\//g, 'src="./')
  .replace(/href="\//g, 'href="./');

fs.writeFileSync(indexPath, indexContent);
console.log('Updated paths in index.html');

// Create a _redirects file for Netlify
const redirectsContent = `/* /index.html 200`;
fs.writeFileSync(path.join(distDir, '_redirects'), redirectsContent);
console.log('Created _redirects file');

// Create a _headers file for Netlify
const headersContent = `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Cache-Control: no-cache, no-store, must-revalidate

/*.js
  Content-Type: text/javascript
  Cache-Control: no-cache, no-store, must-revalidate

/*.css
  Content-Type: text/css
  Cache-Control: no-cache, no-store, must-revalidate

/*.html
  Content-Type: text/html
  Cache-Control: no-cache, no-store, must-revalidate

/images/*
  Content-Type: image/jpeg
  Cache-Control: no-cache, no-store, must-revalidate
`;
fs.writeFileSync(path.join(distDir, '_headers'), headersContent);
console.log('Created _headers file'); 
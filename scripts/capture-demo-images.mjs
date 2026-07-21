import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const ASSETS_DIR = resolve(ROOT, 'assets');
const TEMPLATES_DIR = resolve(ROOT, 'templates');
const QUANG_DIR = resolve(ROOT, '../CV-html/lam-nhat-quang');

const captures = [
  { html: resolve(QUANG_DIR, 'v2-modern.html'), out: 'demo-cv-v2-modern.png', width: 1811, height: 1280 },
  { html: resolve(QUANG_DIR, 'report.html'), out: 'demo-report.png', width: 1811, height: 1280 },
  { html: resolve(TEMPLATES_DIR, 'v1-classic.html'), out: 'demo-cv-v1-classic.png', width: 1811, height: 1280 }
];

async function main() {
  console.log('📸 Capturing README preview screenshots...');
  await mkdir(ASSETS_DIR, { recursive: true });

  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (const { html, out, width, height } of captures) {
    const outPath = resolve(ASSETS_DIR, out);
    console.log(`  📷 Capturing ${out}...`);

    await page.setViewportSize({ width, height });
    await page.goto(`file://${html}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1500);

    await page.screenshot({
      path: outPath,
      fullPage: false,
      clip: { x: 0, y: 0, width: width, height: height }
    });

    console.log(`  ✅ Saved to assets/${out}`);
  }

  await browser.close();
  console.log('🎉 All preview images captured successfully!\n');
}

main().catch(err => {
  console.error('❌ Screenshot capture failed:', err);
  process.exit(1);
});

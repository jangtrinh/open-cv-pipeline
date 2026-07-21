import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdir, readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const TEMPLATES_DIR = resolve(ROOT, 'templates');
const OUTPUT_DIR = resolve(ROOT, 'output');

// Configured export targets
const targets = [
  { html: 'v2-modern.html', pdf: 'sample-v2-modern.pdf', height: '2560px' },
  { html: 'v1-classic.html', pdf: 'sample-v1-classic.pdf', height: '2800px' }
];

async function runPDFExport() {
  console.log('🚀 Starting Open-CV Pipeline PDF Export Engine...');
  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  let successCount = 0;

  for (const { html, pdf, height } of targets) {
    const htmlPath = resolve(TEMPLATES_DIR, html);
    const pdfPath = resolve(OUTPUT_DIR, pdf);

    console.log(`\n📄 Rendering ${html} → ${pdf}`);

    // Set viewport dimensions
    await page.setViewportSize({ width: 1811, height: parseInt(height) });

    // Load file with networkidle wait for CDN fonts & Tailwind
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for fonts to settle
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1500);

    // Export PDF
    await page.pdf({
      path: pdfPath,
      width: '1811px',
      height: height,
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log(`  ✅ Saved PDF: ${pdfPath}`);
    successCount++;
  }

  await browser.close();
  console.log(`\n🎉 Successfully exported ${successCount} PDF(s) to ${OUTPUT_DIR}\n`);
}

runPDFExport().catch(err => {
  console.error('❌ PDF Export Failed:', err);
  process.exit(1);
});

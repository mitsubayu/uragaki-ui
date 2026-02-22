import { chromium } from "playwright";
import { createServer } from "http";
import { readFileSync, existsSync, statSync } from "fs";
import { join, extname } from "path";

const STORYBOOK_DIR = join(import.meta.dirname, "../dist/storybook");
const OUTPUT_DIR = join(import.meta.dirname, "../docs/screenshots");

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

// Simple static file server
const server = createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  let pathname = decodeURIComponent(url.pathname);
  let filePath = join(STORYBOOK_DIR, pathname === "/" ? "index.html" : pathname);

  // Try index.html for directory paths
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found: " + filePath);
    return;
  }

  const ext = extname(filePath);
  const mime = MIME_TYPES[ext] || "application/octet-stream";

  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { "Content-Type": mime });
    res.end(content);
  } catch (e) {
    res.writeHead(500);
    res.end("Server error: " + e.message);
  }
});

const PORT = 9222;
server.listen(PORT);
console.log(`Serving storybook on http://localhost:${PORT}`);

const STORIES = [
  { id: "uragaki-button--all-variants", name: "hero-buttons" },
  { id: "uragaki-card--multiple", name: "hero-cards" },
  { id: "uragaki-input--both-styles", name: "hero-inputs" },
  { id: "uragaki-checkbox--multiple-options", name: "hero-checkboxes" },
  { id: "uragaki-badge--all-variants", name: "hero-badges" },
  { id: "uragaki-tabs--default", name: "hero-tabs" },
  { id: "uragaki-alert--default", name: "hero-alert" },
];

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 800, height: 600 },
    deviceScaleFactor: 2,
  });

  for (const story of STORIES) {
    const page = await context.newPage();
    const url = `http://localhost:${PORT}/iframe.html?id=${story.id}&viewMode=story`;
    console.log(`Taking screenshot: ${story.name} (${story.id})`);

    await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
    // Wait for rough.js SVGs to render
    await page.waitForTimeout(3000);

    // Debug: check what's on the page
    const bodyHTML = await page.evaluate(() => document.body.innerHTML.slice(0, 500));
    console.log(`  Page content preview: ${bodyHTML.slice(0, 200)}`);

    await page.screenshot({
      path: join(OUTPUT_DIR, `${story.name}.png`),
      fullPage: true,
    });
    console.log(`  Saved: ${story.name}.png`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log("\nDone! Screenshots saved to docs/screenshots/");
}

main().catch((err) => {
  console.error(err);
  server.close();
  process.exit(1);
});

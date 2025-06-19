const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 4 || process.argv.length > 5) {
  console.error("usage: node render.js <src> <dst> [<key>]");
  process.exit(1);
}

const [, , src, dst] = process.argv;
const srcAbs = path.resolve(__dirname, src);
const dstAbs = path.resolve(__dirname, dst);

(async () => {
  const browser = await puppeteer.launch({
    args: ["--allow-file-access-from-files"],
  });

  const page = await browser.newPage();

  if (process.argv.length === 5) {
    const key = process.argv[4];

    if (!key) {
      console.error("key cannot be empty");
      process.exit(1);
    }

    await page.evaluateOnNewDocument((key) => {
      window.CV_KEY = key;
    }, key);
  }

  await page.goto("file://" + srcAbs, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: dstAbs,
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
})();

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const [, , src, dst] = process.argv;

  const srcAbs = path.resolve(__dirname, src);
  const dstAbs = path.resolve(__dirname, dst);

  const browser = await puppeteer.launch({
    args: ["--allow-file-access-from-files"],
  });

  const page = await browser.newPage();

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

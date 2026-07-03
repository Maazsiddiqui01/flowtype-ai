// Post-build prerender: serve the built dist, load each route in a headless browser, and
// save the fully-rendered HTML (content + per-route <head> meta/JSON-LD from react-helmet)
// to dist/<route>/index.html. This gives every route a static, 200-status, crawler-complete
// page — the strongest setup for SEO, AEO, and GEO (AI engines that don't run JS).
import { preview } from "vite";
import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";

const ROUTES = [
  "/",
  "/wispr-flow-alternative",
  "/voice-to-text-windows",
  "/voice-to-text-mac",
  "/docs/getting-started",
  "/docs/openrouter-api-key",
  "/docs/openai-api-key",
  "/docs/anthropic-api-key",
];

const base = process.env.VITE_BASE || "/";
const port = 4183;

const server = await preview({
  base,
  preview: { port, strictPort: true },
  logLevel: "warn",
});

const origin = `http://localhost:${port}`;
const basePath = base.endsWith("/") ? base : base + "/"; // e.g. "/flowtype-ai/"

const browser = await chromium.launch();
const page = await browser.newPage();

for (const route of ROUTES) {
  const rel = route === "/" ? "" : route.replace(/^\//, "");
  const url = origin + basePath + rel;
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("h1", { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(400); // let helmet flush the <head>
  // Reveal all scroll-animated (.reveal) sections so the captured static HTML shows
  // full content for crawlers that render CSS without executing the SPA's scroll observer.
  await page.evaluate(() =>
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"))
  );
  await page.waitForTimeout(120);
  const html = "<!doctype html>\n" + (await page.content()).replace(/^<!DOCTYPE html>/i, "");
  // Flat files (foo.html) rather than foo/index.html so GitHub Pages serves the
  // extensionless URL directly with a 200 — no trailing-slash 301 hop, and the served
  // URL matches the canonical exactly.
  const outFile =
    route === "/" ? "dist/index.html" : join("dist", route.replace(/^\//, "") + ".html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html, "utf-8");
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  console.log(`prerendered ${route} -> ${outFile}  (title: ${title.slice(0, 60)})`);
}

await browser.close();
await server.httpServer.close();
console.log("prerender complete");
process.exit(0);

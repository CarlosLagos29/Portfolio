// Captura las demos de los proyectos con `screenshot: true` (src/data/projects.ts).
//   npm run screenshot          → todos
//   npm run screenshot -- <slug> → sólo ese proyecto (prop slug, ej. bingo-machine)
// Usa el Chrome del sistema; si no lo encuentra, definir CHROME_PATH.
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";
import { PROJECTS, projectImages } from "../src/data/projects.ts";

const PUBLIC_DIR = "public";
const CHROME_CANDIDATES = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

const SHOTS = [
    { name: "desktop", viewport: { width: 1280, height: 800, deviceScaleFactor: 2 } },
    {
        name: "mobile",
        viewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    },
] as const;

const filter = process.argv[2]?.toLowerCase();
const candidates = PROJECTS.filter((project) => project.screenshot && project.demo);
const projects = filter ? candidates.filter((project) => project.slug === filter) : candidates;

if (projects.length === 0) {
    const slugs = candidates.map((project) => project.slug).join(", ");
    console.error(
        filter
            ? `No project with screenshot: true matches "${filter}". Available: ${slugs}`
            : "No projects with screenshot: true and a demo URL.",
    );
    process.exit(1);
}

const executablePath = CHROME_CANDIDATES.find((path) => path && existsSync(path));
if (!executablePath) {
    console.error("Chrome not found. Set CHROME_PATH to your Chrome or Chromium executable.");
    process.exit(1);
}

await mkdir(`${PUBLIC_DIR}/imgs/projects`, { recursive: true });
const browser = await puppeteer.launch({ executablePath });

try {
    for (const project of projects) {
        const images = projectImages(project);
        for (const shot of SHOTS) {
            const file = `${PUBLIC_DIR}${images[shot.name]}`;
            const page = await browser.newPage();
            await page.setViewport(shot.viewport);
            await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
            await page.goto(project.demo!, { waitUntil: "networkidle0", timeout: 60_000 });
            await page.waitForFunction(() => document.fonts.status === "loaded", {
                timeout: 20_000,
            });
            await page.screenshot({ path: file as `${string}.webp`, type: "webp", quality: 90 });
            console.log(`Saved ${file}`);
            await page.close();
        }
    }
} finally {
    await browser.close();
}

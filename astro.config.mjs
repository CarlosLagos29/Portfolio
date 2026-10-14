import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: process.env.URL ?? "http://localhost:4321",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: { prefixDefaultLocale: false },
    },
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Press Start 2P",
            cssVariable: "--font-press-start",
            weights: [400],
            subsets: ["latin"],
            fallbacks: ["monospace"],
        },
        {
            provider: fontProviders.google(),
            name: "Pixelify Sans",
            cssVariable: "--font-pixelify",
            weights: [400, 600],
            subsets: ["latin"],
            fallbacks: ["monospace"],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});

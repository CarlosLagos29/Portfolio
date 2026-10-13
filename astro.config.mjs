import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // Netlify expone la URL del sitio en `URL` durante el build
    site: process.env.URL ?? "http://localhost:4321",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: { prefixDefaultLocale: false },
    },
    // Se descargan de Google en el build y se sirven desde el propio sitio
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

import { defineConfig } from "astro/config";

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
    vite: {
        plugins: [tailwindcss()],
    },
});

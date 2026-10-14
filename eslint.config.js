// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig(
    { ignores: ["dist/", ".astro/", "node_modules/"] },
    js.configs.recommended,
    tseslint.configs.recommended,
    astro.configs.recommended,
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
    },
    prettierRecommended,
    {
        files: ["**/*.astro/*.js", "**/*.astro/*.ts"],
        rules: { "prettier/prettier": "off" },
    },
);

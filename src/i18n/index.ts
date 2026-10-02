import type { Locale, Localized, YearMonth } from "../types";
import { es } from "./es";
import { en } from "./en";

export type Dictionary = typeof es;

export const LOCALES: Locale[] = ["es", "en"];

const DICTIONARIES: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
    return DICTIONARIES[locale];
}

/** Devuelve el texto de un campo bilingüe en el idioma pedido */
export function localize(text: Localized, locale: Locale): string {
    return text[locale];
}

function monthName(date: YearMonth, locale: Locale): string {
    const [year, month] = date.split("-").map(Number);
    const name = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" })
        .format(new Date(Date.UTC(year, month - 1)))
        .slice(0, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
}

/** "Ago – Oct 2024" si es el mismo año, "Oct 2024 – Sep 2026" si no */
export function formatRange(start: YearMonth, end: YearMonth, locale: Locale): string {
    const startYear = start.slice(0, 4);
    const endYear = end.slice(0, 4);
    const from = monthName(start, locale);
    const to = `${monthName(end, locale)} ${endYear}`;
    return startYear === endYear ? `${from} – ${to}` : `${from} ${startYear} – ${to}`;
}

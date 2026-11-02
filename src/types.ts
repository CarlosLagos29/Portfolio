export type Locale = "es" | "en";

export interface Localized {
    es: string;
    en: string;
}

export type YearMonth = `${number}-${number}`;

export interface StackItem {
    name: string;
    logo?: { path: string };
}

export interface StackGroup {
    id: "frontend" | "backend" | "databases" | "aws" | "web3" | "tools";
    items: StackItem[];
}

export interface ExperienceBoss {
    title: Localized;
    before: Localized;
    action: Localized;
    after: Localized;
}

export interface ExperienceStage {
    title?: Localized;
    meta?: Localized;
    mission?: Localized;
    boss?: ExperienceBoss;
    achievements?: Localized[];
    tags?: (string | Localized)[];
}

export interface Experience {
    level: number;
    company: string;
    role: Localized;
    start: YearMonth;
    end: YearMonth;
    stages: ExperienceStage[];
}

export interface Project {
    title: string;
    /** Nombre de las capturas y filtro de `npm run screenshot -- <slug>`. */
    slug: string;
    description: Localized;
    tags: string[];
    repo?: string;
    demo?: string;
    remodel?: boolean;
    /**
     * true → `npm run screenshot` captura `demo` en desktop y mobile y guarda las imágenes en
     * `public/imgs/projects/<slug>-desktop.webp` / `<slug>-mobile.webp`.
     * Para capturar sólo este proyecto: `npm run screenshot -- <slug>`.
     */
    screenshot: boolean;
}

export interface Training {
    icon: "graduation" | "book" | "language";
    period: Localized;
    title: Localized;
    place: Localized;
}

export type Locale = "es" | "en";

/** Texto en los dos idiomas del sitio */
export interface Localized {
    es: string;
    en: string;
}

/** Fecha en formato "AAAA-MM" */
export type YearMonth = `${number}-${number}`;

export interface StackGroup {
    id: "frontend" | "backend" | "databases" | "aws" | "web3" | "tools";
    items: string[];
}

export interface ExperienceStage {
    title?: Localized;
    meta?: Localized;
    achievements: Localized[];
    tags?: string[];
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
    description: Localized;
    tags: string[];
    repo?: string;
    demo?: string;
    /** muestra el badge "EN REMODELACIÓN" */
    remodel?: boolean;
    /** captura del proyecto; si falta se muestra un placeholder */
    image?: string;
}

export interface Training {
    period: Localized;
    title: Localized;
    place: Localized;
}

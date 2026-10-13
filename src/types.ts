export type Locale = "es" | "en";

/** Texto en los dos idiomas del sitio */
export interface Localized {
    es: string;
    en: string;
}

/** Fecha en formato "AAAA-MM" */
export type YearMonth = `${number}-${number}`;

/** Tecnología del Inventario. `logo` es un ícono de Simple Icons; si no hay, se muestran las iniciales */
export interface StackItem {
    name: string;
    logo?: { path: string };
}

export interface StackGroup {
    id: "frontend" | "backend" | "databases" | "aws" | "web3" | "tools";
    items: StackItem[];
}

/** El problema más difícil de una etapa, contado como antes → lo que hice → después */
export interface ExperienceBoss {
    title: Localized;
    before: Localized;
    action: Localized;
    after: Localized;
}

/**
 * Una etapa se muestra como MISION + JEFE FINAL + LOOT si tiene `mission`;
 * si no, con las viñetas de `achievements` (formato anterior, como en el CV).
 */
export interface ExperienceStage {
    title?: Localized;
    meta?: Localized;
    mission?: Localized;
    boss?: ExperienceBoss;
    achievements?: Localized[];
    /** Tecnologías (LOOT). Si el nombre coincide con uno de stack.ts se muestra con su logo */
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

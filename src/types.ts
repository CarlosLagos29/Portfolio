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
    description: Localized;
    tags: string[];
    repo?: string;
    demo?: string;
    remodel?: boolean;
    image?: string;
}

export interface Training {
    icon: "graduation" | "book" | "language";
    period: Localized;
    title: Localized;
    place: Localized;
}

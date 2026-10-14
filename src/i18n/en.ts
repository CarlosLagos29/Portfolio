import { XP_YEARS } from "../data/experience";
import type { Dictionary } from ".";

export const en: Dictionary = {
    meta: {
        title: "Carlos Lagos Full Stack Developer",
        description:
            "Portfolio of Carlos Lagos, Full Stack Developer based in Buenos Aires: Vue, React, Kotlin with Spring Boot, Node and AWS.",
        ogAlt: "Carlos Lagos, Full Stack Developer, in pixel art style",
    },
    a11y: {
        skip: "Skip to content",
        home: "Home",
        mainNav: "Main navigation",
        language: "Language",
        closeMenu: "Close menu",
        backToTop: "Back to top",
    },
    nav: {
        stack: "Stack",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
    },
    hero: {
        greeting: "Hi, I'm Carlos Lagos",
        role: "Full Stack Developer",
        phrases: ["VUE · REACT · NEXT.JS", "KOTLIN · SPRING · NODE", "AWS · DYNAMODB · MYSQL"],
        paragraph:
            "I work across the whole process: front end, back end and even infrastructure. I adapt quickly to each new level, enjoy team play, and there's always something else to learn.",
        ctaPrimary: "PRESS START",
        ctaPrimaryHint: "view experience",
        ctaSecondary: "JOIN GAME",
        ctaSecondaryHint: "contact",
        player: "PLAYER 1",
        online: "ONLINE",
        stats: [
            { key: "CLASS", value: "Full Stack · Multiclass" },
            { key: "BASE", value: "Buenos Aires, AR" },
            { key: "XP", value: `~${XP_YEARS} ${XP_YEARS === 1 ? "year" : "years"} in production` },
            { key: "LANGUAGES", value: "Spanish · English B2" },
        ],
        loading: "SEARCHING FOR NEXT LEVEL...",
    },
    stack: {
        title: "INVENTORY",
        subtitle: "What I carry for every quest.",
        items: "ITEMS",
        groups: {
            frontend: {
                title: "FRONTEND",
                description:
                    "Server-side and client-side rendered interfaces, rich text editors and responsive design.",
            },
            backend: {
                title: "BACKEND",
                description:
                    "REST APIs, authentication, third-party integrations and data modeling.",
            },
            databases: { title: "DATABASES" },
            aws: { title: "AWS" },
            web3: { title: "WEB3" },
            tools: { title: "TOOLS" },
        },
    },
    experience: {
        title: "LEVELS",
        subtitle: "From the most recent to the first.",
        level: "LEVEL",
        present: "Present",
        mission: "MISSION",
        boss: "BOSS FIGHT",
        before: "BEFORE",
        action: "THE PLAY",
        after: "AFTER",
        loot: "LOOT",
    },
    projects: {
        title: "SIDE QUESTS",
        subtitle: "Personal projects, outside of work.",
        remodel: "UNDER REWORK",
        noImage: "SCREENSHOT COMING SOON",
        repo: "REPO",
        demo: "DEMO",
    },
    training: {
        title: "TRAINING",
        subtitle: "Where I leveled up.",
        unlocked: "ACHIEVEMENT UNLOCKED",
    },
    contact: {
        title: "CONTINUE?",
        text: "Need a new player on your team? Drop me a line.",
        email: "EMAIL",
        linkedin: "LINKEDIN",
        github: "GITHUB",
        cv: "DOWNLOAD CV",
    },
    footer: {
        location: "BUENOS AIRES",
        gameOver: "GAME OVER? NEVER.",
    },
};

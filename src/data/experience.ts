import type { Experience } from "../types";

export const EXPERIENCE: Experience[] = [
    {
        level: 4,
        company: "42i",
        role: { es: "Software Developer (Contractor)", en: "Software Developer (Contractor)" },
        start: "2024-10",
        end: "2026-09",
        stages: [
            {
                title: {
                    es: "Plataforma internacional de eventos promocionales",
                    en: "International promotional events platform",
                },
                meta: {
                    es: "4 ediciones · México, Argentina y Guatemala",
                    en: "4 editions · Mexico, Argentina and Guatemala",
                },
                mission: {
                    es: "Entré a un proyecto de eventos de e-commerce con picos de tráfico internacionales (Hot Sale y Hot Fashion en México, Glam Days en Argentina, Cyber Days en Guatemala) y terminé coordinando el equipo durante un año: hablaba con el cliente, repartía las tareas de la semana y revisaba los PRs.",
                    en: "I joined an e-commerce events project with international traffic peaks (Hot Sale and Hot Fashion in Mexico, Glam Days in Argentina, Cyber Days in Guatemala) and ended up coordinating the team for a year: talking to the client, splitting the week's tasks and reviewing PRs.",
                },
                boss: {
                    title: { es: "El ranking de clics", en: "The click ranking" },
                    before: {
                        es: "Pasaba por la web, una Lambda, MySQL y Redis. Era lento y costaba debuggearlo.",
                        en: "It went through the web app, a Lambda, MySQL and Redis. It was slow and hard to debug.",
                    },
                    action: {
                        es: "Lo resolví con índices de DynamoDB consultados directo desde la web.",
                        en: "I solved it with DynamoDB indexes queried directly from the web app.",
                    },
                    after: {
                        es: "Se actualizaba mucho más rápido y sumamos métricas de clics diarios.",
                        en: "It updated much faster and we added daily click metrics.",
                    },
                },
                tags: [
                    "Kotlin",
                    "Spring Boot",
                    "Vue 3 (SSR)",
                    "React",
                    "TypeScript",
                    "DynamoDB",
                    "MySQL",
                    "Redis",
                    "OpenSearch",
                    "AWS",
                ],
            },
            {
                title: {
                    es: "Plataforma de intercambio de criptoactivos (Web3)",
                    en: "Crypto asset exchange platform (Web3)",
                },
                meta: {
                    es: "Oct – Dic 2024 · equipo de 3",
                    en: "Oct – Dec 2024 · team of 3",
                },
                mission: {
                    es: "Hice la interfaz de depósitos a plazo con interés compuesto en Next.js y conecté los smart contracts al backend con Web3.js en la testnet de TRON.",
                    en: "I built the fixed-term deposit interface with compound interest in Next.js and connected the smart contracts to the backend with Web3.js on the TRON testnet.",
                },
                tags: ["Solidity", "Web3.js", "Next.js", "TypeScript", "Prisma", "Docker", "Jest"],
            },
        ],
    },
    {
        level: 3,
        company: "Swaply",
        role: { es: "Desarrollador Web (Pasantía)", en: "Web Developer (Internship)" },
        start: "2024-08",
        end: "2024-10",
        stages: [
            {
                title: {
                    es: "Plataforma web de intercambio de divisas",
                    en: "Currency exchange web platform",
                },
                achievements: [
                    {
                        es: "Integré el sistema de pagos de PayPal a través de su API.",
                        en: "Integrated PayPal payments through its API.",
                    },
                    {
                        es: "Apliqué diseño responsive en varias páginas del sitio.",
                        en: "Applied responsive design across several pages of the site.",
                    },
                ],
                tags: ["React", "Next.js", "Tailwind CSS", "GitFlow"],
            },
        ],
    },
    {
        level: 2,
        company: "Awaq ONGD",
        role: { es: "Full Stack Developer (Pasantía)", en: "Full Stack Developer (Internship)" },
        start: "2024-01",
        end: "2024-02",
        stages: [
            {
                title: {
                    es: "Plataforma para futuros estudiantes",
                    en: "Platform for prospective students",
                },
                achievements: [
                    {
                        es: "Desarrollé landing pages, dashboards y aplicaciones web.",
                        en: "Built landing pages, dashboards and web applications.",
                    },
                    {
                        es: "Armé las bases del backend de la plataforma.",
                        en: "Laid the foundations of the platform's backend.",
                    },
                ],
                tags: ["React", "Redux", "TypeScript", "Tailwind CSS", "PostgreSQL"],
            },
        ],
    },
    {
        level: 1,
        company: "Henry Bootcamp",
        role: { es: "Full Stack Teaching Assistant", en: "Full Stack Teaching Assistant" },
        start: "2023-12",
        end: "2024-02",
        stages: [
            {
                achievements: [
                    {
                        es: "Coordiné un grupo de estudiantes y los acompañé en la resolución de ejercicios.",
                        en: "Coordinated a group of students and supported them as they worked through exercises.",
                    },
                ],
            },
        ],
    },
];

/** Años completos trabajados, sin contar dos veces los meses en que se superponen trabajos */
function experienceYears(): number {
    const months = new Set<number>();
    for (const { start, end } of EXPERIENCE) {
        const [startYear, startMonth] = start.split("-").map(Number);
        const [endYear, endMonth] = end.split("-").map(Number);
        for (let m = startYear * 12 + startMonth; m <= endYear * 12 + endMonth; m++) months.add(m);
    }
    return Math.floor(months.size / 12);
}

export const XP_YEARS = experienceYears();

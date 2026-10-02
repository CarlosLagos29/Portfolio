import type { Experience } from "../types";

// Por confidencialidad contractual no se nombra al cliente final ni al producto de 42i.
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
                achievements: [
                    {
                        es: "Lideré de manera informal el equipo durante ~1 año: coordinación con el cliente, estimación y reparto semanal de tareas, y revisión de PRs de un equipo externo.",
                        en: "Informally led the team for ~1 year: client coordination, weekly task estimation and assignment, and reviewing PRs from an external team.",
                    },
                    {
                        es: "Rediseñé el sistema de tracking y ranking de clics: de un flujo lento con Lambda, MySQL y Redis a índices de DynamoDB consultados directo desde la web.",
                        en: "Redesigned the click tracking and ranking system: from a slow Lambda, MySQL and Redis flow to DynamoDB indexes queried directly from the web app.",
                    },
                    {
                        es: "Diseñé e implementé una API restringida para integrar un chatbot externo (ECS, ALB, réplica de lectura en Aurora, API key y rate limiting), incluido el presupuesto de costos.",
                        en: "Designed and built a restricted API to integrate an external chatbot (ECS, ALB, Aurora read replica, API key and rate limiting), including the cost estimate.",
                    },
                    {
                        es: "Ajusté el dimensionamiento de la infraestructura en AWS según el tráfico estimado de cada evento.",
                        en: "Sized the AWS infrastructure according to the expected traffic of each event.",
                    },
                    {
                        es: "Resolví bugs de la migración a React 18 e incorporé TipTap como nuevo editor de texto para necesidades puntuales del cliente.",
                        en: "Fixed bugs from the React 18 migration and introduced TipTap as a new text editor for specific client needs.",
                    },
                    {
                        es: "Documenté los procesos de puesta en marcha de cada evento.",
                        en: "Documented the launch process for each event.",
                    },
                ],
                tags: [
                    "Kotlin",
                    "Spring Boot",
                    "Vue 3 SSR",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "MySQL",
                    "DynamoDB",
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
                achievements: [
                    {
                        es: "Desarrollé la interfaz de depósitos a plazo con interés compuesto.",
                        en: "Built the interface for fixed-term deposits with compound interest.",
                    },
                    {
                        es: "Conecté smart contracts al backend vía Web3.js en la testnet de TRON, ajustando contratos en Solidity.",
                        en: "Connected smart contracts to the backend via Web3.js on the TRON testnet, adjusting contracts in Solidity.",
                    },
                    {
                        es: "Escribí tests con Jest sobre contratos e interfaz.",
                        en: "Wrote Jest tests for the contracts and the interface.",
                    },
                ],
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

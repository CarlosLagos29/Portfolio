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
                    es: "Entré a una plataforma de eventos promocionales con picos de tráfico internacionales, donde las marcas publicaban sus ofertas (Hot Sale y Hot Fashion en México, Glam Days en Argentina, Cyber Days en Guatemala), y terminé coordinando el equipo durante un año: hablaba con el cliente, repartía las tareas de la semana y revisaba los PRs.",
                    en: "I joined a promotional events platform with international traffic peaks, where brands published their deals (Hot Sale and Hot Fashion in Mexico, Glam Days in Argentina, Cyber Days in Guatemala), and ended up coordinating the team for a year: talking to the client, splitting the week's tasks and reviewing PRs.",
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
                mission: {
                    es: "Trabajé como desarrollador en una plataforma web de intercambio de divisas, en un equipo con diseñadores, data scientists y otros devs. Además de los pagos, hice interfaces con React y Next.js y apliqué diseño responsive en varias páginas.",
                    en: "I worked as a developer on a currency exchange web platform, in a team with designers, data scientists and other devs. Besides payments, I built interfaces with React and Next.js and made several pages responsive.",
                },
                boss: {
                    title: { es: "Sumar PayPal", en: "Adding PayPal" },
                    before: {
                        es: "Sólo se podía pagar por transferencia con Payoneer o Wise.",
                        en: "You could only pay by transfer through Payoneer or Wise.",
                    },
                    action: {
                        es: "Integré PayPal a la plataforma. La documentación ofrece varias formas de hacerlo, y lo más difícil fue elegir la que mejor se ajustaba a cómo estaba armada la plataforma, probarla en sandbox y validar que cada pago se completara.",
                        en: "I integrated PayPal into the platform. The docs offer several ways to do it, and the hardest part was choosing the one that best fit how the platform was built, testing it in sandbox and validating that every payment went through.",
                    },
                    after: {
                        es: "Los usuarios pudieron operar también con PayPal, además de Payoneer y Wise.",
                        en: "Users could also transact with PayPal, on top of Payoneer and Wise.",
                    },
                },
                tags: ["React", "Next.js", "Tailwind CSS", "GitFlow", "PayPal"],
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
                mission: {
                    es: "En mi primera experiencia profesional trabajé en una plataforma para facilitar el proceso de pasantías a estudiantes de todo el mundo. Hice landing pages, dashboards y componentes del frontend, y me metí de lleno en el backend.",
                    en: "In my first professional experience I worked on a platform that made the internship process easier for students around the world. I built landing pages, dashboards and frontend components, and dove deep into the backend.",
                },
                boss: {
                    title: { es: "Migrar la base de datos", en: "Migrating the database" },
                    before: {
                        es: "Había que reorganizar las relaciones de la base de datos, que ya tenía información cargada.",
                        en: "The database relationships had to be reorganized, and it already had data in it.",
                    },
                    action: {
                        es: "Refactoricé las relaciones y migré las tablas sin perder datos, adapté el backend a la nueva estructura y armé endpoints pensados para lo que necesitaba el frontend.",
                        en: "I refactored the relationships and migrated the tables without losing data, adapted the backend to the new structure and built endpoints designed around what the frontend needed.",
                    },
                    after: {
                        es: "La base quedó más escalable y el frontend se conectaba de forma más simple con el backend.",
                        en: "The database became more scalable and the frontend connected to the backend more simply.",
                    },
                },
                tags: [
                    "React",
                    "Redux",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Figma",
                    "SCRUM",
                ],
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
                mission: {
                    es: "Como ayudante del bootcamp acompañé a un grupo de estudiantes nuevos: los ayudaba a integrarse al equipo de estudio, a resolver ejercicios y dudas de código, y a orientarse en los procesos administrativos. Promovía el pair programming y actividades para evitar el burnout, y propuse ideas para mejorar los procesos del bootcamp.",
                    en: "As a bootcamp teaching assistant I supported a group of new students: I helped them join the study team, work through exercises and code questions, and find their way through the administrative processes. I encouraged pair programming and activities to prevent burnout, and proposed ideas to improve the bootcamp's processes.",
                },
                tags: [
                    { es: "Trabajo en equipo", en: "Teamwork" },
                    { es: "Liderazgo", en: "Leadership" },
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

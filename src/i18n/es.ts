import { XP_YEARS } from "../data/experience";

export const es = {
    meta: {
        title: "Carlos Lagos Full Stack Developer",
        description:
            "Portfolio de Carlos Lagos, Full Stack Developer en Buenos Aires: Vue, React, Kotlin con Spring Boot, Node y AWS.",
        ogAlt: "Carlos Lagos, Full Stack Developer, en estilo pixel art",
    },
    a11y: {
        skip: "Saltar al contenido",
        home: "Inicio",
        mainNav: "Navegación principal",
        language: "Idioma",
        closeMenu: "Cerrar menú",
        backToTop: "Volver arriba",
    },
    nav: {
        stack: "Stack",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
    },
    hero: {
        greeting: "Hola, soy Carlos Lagos",
        role: "Full Stack Developer",
        phrases: ["VUE · REACT · NEXT.JS", "KOTLIN · SPRING · NODE", "AWS · DYNAMODB · MYSQL"],
        paragraph:
            "Estoy en todo el proceso: del front al back y hasta la infraestructura. Me adapto rápido a cada nivel nuevo, disfruto jugar en equipo y siempre hay algo más para aprender.",
        ctaPrimary: "PRESS START",
        ctaPrimaryHint: "ver experiencia",
        ctaSecondary: "JOIN GAME",
        ctaSecondaryHint: "contactar",
        player: "PLAYER 1",
        online: "ONLINE",
        stats: [
            { key: "CLASE", value: "Full Stack · Multiclase" },
            { key: "BASE", value: "Buenos Aires, AR" },
            { key: "XP", value: `~${XP_YEARS} ${XP_YEARS === 1 ? "año" : "años"} en producción` },
            { key: "IDIOMAS", value: "Español · Inglés B2" },
        ],
        loading: "BUSCANDO PROXIMO NIVEL...",
    },
    stack: {
        title: "INVENTARIO",
        subtitle: "Lo que llevo para cada misión.",
        items: "ITEMS",
        groups: {
            frontend: {
                title: "FRONTEND",
                description:
                    "Interfaces con SSR y client-side, editores ricos y diseño responsive.",
            },
            backend: {
                title: "BACKEND",
                description:
                    "APIs REST, autenticación, integraciones con terceros y modelado de datos.",
            },
            databases: { title: "BASES DE DATOS" },
            aws: { title: "AWS" },
            web3: { title: "WEB3" },
            tools: { title: "HERRAMIENTAS" },
        },
    },
    experience: {
        title: "NIVELES",
        subtitle: "Del más reciente al primero.",
        level: "NIVEL",
        present: "Actualidad",
        mission: "MISION",
        boss: "BOSS FIGHT",
        before: "ANTES",
        action: "LA JUGADA",
        after: "DESPUES",
        loot: "LOOT",
    },
    projects: {
        title: "SIDE QUESTS",
        subtitle: "Proyectos propios, fuera del trabajo.",
        remodel: "EN REMODELACION",
        noImage: "CAPTURA PROXIMAMENTE",
        repo: "REPO",
        demo: "DEMO",
    },
    training: {
        title: "ENTRENAMIENTO",
        subtitle: "Dónde subí de nivel.",
    },
    contact: {
        title: "¿CONTINUAR?",
        text: "Estoy buscando mi próximo equipo. Si tenés una posición abierta o un proyecto en mente, escribime.",
        email: "ENVIAR EMAIL",
        linkedin: "LINKEDIN",
        github: "GITHUB",
        cv: "DESCARGAR CV",
    },
    footer: {
        location: "BUENOS AIRES",
        gameOver: "GAME OVER? NUNCA.",
    },
};

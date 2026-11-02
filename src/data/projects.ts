import type { Project } from "../types";

export const SHOW_PROJECTS = true;

// Miniaturas: `npm run screenshot` captura cada proyecto con `screenshot: true` (desktop y mobile)
// y `npm run screenshot -- <slug>` sólo el que coincida. Con `screenshot: false` el script no lo
// toca y se usan las imágenes fijas de public/imgs/projects/. Sin imágenes, la tarjeta muestra el placeholder.
export const PROJECTS: Project[] = [
    {
        title: "HealthCheckUrl",
        slug: "health-check-url",
        description: {
            es: "API REST que dice si una URL está viva y, si no, explica por qué. Pensada para que no se pueda usar contra terceros: protección SSRF en cada redirect, sólo puertos 80 y 443 y rate limiting en tres capas.",
            en: "A REST API that tells you whether a URL is alive, and explains why when it is not. Built so it can't be turned against third parties: SSRF protection on every redirect, only ports 80 and 443, and three layers of rate limiting.",
        },
        tags: ["Kotlin", "Spring Boot", "OkHttp", "Docker", "GitHub Actions"],
        repo: "https://github.com/CarlosLagos29/HealthCheckUrl",
        demo: "https://healthcheckurl.onrender.com/docs",
        screenshot: false,
    },
    {
        title: "Bingo Machine",
        slug: "bingo-machine",
        description: {
            es: "Un bolillero digital de 90 bolillas que nació en una juntada con amigos, cuando la ruleta de bingo que teníamos no funcionaba. Animación con sonido en cada tirada, tablero ordenado y la partida sobrevive a un refresh.",
            en: "A 90-ball digital bingo caller born at a get-together with friends, when the bingo cage we had just wouldn't work. Animated draws with sound, a sorted board, and the game survives a page refresh.",
        },
        tags: ["React", "Tailwind CSS", "Vite"],
        repo: "https://github.com/CarlosLagos29/BingoMachine",
        demo: "https://bingomachine.netlify.app/",
        screenshot: true,
    },
    {
        title: "Rick and Morty Explorer",
        slug: "rick-and-morty",
        description: {
            es: "Buscador de todos los personajes de la serie sobre la API GraphQL pública, con filtros combinables, paginación y detalle en modal. Los filtros, la página y el personaje abierto viven en la URL, así que todo se puede compartir.",
            en: "Search every character of the show using the public GraphQL API, with combinable filters, pagination and a details modal. Filters, page and the open character live in the URL, so everything is shareable.",
        },
        tags: ["React", "TypeScript", "Apollo Client", "GraphQL", "Tailwind CSS", "Vitest"],
        repo: "https://github.com/CarlosLagos29/ChallengeRickAndMorty_dev",
        demo: "https://challengerickandmorty.netlify.app/",
        screenshot: true,
    },
];

// Rutas públicas (las que usa el <img>); en disco viven bajo public/
export function projectImages(project: Project) {
    const base = `/imgs/projects/${project.slug}`;
    return { desktop: `${base}-desktop.webp`, mobile: `${base}-mobile.webp` };
}

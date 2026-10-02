import type { Project } from "../types";

export const PROJECTS: Project[] = [
    {
        title: "dApp Web3",
        remodel: true,
        description: {
            es: "Smart contract en Solidity desplegado con Truffle en la testnet Sepolia, con un frontend en React que interactúa con el contrato vía Web3.js y MetaMask.",
            en: "Solidity smart contract deployed with Truffle on the Sepolia testnet, with a React frontend that interacts with the contract through Web3.js and MetaMask.",
        },
        tags: ["Solidity", "Truffle", "React", "TypeScript", "Vite", "Tailwind", "Web3.js"],
        repo: "https://github.com/CarlosLagos29/Desafio-Web3",
    },
    {
        title: "Bingo Machine",
        description: {
            es: "Un bolillero digital que nació en una juntada con amigos, cuando la ruleta de bingo que teníamos no funcionaba. Chico, rápido de hacer y con historia.",
            en: "A digital bingo caller born at a get-together with friends, when the bingo cage we had just wouldn't work. Small, quick to build, and with a story behind it.",
        },
        tags: ["React", "Tailwind CSS"],
        repo: "https://github.com/CarlosLagos29/BingoMachine",
        demo: "https://bingomachine.netlify.app/",
    },
];

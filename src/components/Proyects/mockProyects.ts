export interface Props {
    title: string
    subtitle: string
    date: string
    description: string
    link?: string
    repo?: string
    tech: Array<string>
    img: string,
    index?: number
}

export const PROYECTS: Array<Props> = [
    {
        title:"Bingo Machine",
        subtitle:"Proyecto simple personal",
        date:"May. 2024 - May. 2024",
        description:"Aqui quería contarles una pequeña anécdota. Un fin de semana, me reuní con amigos y decidimos jugar al bingo. Uno de ellos tenía una ruleta para sacar los números, pero su diseño era terrible. Los números salían disparados o no salían si girabas muy rápido o muy lento. Así que pensé, si a un carpintero le faltan muebles, los hace él mismo. Si un herrero necesita cubiertos, los fabrica. Entonces, si soy programador... Y así nació esta aplicación, que, aunque sencilla, cumplió su propósito: vengarme de esa maldita ruleta que me hizo pasar vergüenza frente a todos. Fue una experiencia divertida y rápida de hacer, pero educativa. Practiqué estilos y repasé funciones asincrónicas como setTimeout.",
        link:"https://bingomachine.netlify.app/",
        repo:"https://github.com/CarlosLagos29/BingoMachine",
        img:"https://i.pinimg.com/originals/aa/a8/2c/aaa82c7a835628871ef8a7e0c276dfb8.gif",
        tech:["React","TailwindCSS"],
    },
    {
        title: "Challenge Rick And Morty",
        subtitle: "Challenge laboral",
        date:"Abr. 2024 - Abr. 2024 ",
        description:"Este proyecto fue un desafío para entrar en un trabajo, similar al que hice en Henry, pero con mi primer contacto con GraphQL. Aprendí esta nueva tecnología en solo dos días. Pude completar este proyecto en cinco días. La aplicación muestra personajes de la serie cuenta con una barra de búsqueda y filtros para encontrar a quienes queramos, junto con descripciones detalladas.   ",
        link:"https://challengerickandmorty.netlify.app/",
        img:"https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif",
        tech:["React", "Redux Toolkit", "GraphQL","ApolloClient","TailwindCSS"]
    },
    {
        title: "Proyecto integrador Henry- Videogames",
        subtitle: "Experiencia académica. Henry Bootcamp",
        date: "Dic. 2023 - Ene. 2024",
        description: "Esta aplicación fue el punto culminante de mi tiempo en el bootcamp. Me permitió aplicar por mi cuenta todo lo que aprendí durante el programa. Fue la primera app que desarrollé solo, marcando un hito importante en mi carrera. La app permite explorar videojuegos desde una API, con funciones para visualizarlos, filtrarlos, ordenarlos, buscarlos, ver sus descripciones y añadir nuevos juegos a la lista, manteniéndola siempre actualizada.",
        repo: "https://github.com/CarlosLagos29/PI-Videogames",
        tech: ["React", "Redux", "Axios", "Express", "Node.js", "PostgreSQL", "Sequelize"],
        img: "https://usagif.com/wp-content/uploads/2022/fzk5d/30-huge-maze-pacman.gif",
    },
    {
        title: "Proyecto Rick and Morty",
        subtitle: "Experiencia académica. Henry Bootcamp",
        date: "Sept. 2023 - Nov. 2023",
        description: "En el bootcamp, creé una app que aplicó mis habilidades como Full Stack Web Developer. Permite a los fans buscar, marcar favoritos, filtrar y ordenar personajes, además de ver descripciones detalladas, todo de forma fácil y amigable.",
        repo: "https://github.com/CarlosLagos29/Rick-and-morty",
        tech: ["React", "Redux", "Axios", "Express", "Node.js", "PostgreSQL", "Sequelize"],
        img: "https://i.pinimg.com/originals/6a/7c/e9/6a7ce99608d78073da7f984b8ba1af0f.gif",
    },

]
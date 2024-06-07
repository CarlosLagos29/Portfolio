export interface Props {
    title: string, 
    date: string,
    description: string,
    metod?: Array<string>
    tech?: Array<string>
    index?: number, 
}

const EXPERIENCE: Array<Props> = [
    {
        title:"Pasantias AWAQ",
        date: "Enero 2024 - Febrero 2024",
        description:"En esta empresa, tuve la oportunidad de aplicar por primera vez mis conocimientos de programación al desarrollar una aplicación destinada a facilitar el proceso de pasantías para estudiantes de todo el mundo. En mi rol, estuve involucrado tanto en el frontend, donde proporcioné estilos y funcionalidades, como en el backend, donde establecí una estructura sólida, esto implicó la creación de tablas en la base de datos y la implementación de controladores, con el objetivo de mejorar la escalabilidad de la aplicación y simplificar las tareas del frontend.",
        tech: ["Tailwind CSS", "Typescript", "Javascript", "Figma", "Redux", "Node.js", "PostgreSQL"],
        metod: ["SCRUM"]
    },
    {
        title:"Henry Teach Asistant",
        date:"Diciembre 2023 - Febrero 2024",
        description:"Durante mi tiempo en el bootcamp de programación, guié a un grupo de nuevos estudiantes, ayudándolos con dudas sobre código, orientándolos en procesos administrativos y promoviendo actividades para evitar el burnout. Esta experiencia me permitió mejorar mis habilidades técnicas y de comunicación mientras apoyaba el bienestar y éxito de mis compañeros."
    }

]

export default EXPERIENCE;
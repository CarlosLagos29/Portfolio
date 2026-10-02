export interface Experience {
    title: string;
    date: string;
    description: string;
    tech?: string[];
    methodologies?: string[];
}

export interface Project {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    link?: string;
    repo?: string;
    tech: string[];
    img: string;
}

export interface Social {
    name: string;
    href: string;
    /** id del ícono en icons8 */
    icon: string;
}

export interface Tech {
    name: string;
    logo: string;
    /** clases del logo; por defecto "size-20" */
    class?: string;
}

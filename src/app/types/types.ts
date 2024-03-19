export type Experience = {
    logoSrc: string,
    company: string,
    role: string,
    startDate: string,
    endDate: string | null,
    description: string[]
}

export type Project = {
    logoSrc: string,
    name: string,
    tools: string[],
    startDate: string,
    endDate: string | null,
    description: string[]
}
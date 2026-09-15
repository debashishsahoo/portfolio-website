export type Role = {
    role: string,
    startDate: string,
    endDate: string | null,
    description: string[]
}

export type Experience = {
    logoSrc: string,
    company: string,
    role: string,
    location?: string,
    startDate: string,
    endDate: string | null,
    description?: string[],
    roles?: Role[]
}

export type Project = {
    logoSrc: string,
    name: string,
    url: string,
    tools: string[],
    startDate: string,
    endDate: string | null,
    description: string[]
}

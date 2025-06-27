export interface Notice {
    id: string
    title: string
    content: string
    role: string
    author: string
    date: string
    views: number
    image?: File | null
}
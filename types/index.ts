export interface ChildProps {
    children: React.ReactNode
}

export interface ICourse {
    title: string
    image: {
        url: string
    }
    cost: number
    slug: string
    content: {html:string}
}

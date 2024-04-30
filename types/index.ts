export interface ChildProps {
    children: React.ReactNode
}

export interface ICourse {
    title: string
    author: IAuthor
    image: {
        url: string
    }
    cost: number
    slug: string
    content: {html:string}
    date: string
}
export interface IAuthor {
    name: string
    image: {
        url: string
    }
}
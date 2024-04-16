export interface ChildProps {
    children: React.ReactNode
}

export interface ICourse {
    title: string
    author: IAuthor
    image: {
        url: string
    }

}
export interface IAuthor {
    name: string
    image: {
        url: string
    }
}


export interface User {
    id: number,
    username: string,
    password: string,
    dateCreated: Date
}

export interface Profile {
    userId: number,
    firstName: string,
    lastName: string,
    profileImage: string,
    dateCreated: Date
}
export interface UserRole{
    userId: number,
    role: Role
}

export enum Role{
    USER = 'USER',
    LIBRARIAN = 'LIBRARIAN'
}
export interface Book{
    id: number,
    title: string,
    author: string,
    description: string,
    bookImage: string,
    dateCreated: Date
}

export interface Stock{
    bookId: number,
    count: number
}

export interface LendBook{
    id?: number
    bookId: number,
    userId: number,
    numberLent: number,
    dateLent?: Date,
    dateToBeReturned?: Date,
    overdue?: boolean
    user?: User
}
export interface DataModel {
}
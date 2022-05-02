import { User } from '../types'

export const fetchApi = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

export const fetchUser = async (id: string): Promise<User> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return await response.json()
}

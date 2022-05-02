import { User } from '../types'

export async function fetchApi(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

export async function fetchUser(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return await response.json()
}

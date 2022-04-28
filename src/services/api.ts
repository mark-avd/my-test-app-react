import { User } from '../types'

export async function fetchApi(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
    })
    return await response.json()
}

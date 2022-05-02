export interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export interface UserProfileForm {
    name: string
    username: string
    city: string
    email: string
    phone: string
    street: string
    website: string
    zipcode: string
    comment?: string
}

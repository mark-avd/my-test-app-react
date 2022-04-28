import { makeAutoObservable, runInAction } from 'mobx'
import { fetchApi } from '../services/api'
import { User } from '../types'

class Store {
    users: User[] = []
    responseStatus: 'pending' | 'done' | 'error' | null = null
    error: unknown

    constructor() {
        makeAutoObservable(this)
        runInAction(() => this.fetchUsers()).then()
    }

    sortByCity = () => {
        this.users = [...this.users].sort((a, b) =>
            a.address.city.localeCompare(b.address.city)
        )
    }

    sortByCompany = () => {
        this.users = [...this.users].sort((a, b) =>
            a.company.name.localeCompare(b.company.name)
        )
    }

    async fetchUsers() {
        this.responseStatus = 'pending'

        try {
            const response = await fetchApi()
            runInAction(() => {
                this.users = response
                this.responseStatus = 'done'
            })
        } catch (error: unknown) {
            runInAction(() => {
                this.error = error
                this.responseStatus = 'error'
            })
        }
    }
}

export const store = new Store()

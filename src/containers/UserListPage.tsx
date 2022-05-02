import React, { useEffect, useState } from 'react'
import PageTemplate from '../components/PageTemplate'
import Sidebar from '../components/Sidebar'
import LoadingDummy from '../components/LoadingDummy'
import UserList from '../components/UserList'
import { fetchApi } from '../services/api'
import { User } from '../types'

const UserListPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [users, setUsers] = useState<User[]>()
    useEffect(() => {
        fetchApi()
            .then((response) => setUsers(response))
            .then(() => setIsLoading(false))
    }, [])
    const sortByCity = () => {
        setUsers(
            (prevUsers) =>
                prevUsers &&
                [...prevUsers].sort((a, b) =>
                    a.address.city.localeCompare(b.address.city)
                )
        )
    }
    const sortByCompany = () => {
        setUsers(
            (prevUsers) =>
                prevUsers &&
                [...prevUsers].sort((a, b) =>
                    a.company.name.localeCompare(b.company.name)
                )
        )
    }
    return (
        <PageTemplate
            headerText={'Список пользователей'}
            sidebar={
                <Sidebar
                    sortByCity={sortByCity}
                    sortByCompany={sortByCompany}
                />
            }
        >
            {isLoading ? <LoadingDummy /> : <UserList users={users} />}
        </PageTemplate>
    )
}

export default UserListPage

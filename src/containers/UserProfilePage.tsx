import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTemplate from '../components/PageTemplate'
import Sidebar from '../components/Sidebar'
import LoadingDummy from '../components/LoadingDummy'
import UserProfileFrom from '../components/UserProfileFrom'
import { fetchUser } from '../services/api'
import { User } from '../types'

const UserProfilePage: React.FC = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User>()
    useEffect(() => {
        id &&
            fetchUser(id)
                .then((response) => setUser(response))
                .then(() => setIsLoading(false))
    }, [id])
    return (
        <PageTemplate headerText={'Профиль пользователя'} sidebar={<Sidebar />}>
            {isLoading ? (
                <LoadingDummy />
            ) : (
                <UserProfileFrom
                    name={user?.name}
                    username={user?.username}
                    email={user?.email}
                    phone={user?.phone}
                    website={user?.website}
                    city={user?.address.city}
                    street={user?.address.street}
                    zipcode={user?.address.zipcode}
                />
            )}
        </PageTemplate>
    )
}

export default UserProfilePage

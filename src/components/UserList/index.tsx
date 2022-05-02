import React from 'react'
import UserCard from '../UserCard'
import { User } from '../../types'
import './styles.scss'

interface UserListProps {
    users?: User[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <>
            {users?.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    city={user.address.city}
                    company={user.company.name}
                />
            ))}
            <p className={'user-list__footer'}>Найдено {users?.length} пользователей</p>
        </>
    )
}

export default UserList

import React from 'react'
import { observer } from 'mobx-react'
import UserCard from '../UserCard'
import { store } from '../../stores/store'
import './styles.scss'

const UserList: React.FC = () => {
    return (
        <div className={'user-list'}>
            <h4 className={'user-list__header'}>Список пользователей</h4>
            {store.users.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    city={user.address.city}
                    company={user.company.name}
                />
            ))}
            <p className={'user-list__footer'}>
                Найдено {store.users.length} пользователей
            </p>
        </div>
    )
}

export default observer(UserList)
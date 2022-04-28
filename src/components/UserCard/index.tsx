import React from 'react'
import './styles.scss'

interface UserCardProps {
    id: number
    name: string
    city: string
    company: string
}

const UserCard: React.FC<UserCardProps> = ({ id, name, company, city }) => {
    return (
        <div className={'user-card'}>
            <ul className={'user-card__info'}>
                <li className={'user-card__info-category'}>
                    <span>ФИО:</span> {name}
                </li>
                <li className={'user-card__info-category'}>
                    <span>Город:</span> {city}
                </li>
                <li className={'user-card__info-category'}>
                    <span>Компания:</span> {company}
                </li>
            </ul>
            <a className={'user-card__link'} href="#">
                Подробнее
            </a>
        </div>
    )
}

export default UserCard

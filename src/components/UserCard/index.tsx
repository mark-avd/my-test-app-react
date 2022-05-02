import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link className={'user-card__link'} to={`/${id}`}>
                Подробнее
            </Link>
        </div>
    )
}

export default UserCard

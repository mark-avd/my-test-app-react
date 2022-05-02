import React from 'react'
import Button from '../Button'
import './styles.scss'

interface SidebarProps {
    sortByCity?: () => void
    sortByCompany?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ sortByCity, sortByCompany }) => {
    return (
        <>
            <nav className={'sidebar__controls-container'}>
                <div className="sidebar__controls-element">
                    <p>Сортировка</p>
                </div>
                <div className="sidebar__controls-element">
                    <Button text={'по городу'} onClick={sortByCity} />
                </div>
                <div className="sidebar__controls-element">
                    <Button text={'по компании'} onClick={sortByCompany} />
                </div>
            </nav>
        </>
    )
}

export default Sidebar

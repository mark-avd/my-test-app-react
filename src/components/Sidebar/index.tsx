import React from 'react'
import Button from '../Button'
import './styles.scss'

interface SidebarProps {
    sortByCity?: () => void
    sortByCompany?: () => void
    profile?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
    sortByCity,
    sortByCompany,
    profile = false,
}) => {
    return (
        <>
            <div className={'sidebar__controls-container'}>
                <div className="sidebar__controls-element">
                    <p>Сортировка</p>
                </div>
                <div className="sidebar__controls-element">
                    <Button
                        text={'по городу'}
                        onClick={sortByCity}
                        disabled={profile}
                    />
                </div>
                <div className="sidebar__controls-element">
                    <Button
                        text={'по компании'}
                        onClick={sortByCompany}
                        disabled={profile}
                    />
                </div>
            </div>
        </>
    )
}

export default Sidebar

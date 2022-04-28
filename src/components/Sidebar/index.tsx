import React from 'react'
import { observer } from 'mobx-react'
import Button from '../Button'
import { store } from '../../stores/store'
import './styles.scss'

const Sidebar: React.FC = () => {
    return (
        <div className={'sidebar'}>
            <nav className={'sidebar__controls-container'}>
                <div className="sidebar__controls-element">
                    <p>Сортировка</p>
                </div>
                <div className="sidebar__controls-element">
                    <Button
                        isPrimary={true}
                        text={'по городу'}
                        onClick={store.sortByCity}
                    />
                </div>
                <div className="sidebar__controls-element">
                    <Button
                        isPrimary={true}
                        text={'по компании'}
                        onClick={store.sortByCompany}
                    />
                </div>
            </nav>
        </div>
    )
}

export default observer(Sidebar)

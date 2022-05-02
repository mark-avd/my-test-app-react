import React from 'react'
import Icon from '../Icon'
import './styles.scss'

const LoadingDummy: React.FC = () => {
    return (
        <div className={'loading-dummy'}>
            <Icon type={'loading'} />
        </div>
    )
}

export default LoadingDummy

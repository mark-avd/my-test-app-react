import React from 'react'
import loadingIcon from '../../assets/loading-icon.svg'
import './styles.scss'

interface IconProps {
    type: 'loading'
}

const Icon: React.FC<IconProps> = ({ type }) => {
    return <>{type === 'loading' && <img src={loadingIcon} alt={'loading icon'} />}</>
}

export default Icon

import React from 'react'
import './styles.scss'

interface ButtonProps {
    text: string
    onClick: () => void
    isPrimary: boolean
}

const Button: React.FC<ButtonProps> = ({ text, isPrimary, onClick }) => {
    return (
        <button
            className={isPrimary ? 'button' : 'button_send'}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button

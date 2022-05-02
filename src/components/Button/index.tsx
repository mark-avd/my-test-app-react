import React from 'react'
import './styles.scss'

interface ButtonProps {
    text: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    isPrimary?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    isPrimary = true,
    disabled = false,
}) => {
    return (
        <button
            className={isPrimary ? 'button' : 'button button_secondary'}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button

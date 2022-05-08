import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import './styles.scss'

interface FormFieldProps {
    label: string
    type?: string
    textarea?: boolean
    readOnly?: boolean
    register?: UseFormRegisterReturn
    error?: boolean
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    readOnly,
    type = 'text',
    textarea = false,
    register,
    error,
}) => {
    return (
        <label className={'form-field'}>
            <p className={'form-field__label'}>{label}</p>
            {textarea ? (
                <textarea
                    className={'form-field__textarea'}
                    name={label.toLowerCase()}
                    id={label.toLowerCase()}
                    rows={4}
                    readOnly={readOnly}
                    {...register}
                />
            ) : (
                <input
                    className={
                        error
                            ? 'form-field__input form-field__input_error'
                            : 'form-field__input'
                    }
                    name={label.toLowerCase()}
                    id={label.toLowerCase()}
                    type={type}
                    readOnly={readOnly}
                    {...register}
                />
            )}
        </label>
    )
}

export default FormField

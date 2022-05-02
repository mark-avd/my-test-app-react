import React from 'react'
import './styles.scss'

interface FormFieldProps {
    label: string
    type?: string
    value?: string
    textarea?: boolean
    readOnly?: boolean
    onChange: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    value,
    onChange,
    readOnly,
    type = 'text',
    textarea = false,
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
                    onChange={onChange}
                />
            ) : (
                <input
                    className={'form-field__input'}
                    name={label.toLowerCase()}
                    id={label.toLowerCase()}
                    type={type}
                    value={value}
                    readOnly={readOnly}
                    onChange={onChange}
                    required={true}
                />
            )}
        </label>
    )
}

export default FormField

import React, { useState } from 'react'
import Button from '../Button'
import FormField from '../FormField'
import { UserProfileForm } from '../../types'
import './styles.scss'

interface UserProfileFormProps {
    name: string
    username: string
    email: string
    street: string
    city: string
    zipcode: string
    phone: string
    website: string
}

const UserProfile: React.FC<UserProfileFormProps> = ({
    name,
    username,
    email,
    street,
    city,
    zipcode,
    phone,
    website,
}) => {
    const [readOnly, setReadOnly] = useState<boolean>(true)
    const [formData, setFormData] = useState<UserProfileForm>({
        name,
        username,
        city,
        email,
        phone,
        street,
        website,
        zipcode,
        comment: '',
    })

    const allowEdit = (): void => {
        setReadOnly(false)
    }

    const changeHandler = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const submitHandler = (event: React.SyntheticEvent): void => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form
            className={
                readOnly
                    ? 'user-profile-form user-profile-form_readonly'
                    : 'user-profile-form'
            }
        >
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Name'}
                    value={formData.name}
                    readOnly={readOnly}
                    onChange={(event) => changeHandler(event)}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Username'}
                    value={formData.username}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'E-mail'}
                    value={formData.email}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Street'}
                    value={formData.street}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'City'}
                    value={formData.city}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Zip code'}
                    value={formData.zipcode}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Phone'}
                    value={formData.phone}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Website'}
                    value={formData.website}
                    readOnly={readOnly}
                    onChange={changeHandler}
                />
            </div>
            <div className={'user-profile-form__textarea'}>
                <FormField
                    label={'Comment'}
                    value={formData.comment}
                    onChange={changeHandler}
                    textarea={true}
                />
            </div>
            <div className="user-profile-form__edit-button">
                <Button text={'Редактировать'} onClick={allowEdit} />
            </div>
            <div className="user-profile-form__submit-button">
                <Button
                    type={'submit'}
                    text={'Отправить'}
                    onClick={submitHandler}
                    isPrimary={false}
                    disabled={readOnly}
                />
            </div>
        </form>
    )
}

export default UserProfile

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button'
import FormField from '../FormField'
import { UserProfileForm } from '../../types'
import './styles.scss'

interface UserProfileFormProps {
    name?: string
    username?: string
    email?: string
    street?: string
    city?: string
    zipcode?: string
    phone?: string
    website?: string
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserProfileForm>({
        mode: 'onChange',
        defaultValues: {
            name,
            username,
            city,
            email,
            phone,
            street,
            website,
            zipcode,
            comment: '',
        },
    })

    const allowEdit = (): void => {
        setReadOnly(false)
    }

    const submitHandler: SubmitHandler<UserProfileForm> = (data): void => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className={
                readOnly
                    ? 'user-profile-form user-profile-form_readonly'
                    : 'user-profile-form'
            }
        >
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Name'}
                    readOnly={readOnly}
                    error={!!errors.name}
                    register={register('name', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Username'}
                    readOnly={readOnly}
                    error={!!errors.username}
                    register={register('username', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'E-mail'}
                    readOnly={readOnly}
                    error={!!errors.email}
                    register={register('email', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Street'}
                    readOnly={readOnly}
                    error={!!errors.street}
                    register={register('street', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'City'}
                    readOnly={readOnly}
                    error={!!errors.city}
                    register={register('city', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Zip code'}
                    readOnly={readOnly}
                    error={!!errors.zipcode}
                    register={register('zipcode', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Phone'}
                    readOnly={readOnly}
                    error={!!errors.phone}
                    register={register('phone', { required: true })}
                />
            </div>
            <div className={'user-profile-form__field'}>
                <FormField
                    label={'Website'}
                    readOnly={readOnly}
                    error={!!errors.website}
                    register={register('website', { required: true })}
                />
            </div>
            <div className={'user-profile-form__textarea'}>
                <FormField
                    label={'Comment'}
                    textarea={true}
                    register={register('comment')}
                />
            </div>
            <div className="user-profile-form__edit-button">
                <Button text={'Редактировать'} onClick={allowEdit} />
            </div>
            <div className="user-profile-form__submit-button">
                <Button
                    type={'submit'}
                    text={'Отправить'}
                    isPrimary={false}
                    disabled={readOnly}
                />
            </div>
        </form>
    )
}

export default UserProfile

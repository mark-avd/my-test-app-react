import React from 'react'
import Sidebar from '../components/Sidebar'
import UserList from '../components/UserList'

const UserListPage: React.FC = () => {
    return (
        <>
            <Sidebar />
            <UserList />
        </>
    )
}

export default UserListPage

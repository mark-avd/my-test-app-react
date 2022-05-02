import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserListPage from './containers/UserListPage'
import UserProfilePage from './containers/UserProfilePage'
import './App.scss'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<UserListPage />} />
                <Route path={'/:id'} element={<UserProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

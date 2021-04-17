import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import ImageGrid from './Imagegrid';

export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }

    }
    return (
        <div>
            <div className="box">
                <h1 className='has-text-centered'>Profile</h1>
                {error && <div className="notification is-warning">{error}</div>}
                <strong>Email:</strong> {currentUser.email}
                <Link to="/update-profile" className="button">Update Profile</Link>
                <Link to="/upload-form" className="button">Upload Form</Link>
                <button className="button" onClick={handleLogout}>Log Out</button>
            </div>
            <div>
                <ImageGrid/>
            </div>
        </div>
    )
}

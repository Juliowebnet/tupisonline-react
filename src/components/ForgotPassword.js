import React, {useRef, useState}from 'react'
import { Link } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'

export default function ForgotPassword(){
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }catch{
            setError('Falied to reset password')
        }
        setLoading(false)
    }

    return(
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3">
                        <div className="box">
                            <h1 className='has-text-centered'>PASSWORD RESET</h1>
                            {error && <div className="notification is-warning">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Email</label>
                                        <input className="input" type="email" ref={emailRef} required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="button is-primary is-fullwidth" type="submit" value="RESET PASSWORD" disabled={loading}/>
                                    </div>
                                </div>
                            </form>
                            <p className="has-text-centered mt-4"><Link to="/login">Login</Link></p>
                        </div>
                        <p className="has-text-centered mt-4">Need an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
} 


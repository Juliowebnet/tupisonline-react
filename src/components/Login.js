import React, {useRef, useState}from 'react'
import { Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'

export default function Login(){
    const emailRef = useRef();
    const passwordRef = useRef()
    const {login} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }catch{
            setError('Falied to log in')
        }
        setLoading(false)
    }

    return(
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3">
                        <div className="box">
                            <h1 className='has-text-centered'>LOG IN</h1>
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
                                        <label className="label">Password</label>
                                        <input className="input" type="password" ref={passwordRef} required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="button is-primary is-fullwidth" type="submit" value="LOG IN" disabled={loading}/>
                                    </div>
                                </div>
                            </form>
                            <p className="has-text-centered mt-4"><Link to="/forgot-password">Forgot password?</Link></p>
                        </div>
                            <p className="has-text-centered mt-4">Need an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
} 

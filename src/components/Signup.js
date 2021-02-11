import React, {useRef, useState}from 'react'
import {useAuth} from '../contexts/AuthContext'

export default function Signup(){
    const emailRef = useRef();
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }catch{
            setError('Falied to create an account')
        }
        setLoading(false)
    }

    return(
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3">
                        <div className="box">
                            <h1 className='has-text-centered'>SIGN UP</h1>
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
                                        <label className="label">Password confirm</label>
                                        <input className="input" type="password" ref={passwordConfirmRef} required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="button is-primary is-fullwidth" type="submit" value="Sign up" disabled={loading}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
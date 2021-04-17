import React, {useRef, useState}from 'react';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

export default function UpdateProfile(){
    const emailRef = useRef();
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(()=>{
            setError("Failed to update account")
        }).finally(()=>{
            setLoading(false)
        })
    }

    return(
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3">
                        <div className="box">
                            <h1 className='has-text-centered'>UPDATE PROFILE</h1>
                            {error && <div className="notification is-warning">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Email</label>
                                        <input className="input" type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Password</label>
                                        <input className="input" type="password" ref={passwordRef} placeholder="Leave blank to keep the same password"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Password confirm</label>
                                        <input className="input" type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same password"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="button is-primary is-fullwidth" type="submit" value="Update" disabled={loading}/>
                                    </div>
                                </div>
                            </form>
                            <p className="has-text-centered mt-4"><Link to="/">Cancel</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 

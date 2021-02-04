import React from 'react'

export default function Signup(){
    return(
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3">
                        <div className="box">
                            <h1 className='has-text-centered'>SIGNUP</h1>
                            <form>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Email</label>
                                        <input className="input" type="email"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Password</label>
                                        <input className="input" type="password"/>
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
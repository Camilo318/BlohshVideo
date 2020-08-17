import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <section className="register">
            <div className="register__container">
                <h2>Registrate</h2>
                <form>
                    <input className="input"type="text" placeholder="name"/>
                    <input className="input"type="email" placeholder="email"/>
                    <input className="input"type="password" placeholder="password"/>
                    <button type="submit">Registrarme</button>
                </form>
                
            </div>
        </section>
    )
}

export default Register
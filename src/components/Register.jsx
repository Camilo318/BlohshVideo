import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { newUser } from '../actions/index'
import '../assets/styles/Register.scss'

const Register = ({newUser, history}) => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = e => {
        const newData = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(newData)
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(data)
        newUser(data)
        history.push('/')
    }
    return (
        <section className="register">
            <div className="register__container">
                <h2>Registrate</h2>
                <form className="register__container--form"
                onSubmit={onSubmit}>
                    <input className="input"
                    type="text"
                    placeholder="Name"
                    name='name'
                    onChange={handleChange}
                    />

                    <input className="input"
                    type="email"
                    placeholder="Email"
                    name='email'
                    onChange={handleChange}
                    />

                    <input className="input"
                    type="password"
                    placeholder="Password"
                    name='password'
                    onChange={handleChange}
                    />

                    <button type="submit">Registrarme</button>
                </form>
                <Link to='/login'>
                    Iniciar Sesión
                </Link>
            </div>
        </section>
    )
}

const mapDispatchToProps = {
    newUser
}
export default connect(null, mapDispatchToProps)(Register)
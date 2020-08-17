import React, {useState, useEffect }from 'react'
import {connect} from 'react-redux'
import {loginRequest} from '../actions/index'
import '../assets/styles/Login.scss'

const Login = ({loginRequest}) => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(credentials)
        loginRequest(credentials)

    }

    const handleChange = (e) => {
        const newCredentials = {
            ...credentials,
            [e.target.name]: e.target.value
        }
        setCredentials(newCredentials)
    }
    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicio de sesión</h2>
                <form action="" className="login__form" onSubmit={onSubmit}>
                    <input type="email" 
                    className="input" 
                    placeholder="Correo" 
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required/>

                    <input type="password" 
                    className="input" 
                    placeholder="Contraseña" 
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required/>

                    <button className="button" type="submit">
                        Iniciar Sesión
                    </button>

                    <div className="login__remember-me">
                        <div>
                            <input type="checkbox" id="cbox1" value="cbox"/>
                            <label htmlFor="cbox1">Recuérdame</label>
                        </div>
                        <a href="">Olvidé mi Contraseña</a>
                    </div>

                </form>

                <section className="login__social-media">
                    <div>
                        Inicia sesión con Google
                    </div>
                    <div>
                        Inicia sesión con Twitter
                    </div>
                </section>

                <p className="login__register">
                    No tienes ninguna cuenta.
                    <a href="">Registrate</a>
                </p>

            </section>
        </section>
    )
}

const mapDispatchToProps = {
    loginRequest,
}
export default connect(null,mapDispatchToProps)(Login)
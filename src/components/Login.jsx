import React from 'react'
import '../assets/styles/Login.scss'

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Inicio de sesión</h2>
            <form action="" className="login__form">
                <input type="email" className="input" placeholder="Correo" required/>
                <input type="password" className="input" placeholder="Contraseña" required/>
                <button className="button">Iniciar Sesión</button>

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

export default Login
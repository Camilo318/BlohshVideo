import React from 'react'
import  '../assets/styles/Header.scss'
import Logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="" className="header__img"/>

            <div className="header__options">
                <div className="header__profile">
                    <img src="https://img.icons8.com/ios/100/000000/cat-profile.png"/>
                    <p>Perfil <i className="fas fa-caret-down"></i></p>
                </div>
                <div className="header__dropdown">
                    <a href="#">Ajustes</a>
                    <a href="/login">Iniciar Sesión</a>
                </div>
            </div>
        </header>   
    )
}

export default Header
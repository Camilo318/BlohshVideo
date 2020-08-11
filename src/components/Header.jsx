import React from 'react'
import { Link } from 'react-router-dom'
import  '../assets/styles/Header.scss'
import Logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img src={Logo} alt="" className="header__img"/>
            </Link>

            <div className="header__options">
                <div className="header__profile">
                    <img src="https://img.icons8.com/ios/100/000000/cat-profile.png"/>
                    <p>Perfil <i className="fas fa-caret-down"></i></p>
                </div>
                <div className="header__dropdown">
                    <a href="#">Ajustes</a>
                    <Link to='/login'>
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </header>   
    )
}

export default Header
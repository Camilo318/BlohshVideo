import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utilities/gravatar'
import  '../assets/styles/Header.scss'
import Logo from '../assets/images/logo.png'
import {logoutRequest} from '../actions/index'

const Header = ({user, logoutRequest}) => {
    const hasUser = user.email

    const handleLogout = () => {
        console.log('LogOut')
        logoutRequest({})
    }
    return (
        <header className="header">
            <Link to='/'>
                <img src={Logo} alt="" className="header__img"/>
            </Link>

            <div className="header__options">
                <div className="header__profile">
                    {
                        hasUser ? 
                        <img src={gravatar(user.email)} alt={user.email}/>
                        :
                        <img src="https://img.icons8.com/ios/100/000000/cat-profile.png"/>

                    }
                    <p>Perfil <i className="fas fa-caret-down"></i></p>
                </div>
                <div className="header__dropdown">
                    {
                        hasUser ?
                        <>
                            <a href="#">{user.name}</a>
                            <Link to='/' onClick={handleLogout}>
                            Cerrar Sesión
                            </Link>
                        </>    
                        :
                        <Link to='/login'>
                            Iniciar Sesión
                        </Link> 
                    }
                </div>
            </div>
        </header>   
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
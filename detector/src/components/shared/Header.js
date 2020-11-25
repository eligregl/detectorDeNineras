import React, { Component } from 'react';
import logo from '../../assets/logo-ddn.png';
import user from '../../assets/user.png';
import SignOutButton from '../../screens/SignOut';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/home"><img src={logo} alt="logo" className="header__logo"/></a>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <p>Cuenta</p>
                        <img src={user} alt=""/>
                        <ul>
                            <li><a href="/profile">Perfil</a></li>
                            {/* <li><a href="/">Cerrar Sesión</a></li> */}
                            <li><SignOutButton /></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

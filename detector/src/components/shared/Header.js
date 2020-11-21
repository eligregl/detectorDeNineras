import React, { Component } from 'react';
import logo from '../../assets/logo-ddn.png';
import user from '../../assets/user.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="logo" className="header__logo"/>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <p>Cuenta</p>
                        <img src={user} alt=""/>
                        <ul>
                            <li><a href="/">Perfil</a></li>
                            <li><a href="/">Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

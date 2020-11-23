import React from 'react';
import logo from '../assets/logo-ddn.png';
import SitterList from './SitterList';

export const Home = () => {
    return (
        <div>
            {/* <img src={logo} alt=""/>
            <p>La aplicación para asegurar el buen cuidado de los pequeños</p>
            <p>Agenda tu servicio con una niñera disponible</p> */}
            <SitterList />
        </div>
    )
}

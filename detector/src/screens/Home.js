import React from 'react';
import logo from '../assets/logo-ddn.png';
import SitterList from './SitterList';

const Home = () => (
    <div>
        <div className="home__hero">
        <img src={logo} alt="logo"/>
        <p>La aplicación para asegurar el buen cuidado de los pequeños</p>
        <p>Agenda tu servicio con una niñera disponible</p>
        </div>
        <SitterList />
    </div>
);

export default Home;
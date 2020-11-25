import React from 'react';
import heroLogo from '../assets/logo-ddn.png';
import image2 from '../assets/image2.png';
import SitterSlider from '../components/SitterSlider';

export default function Landing() {
    return (
            <div>
                <div className="hero">
                    <img src={heroLogo} alt=""/>
                    <h2>Encuentra la niñera perfecta</h2>
                    <h3>También puedes ofrecer tus servicios como niñera</h3>
                    <button><a href="/register">Regístrate</a></button>
                </div>
                <div className="below__section">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <img src={image2} alt=""/>
                </div>
                <SitterSlider />
                <div className="belowSlider">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button><a href="/register">Visita Sus perfiles</a></button>
                </div>
        </div>
    )
}
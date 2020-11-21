import React, { Component } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import heroLogo from '../assets/logo-ddn.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="hero">
                    <img src={heroLogo} alt=""/>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
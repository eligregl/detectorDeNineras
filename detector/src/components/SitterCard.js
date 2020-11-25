import React, { Component } from 'react';
import image5 from '../assets/image5.png';

export default class SitterCard extends Component {
    render() {
        return (
            <div>
                <a href="/sitterprofile"  className="sitterCard">
                    <div>
                        <img src={image5} alt=""/>
                    </div>
                    <div className="sitterCard__data">
                        <h3>Nombre Apellido</h3>
                        <h4>XX Años</h4>
                        <h4>Ciudad, País</h4>
                    </div>
                </a>
            </div>
        )
    }
}

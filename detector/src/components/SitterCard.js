import React, { Component } from 'react';
import image3 from '../assets/image3.png';

export default class SitterCard extends Component {
    render() {
        return (
            <div className="sitterCard">
                <div>
                    <img src={image3} alt=""/>
                </div>
                <div className="sitterCard__data">
                    <h3>Nombre Apellido</h3>
                    <h4>XX Años</h4>
                    <h4>Ciudad, País</h4>
                </div>
            </div>
        )
    }
}

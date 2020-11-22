import React, { Component } from 'react';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
export default class SitterSlider extends Component {
    render() {
        return (
            <div>
                <div class="carousel-wrapper">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <div class="carousel-item item-1">
                    <img src={image3} alt=""/>
                    <a class="arrow arrow-prev" href="#item-3"></a>
                    <a class="arrow arrow-next" href="#item-2"></a>
                </div>
                
                <div class="carousel-item item-2">
                    <img src={image4} alt=""/>
                    <a class="arrow arrow-prev" href="#item-1"></a>
                    <a class="arrow arrow-next" href="#item-3"></a>
                </div>
                
                <div class="carousel-item item-3">
                    <img src={image5} alt=""/>
                    <a class="arrow arrow-prev" href="#item-2"></a>
                    <a class="arrow arrow-next" href="#item-1"></a>
                </div>
                </div>
            </div>
        )
    }
}

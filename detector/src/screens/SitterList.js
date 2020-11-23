import React, { Component } from 'react'
import SitterCard from '../components/SitterCard'

export default class SitterList extends Component {
    render() {
        return (
            <div>
                <h2 className="sitterList__title">Conoce a la niñera perfecta</h2>
                <div className="sitterList">
                    <div className="sitterList__leftColumn">
                        <SitterCard />
                        <SitterCard />
                        <SitterCard />
                        <SitterCard />
                    </div>
                    <div className="sitterList__rightColumn">
                        <SitterCard />
                        <SitterCard />
                        <SitterCard />
                        <SitterCard />
                    </div>
                </div>
            </div>
        )
    }
}

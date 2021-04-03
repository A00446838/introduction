import React, { Component } from 'react'
import { weatherApi } from '../../consts/api'
import axios from 'axios'

import './Town.css'

class Town extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originalTemperature: 40,
            temperature: 40,
            unit: 'C'
        }
    }

    componentDidMount() {
        this.weather()
    }

    weather = () => {
        axios.get(weatherApi)
            .then((res) => {
                console.log(res)
                console.log(res.data.main.temp)
                let temp = res.data.main.temp
                let cTemp = parseInt(temp - 273)
                this.setState({ originalTemperature: cTemp, temperature: cTemp })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    weatherIcon = () => {
        let weatherImage = ''
        if (this.state.originalTemperature <= 10) {
            weatherImage = 'assets/cold.png'
        } else if (this.state.originalTemperature <= 20) {
            weatherImage = 'assets/mild.png'
        } else {
            weatherImage = 'assets/sunny.png'
        }
        return (<div className="weatherIconContainer">
            <img className="weatherIcon" src={weatherImage} alt='weatherIcon' />
        </div>)
    }

    toggle(unit) {
        let temperature = this.state.originalTemperature
        if (unit === 'F') {
            // C -> F
            temperature = temperature * (9 / 5) + 32
            this.setState({ temperature: temperature.toFixed(), unit: 'F' })
        } else {
            // F -> C
            this.setState({ temperature: temperature.toFixed(), unit: 'C' })
        }

    }

    render() {
        return (
            <div className="Town">
                <img className="halifax" src='halifax.jpg' alt='halifax' />
                <h2>I live in Halifax, Nova Scotia</h2>
                <div className="temperature"> {this.weatherIcon()} <font>{this.state.temperature} °{this.state.unit}</font></div>
                <div><button onClick={() => { this.toggle('C') }} disabled={this.state.unit === 'C'}>To Celcius </button><button onClick={() => { this.toggle('F') }} disabled={this.state.unit === 'F'}>To Farenhiet </button></div>
            </div>
        );
    }
}

export default Town;

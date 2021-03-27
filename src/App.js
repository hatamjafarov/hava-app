import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
    state = {
        timezone: null,
        temp: null,
        main: null,
        feels_like: null,
        humidity: null,
        wind_speed: null,
        city: "Baku",
    };

    coordinates = [
        { name: "Bakı", lat: "40.3777", lon: "49.892" },
        { name: "Istanbul", lat: "41.0082", lon: "28.9784" },
        { name: "London", lat: "51.5074", lon: "0.1278" },
        { name: "Paris", lat: "48.8566", lon: "2.3522" },
    ];

    lat = null;
    lon = null;

    showName = (name) => {
        this.setState({
            city: name,
        });
    };
    city;
    timezone;
    firstT;

    switchHandler = () => {
        this.timezone = this.state.timezone;
        switch (this.state.city) {
            case "Bakı":
                this.lat = this.coordinates[0].lat;
                this.lon = this.coordinates[0].lon;
                break;
            case "Istanbul":
                this.lat = this.coordinates[1].lat;
                this.lon = this.coordinates[1].lon;
                break;
            case "London":
                this.lat = this.coordinates[2].lat;
                this.lon = this.coordinates[2].lon;
                break;
            case "Paris":
                this.lat = this.coordinates[3].lat;
                this.lon = this.coordinates[3].lon;
                break;
            default:
                break;
        }
        this.city = this.state.city;
    };

    componentDidMount() {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=40.3777&lon=49.892&exclude=hourly&appid=1ef3e8cfb28e3ebb2ad31b47697f9613&units=metric`
            )
            .then((response) => {
                this.setState({
                    timezone: response.data.timezone,
                    temp: response.data.current.temp,
                    main: response.data.current.weather[0].main,
                    feels_like: response.data.current.feels_like,
                    humidity: response.data.current.humidity,
                    wind_speed: response.data.current.wind_speed,
                });
            });
    }

    componentDidUpdate() {
        if (this.timezone === this.state.timezone) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=hourly&appid=1ef3e8cfb28e3ebb2ad31b47697f9613&units=metric`
                )
                .then((response) => {
                    this.setState({
                        timezone: response.data.timezone,
                        temp: response.data.current.temp,
                        main: response.data.current.weather[0].main,
                        feels_like: response.data.current.feels_like,
                        humidity: response.data.current.humidity,
                        wind_speed: response.data.current.wind_speed,
                    });
                });
        }
    }
    render() {
        return (
            <div className="App">
                {this.city !== this.state.city ? this.switchHandler() : null}

                <Navigation active={this.state.city} showName={this.showName} />

                {this.timezone === this.state.timezone ? (
                    <Loading />
                ) : (
                    <Main
                        timezone={this.state.timezone}
                        temp={this.state.temp}
                        feels_like={this.state.feels_like}
                        humidity={this.state.humidity}
                        wind_speed={this.state.wind_speed}
                        main={this.state.main}
                    />
                )}
            </div>
        );
    }
}

export default App;

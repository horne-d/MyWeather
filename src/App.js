import React from 'react';
import UserLocation from './components/UserLocation.js';
import Main from './components/Main.js';
import Email from './components/Email.js';
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  //state
  state = {
    userPosition: {
      latitude: 35,
      longitude: 139
    },
    weather: {},
    regionInput: "",
    showHide:true
  }

  componentDidMount() {
    //check whether geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        //get the lat and long of your device
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({ userPosition: pos });

        //Weather Api call
        Axios.get(`http://api.weatherstack.com/current?access_key=d1ac016511a944aa37d30232c10a1b4c&query=${this.state.userPosition.latitude},${this.state.userPosition.longitude}`).then(res => {

          let userWeather = {
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            location: res.data.location.name,
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
            time: res.data.location.localtime
          }

          this.setState({ weather: userWeather });
        })
      })
    }
  }

  //update the value of the the input field with state
  changeRegion = (value) => {
    this.setState({ regionInput: value })
  }

  //update the weather depending upon the value user entered
  changeLocation = (e) => {

    e.preventDefault()

    Axios.get(`http://api.weatherstack.com/current?access_key=d1ac016511a944aa37d30232c10a1b4c&query=${this.state.regionInput}`).then(res => {

      let userWeather = {
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        location: res.data.location.name,
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons,
        time: res.data.location.localtime
      }

      this.setState({ weather: userWeather });

    })
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Main changeRegion={this.changeRegion} changeLocation={this.changeLocation} />
          <UserLocation weather={this.state.weather} />
        </div>
        <div className="emailFooter">
          <Email />
        </div>
      </div>
    );
  }
}

export default App;

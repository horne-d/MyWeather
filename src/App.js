import React from 'react';
import Axios from 'axios';
import './App.css';
import Displayweather from './components/DisplayWeather.js';

class App extends React.Component {

  state = {
    coords: {
      latitude: 4,
      longitude: 30
    },
    data: {

    }
  }

  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.setState({ coords:newCoords });


        Axios.get(`http://api.weatherstack.com/autocomplete?access_key=d1ac016511a944aa37d30232c10a1b4c&query=london`).then(res => {
          
          let weatherData = {
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            location: res.data.location.name,
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons
          }

          this.setState({ data: weatherData });

        })

      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="flex-center position-ref full-height">
              <div className="content">
                  <div className="title m-b-md">
                      MyWeather
                      <div className="subtitle">Your Weekly Forecast</div>
                  </div>

                  <Displayweather />
              </div>
          </div>
      </div>
    );
  }
  
}

export default App;

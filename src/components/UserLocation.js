import React, { component } from 'react';

export default function UserLocation(props) {

    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img, time } = props.weather;

    return (
        <div className="user-weather">
            <div className="tempMain">
                <div className="tempDegree">
                    <h2>{temperature}<span className="tempCelcius"><sup>o</sup>c</span></h2>
                    <p>{time}</p>
                </div>
                <div className="tempLoc">
                    <h4>{location}</h4>
                    <p>{region} , {country}</p>
                    <p>{description}</p>
                </div>
                <div className="tempImg">
                    <img className="mainImg" src={img} alt="weather-img" />
                </div>
                
            </div>  
            <div className="tempOptions">
                <div>
                    <p>Wind Speed</p>
                    {wind_speed}
                </div>
                <div>
                    <p>Pressure</p>
                    {pressure}
                </div>
                <div>
                    <p>Precipitation</p>
                    {precip}
                </div>
                <div>
                    <p>Humidity</p>
                    {humidity}
                </div>
            </div>
            

        </div>
    )
}

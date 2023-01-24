import React from 'react'
import Spinner from './Spinner'
import "../assets/WeatherCard.css"

const WeatherCard = ({ forecast, weather, show, loadingData } ) => {
    const today = new Date();
    const date = today.getDate() + '/' + parseInt(today.getMonth()+ 1) + '/' + today.getFullYear()

    const upperCaseFL = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };

    if (loadingData) return <Spinner/>
    if (show){
    var iconUrl1 = "http://openweathermap.org/img/w/" + forecast.list[1].weather[0].icon + ".png";
    var iconUrl4 = "http://openweathermap.org/img/w/" + forecast.list[4].weather[0].icon + ".png";
    var iconUrl7 = "http://openweathermap.org/img/w/" + forecast.list[7].weather[0].icon + ".png";
    
    var forecastDate1 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
    var forecastDate4 = forecast.list[4].dt_txt.substring(8, 10) + '/' + forecast.list[4].dt_txt.substring(5, 7) + '/' + forecast.list[4].dt_txt.substring(0, 4) + ' ' +  forecast.list[4].dt_txt.substring(11, 13);
    var forecastDate7 = forecast.list[7].dt_txt.substring(8, 10) + '/' + forecast.list[7].dt_txt.substring(5, 7) + '/' + forecast.list[7].dt_txt.substring(0, 4) + ' ' +  forecast.list[7].dt_txt.substring(11, 13);
    }


    return (
        <div className="mt-2 cont">

            {
                show === true ? (
                    <div className='container-card card'>
                        <div className='row-1'>
                            <h1 className='city'>{weather.name}, {weather.sys.country}</h1>
                            <p className='date'>{date}</p>
                            <iframe className='map' src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.coord.lon}5!3d${weather.coord.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}/>
                        </div>
                        <div className='row-2-3'>
                            <div className='row-2'>
                                <p className='temp'><img className='img-temp' src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt="icon"/>{(weather.main.temp - 273.15).toFixed(1)}ºC</p>
                                <p className="card-desc"><b>{upperCaseFL(weather.weather[0].description)}</b></p>
                                <p className='temp-feels-like'>St: <b>{(weather.main.feels_like - 273.15).toFixed(1)}ºC</b></p>

                                <p className='temp-min'>Min: <b>{(weather.main.temp_min - 273.15).toFixed(1)}ºC</b></p>
                                <p className='temp-max'>Max: <b>{(weather.main.temp_max - 273.15).toFixed(1)}ºC</b></p>
                            </div>
                            <div className='row-3'>
                                <div className="forecast fore-1">
                                    <p className='fore-date'>{forecastDate1}h</p>
                                    <img className='fore-icon' src={iconUrl1} alt="icon"/>
                                    <p className="description">{forecast.list[1].weather[0].description}</p>
                                    <p className="temp-f"><b>{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</b></p>
                                </div>

                                <div className="forecast fore-2">
                                    <p className='fore-date'>{forecastDate4}h</p>
                                    <img className='fore-icon' src={iconUrl4} alt="icon"/>
                                    <p className="description">{forecast.list[4].weather[0].description}</p>
                                    <p className="temp-f"><b>{(forecast.list[4].main.temp - 273.15).toFixed(1)}ºC</b></p>
                                </div>

                                <div className="forecast fore-3">
                                    <p className='fore-date'>{forecastDate7}h</p>
                                    <img className='fore-icon' src={iconUrl7} alt="icon"/>
                                    <p className="description">{forecast.list[7].weather[0].description}</p>
                                    <p className="temp-f"><b>{(forecast.list[7].main.temp - 273.15).toFixed(1)}ºC</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h1 className="sin-datos">Sin datos</h1>
                )
            }



        </div>

    );
}


export default WeatherCard
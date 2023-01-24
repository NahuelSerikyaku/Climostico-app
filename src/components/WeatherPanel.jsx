import React, { useState } from 'react'
import Form from './Form'
import Spinner from './Spinner'
import WeatherCard from './WeatherCard'

const WeatherPanel = () => {
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const getData = async(clickCity)=>{
        setLoading(true)

        //weather
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${clickCity}&lang=es&appid=${process.env.REACT_APP_KEY}`
        ).then ((res)=>{
            if(!res.ok) throw "error al conectar a la API"
            return res.json()
        }).then ((weatherData)=>{
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(e =>{
            console.log(e)
            setLoading(false)
            setShow(false)
        })

        //forecast
        await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${clickCity}&lang=es&appid=${process.env.REACT_APP_KEY}`
        ).then ((res)=>{
            if(!res.ok) throw "error al conectar a la API"
            return res.json()
        }).then ((forecastData)=>{
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShow(true)

        }).catch(e =>{
            console.log(e)
            setLoading(false)
            setShow(false)
        })

    }

    return (
        <div >
           <Form newData = {getData}/>
           <WeatherCard 
                weather = {weather}
                forecast = {forecast}
                loadingData = {loading}
                show = {show}
            />
        </div>
    )
}

export default WeatherPanel
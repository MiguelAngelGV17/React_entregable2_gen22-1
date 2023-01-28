import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [units, setUnits] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      // const apiKey = `d993d119ca66d0a611399e0a7acadf4a` // profe
      const apiKey = `9c2833b309b9e6eb67e889bc4a65a8f2` // Mine
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(2),
            celsiusMin: (res.data.main.temp_min - 273.15).toFixed(2),
            celsiusMax: (res.data.main.temp_max - 273.15).toFixed(2),
            farenheit: ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2),
            farenheitMin: ((res.data.main.temp_min - 273.15) * 9 / 5 + 32).toFixed(2),
            farenheitMax: ((res.data.main.temp_max - 273.15) * 9 / 5 + 32).toFixed(2),
            metric: res.data.wind.speed,
            imperial: (res.data.wind.speed * 2.23694).toFixed(2)
          }
          setUnits(obj)
        })
        .catch(err => console.log(err))
        .finally(() =>{
          setTimeout(() => {
            setIsLoading(false)
          }, 1000);
        })
    }
  }, [coords])

  return (
    <div className="App">
      {isLoading ? 
      <h1 className='loading'>Loading...</h1>
      :
      <WeatherCard
        weather={weather}
        units={units}
      />}
    </div>
  )
}
export default App

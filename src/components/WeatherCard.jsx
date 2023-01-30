import React, { useState } from 'react'

const WeatherCard = ({ weather, units, description }) => {

  const [changeT, setChangeTemperature] = useState(true)

  const handleClickChangeTemperature = () => {
    setChangeTemperature(!changeT)
  }

  return (
    <div>
      <div >
        <img className='bgImage' src= {description} alt="" />
      </div>
      <article className='card'>
        <div className='card__header'>
          <h1 className='box__title color'>Weather App</h1>
          <h2 className='box__location'><i className='bx bx-map color'></i> {weather?.name}, {weather?.sys.country}</h2>
        </div>
        <div className='content__card'>
          <section className='box__info'>
            <h3 className='color'>{weather?.weather[0].description}</h3>
            <ul>
              <li className='box__info-item'><i className='bx bx-wind bx-fade-left color' ></i> <span>Wind Speed:</span>
                {changeT ?
                  units?.metric + ' m/s'
                  :
                  units?.imperial + ' mph'
                }</li>
              <li className='box__info-item'> <i className='bx bxs-cloud color' ></i> <span>Clouds:</span> {weather?.clouds.all} %</li>
              <li className='box__info-item'><i className='bx bxs-tachometer color'></i> <span>Pressure:</span>  {weather?.main.pressure} hPa</li>
            </ul>
          </section>

          <footer >
            <div className='box__icon'>
              <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </div>

            <h2 className='box__ppalTemp'><i className='bx bxs-thermometer color'></i> {changeT ? units?.celsius + ' °C' : units?.farenheit + ' °F'}</h2>
            <span className='range'>T.min <span className='color2'>⬇</span>
              {changeT ?
                units?.celsiusMin
                :
                units?.farenheitMin
              }
            </span>
            <span className='range'>T.max <span className='color2'> ⬆ </span>
              {changeT ?
                units?.celsiusMax
                :
                units?.farenheitMax
              }
            </span><br />
          </footer>
        </div>
        <button className='btn' onClick={handleClickChangeTemperature}>Change to
          {changeT ?
            ' Imperial Units: °F, mph'
            :
            ' Metric Units: °C, m/s'}
        </button>
      </article>
    </div>
  )
}

export default WeatherCard
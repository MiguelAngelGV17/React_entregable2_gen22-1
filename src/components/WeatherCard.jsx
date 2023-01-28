import React, { useState } from 'react'

const WeatherCard = ({ weather, units }) => {

    const [changeT, setChangeTemperature] = useState(true)
    const [changeWSpeed, setChangeWSpeed] = useState(true)

    const handleClickChangeTemperature = () => {
        setChangeTemperature(!changeT)
    }

    const handleClickChangeWindSpeed = () => {
        setChangeWSpeed(!changeWSpeed)
    }

    /*
    Clear sky: https://i.gifer.com/origin/da/da094cc1c17cd92c07598bc54e403318.gif
    few clouds:
    scattered clouds: https://phoneky.co.uk/thumbs/screensavers/down/nature/amanecer_wT2IeXng.gif
    broken clouds:
    shower rain:
    rain:
    thunderstorm:
    snow:
    mist:
    */

    return (
        <div>
            <div >
                <img className='bgImage' src="https://i.gifer.com/origin/da/da094cc1c17cd92c07598bc54e403318.gif" alt="" />
            </div>
            <article className='card'>
                <div className='card__header'>
                    <h1 className='box__title color'>Weather App</h1>
                    <h2 className='box__location'><i class='bx bx-map color'></i> {weather?.name}, {weather?.sys.country}</h2>
                </div>
                <div className='content__card'>
                    <section className='box__info'>
                        <h3 className='color'>{weather?.weather[0].description}</h3>
                        <ul>
                            <li><i className='bx bx-wind bx-fade-left color' ></i> Wind Speed:
                                {changeT ?
                                    units?.metric + ' m/s'
                                    :
                                    units?.imperial + ' mph'
                                }</li>
                            <li> <i className='bx bxs-cloud color' ></i> Clouds: {weather?.clouds.all} %</li>
                            <li><i className='bx bxs-tachometer color'></i> Pressure: {weather?.main.pressure} hPa</li>
                        </ul>
                    </section>

                    <footer >
                        <div className='box__icon'>
                            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                        </div>

                        <h2 className='box__ppalTemp'><i className='bx bxs-thermometer color'></i> {changeT ? units?.celsius + ' °C' : units?.farenheit + ' °F'}</h2>
                        <span>T.min⬇
                            {changeT ?
                                units?.celsiusMin
                                :
                                units?.farenheitMin
                            }
                        </span>
                        <span>  T.max⬆
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
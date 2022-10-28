import React, { useEffect, useState } from 'react'
import WeekForecast from './WeekForecast'
import calcWindDirection from './helpers/calcWindDirection'
import { TransparentBTN } from '../UI/Buttons'
import WeatherStyle from './WeatherStyle'

const Weather = () => {
	const [weather, setWeather] = useState()
	const [icon, setIcon] = useState('01d')
	const [latitude, setLatitude] = useState('45.5152')
	const [longitude, setLongitude] = useState('-122.6784')

	//Get weather data
	useEffect(() => {
		const fetchWeather = async () => {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
			)
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}

			const responseData = await response.json()
			setWeather(responseData)
			setIcon(responseData.weather[0].icon)
		}

		fetchWeather().catch((error) => {
			console.log('Oops, there was an error', error)
		})
	}, [latitude, longitude])

	//Find geo location,
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLatitude(position.coords.latitude)
			setLongitude(position.coords.longitude)
		})
	} else {
		console.log('No Geo Data Available, please allow location request.')
	}

	return (
		<WeatherStyle>
			<div className='row'>
				{weather && (
					<div className='col-3 today-details mt-4 pr-0 mb-5'>
						<header className='text-center mb-4'>
							<h4>Today's Weather</h4>
							<h4>{weather.name}</h4>
						</header>
						<div className='gray-line mx-auto' />
						<div className='text-center mt-2'>
							<img
								src={`http://openweathermap.org/img/wn/${icon}.png`}
								className='my-2'
								alt='weather icon'
							/>
							<h5 className='mb-0'>{Math.floor(weather.main.temp)} °F</h5>

							<p>
								{Math.floor(weather.main.temp_min.toString())} -{' '}
								{Math.floor(weather.main.temp_max.toString())} °F
							</p>
							<p className='mt-3'>humidity {weather.main.humidity}%</p>
							<div className=''>
								<p>
									Sunrise{' '}
									{new Date(weather.sys.sunrise * 1000)
										.toString()
										.slice(16, 21)}
								</p>
								<p>
									Sunset{' '}
									{new Date(weather.sys.sunset * 1000).toString().slice(16, 21)}
								</p>
							</div>
							<p>
								Wind {Math.floor(weather.wind.speed)}/mph{' '}
								{calcWindDirection(weather.wind.deg)}
							</p>
						</div>
						<div className='gray-line mx-auto mb-5' />
					</div>
				)}

				<div className='col-9 mt-2 pt-1'>
					<WeekForecast latitude={latitude} longitude={longitude} />
				</div>
				{/* <div className='gray-line mx-auto my-5' />
				<TransparentBTN onClick={backClickHandler} className='mx-auto'>
					Home
				</TransparentBTN> */}
			</div>
		</WeatherStyle>
	)
}

export default Weather

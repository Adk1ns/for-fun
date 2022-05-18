import React, { useEffect, useState } from 'react'
import WeekForecast from './WeekForecast'
import calcWindDirection from './helpers/calcWindDirection'
import { TransparentBTN } from '../UI/Buttons'

const Weather = ({ viewState, setViewState }) => {
	const [weather, setWeather] = useState()
	const [icon, setIcon] = useState('01d')
	const [latitude, setLatitude] = useState('45.2023')
	const [longitude, setLongitude] = useState('-123.9629')

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

	const backClickHandler = () => {
		setViewState('intro')
	}

	return (
		<div className='row'>
			{weather && (
				<div className='col-3 today-details mt-4'>
					<header className='text-center '>
						<h4>Today's Weather</h4>
						<h4>{weather.name}</h4>
					</header>
					<div className='gray-line mx-auto' />
					<div className='text-center'>
						<img
							src={`http://openweathermap.org/img/wn/${icon}.png`}
							className='my-2'
							alt='weather icon'
						/>
						<h5>{Math.floor(weather.main.temp)} °F</h5>

						<p>
							{weather.main.temp_min.toString().slice(0, 2)} -{' '}
							{weather.main.temp_max.toString().slice(0, 2)} °F
						</p>
						<p>humidity: {weather.main.humidity}%</p>
						<div>
							<p>
								Sunrise{' '}
								{new Date(weather.sys.sunrise * 1000).toString().slice(16, 21)}
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
				</div>
			)}

			<div className='col-9'>
				<WeekForecast latitude={latitude} longitude={longitude} />
			</div>
			<div className='gray-line mx-auto my-5' />
			<TransparentBTN onClick={backClickHandler} className='mx-auto'>
				Home
			</TransparentBTN>
		</div>
	)
}

export default Weather

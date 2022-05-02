import React, { useEffect, useState } from 'react'
import WeekDataRow from './WeekDataRow'
import guid from '../Utility/guid'

const WeekForecast = ({ latitude, longitude }) => {
	const [forecast, setForecast] = useState()

	useEffect(() => {
		const weekCast = async () => {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&cnt=5&appid=${process.env.REACT_APP_WEATHER_KEY}`
			)
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}
			const weekForcastData = await response.json()
			setForecast(weekForcastData)
		}

		weekCast().catch((error) => {
			console.log('Oops, there was an error', error)
		})
	}, [latitude])
	// if (forecast) {
	// 	console.log(forecast)
	// }

	return (
		<div className='col'>
			{forecast &&
				forecast.daily
					.slice(1, 8)
					.map((data) => <WeekDataRow data={data} key={guid()} />)}
		</div>
	)
}

export default WeekForecast

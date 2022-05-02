import React, { useState, useEffect } from 'react'
import calcWindDirection from '../Utility/calcWindDirection'
import calcMoonPhase from '../Utility/calcMoonPhase'

const WeekDataRow = ({ data }) => {
	const [dropdown, setDropdown] = useState(false)
	const [moonName, setMoonName] = useState('')
	const [windDirection, setWindDirection] = useState(data.wind_deg)

	const dropdownClickHandler = () => {
		setDropdown((prev) => !prev)
	}

	useEffect(() => {
		setMoonName(calcMoonPhase(data.moon_phase))
		setWindDirection(calcWindDirection(data.wind_deg))
	}, [])

	return (
		<div className='border-bottom py-1'>
			<div className='d-flex justify-content-between align-items-center'>
				<div>
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
					/>
					{new Date(data.sunrise * 1000).toString().slice(0, 10)}
				</div>
				<div>{data.weather[0].description}</div>
				<div>
					{Math.floor(data.temp.min)} - {Math.floor(data.temp.max)} °F
				</div>
				<div>
					<button onClick={dropdownClickHandler}>Details</button>
				</div>
			</div>
			{dropdown && (
				<div className='d-flex justify-content-between text-center'>
					<div>
						<h5>Sun</h5>
						<p>UV {data.uvi}</p>
						<p>
							sunrise {new Date(data.sunrise * 1000).toString().slice(15, 21)}{' '}
						</p>
						<p>
							Sunset {new Date(data.sunset * 1000).toString().slice(15, 21)}
						</p>
					</div>
					<div>
						<h5>Moon</h5>
						<p>{moonName}</p>
						<p>
							Moonrise {new Date(data.moonrise * 1000).toString().slice(15, 21)}
						</p>
						<p>
							Moonset {new Date(data.moonset * 1000).toString().slice(15, 21)}
						</p>
					</div>
					<div>
						<h5>Wind</h5>
						<p>{windDirection}</p>
						<p>
							{Math.floor(data.wind_speed)} - {Math.floor(data.wind_gust)} mph
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default WeekDataRow

import React, { useState, useEffect } from 'react'
import calcWindDirection from './helpers/calcWindDirection'
import calcMoonPhase from './helpers/calcMoonPhase'
import { TransparentBTN } from '../UI/Buttons'
import { motion, AnimatePresence } from 'framer-motion'
import guid from '../Utility/guid'

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
	}, [data.moon_phase, data.wind_deg])

	return (
		<div className='py-1'>
			<div className='d-flex justify-content-between align-items-center'>
				<div>
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
						alt='weather icon'
					/>
					{new Date(data.sunrise * 1000).toString().slice(0, 10)}
				</div>
				<div>{data.weather[0].description}</div>
				<div>
					{Math.floor(data.temp.min)} - {Math.floor(data.temp.max)} °F
				</div>
				<div>
					<TransparentBTN onClick={dropdownClickHandler}>
						Details
					</TransparentBTN>
				</div>
			</div>
			<AnimatePresence>
				{dropdown && (
					<motion.div
						className='d-flex justify-content-between text-center dropdown-weather'
						key={guid()}
						initial={{ opacity: 0, y: -25 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
						exit={{ opacity: 0, y: -25 }}>
						<div>
							<h5 className='mb-0 mt-2'>Sun</h5>
							<p className='mb-0'>UV {data.uvi}</p>
							<p className='mb-0'>
								sunrise {new Date(data.sunrise * 1000).toString().slice(15, 21)}{' '}
							</p>
							<p>
								Sunset {new Date(data.sunset * 1000).toString().slice(15, 21)}
							</p>
						</div>
						<div>
							<h5 className='mb-0 mt-2'>Moon</h5>
							<p className='mb-0'>{moonName}</p>
							<p className='mb-0'>
								Moonrise{' '}
								{new Date(data.moonrise * 1000).toString().slice(15, 21)}
							</p>
							<p>
								Moonset {new Date(data.moonset * 1000).toString().slice(15, 21)}
							</p>
						</div>
						<div>
							<h5 className='mb-0 mt-2'>Wind</h5>
							<p className='mb-0'>{windDirection}</p>
							<p>
								{Math.floor(data.wind_speed)} - {Math.floor(data.wind_gust)} mph
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className='gray-line mx-auto' />
		</div>
	)
}

export default WeekDataRow

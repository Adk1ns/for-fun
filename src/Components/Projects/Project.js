import React from 'react'
import { useState } from 'react'

const Project = ({ name, subHeader, image, alternativeText }) => {
	const [textDisplay, setTextDispaly] = useState(false)

	function clickHandler() {
		setTextDispaly(!textDisplay)
	}
	console.log(name, subHeader, image)
	return (
		<div className='project-card my-3' onClick={clickHandler}>
			{textDisplay && (
				<>
					<h1>{name}</h1>
					<h3>{subHeader}</h3>
					<img src={image} alt={alternativeText} className='darken' />
				</>
			)}
			{!textDisplay && (
				<>
					<img src={image} alt={alternativeText} />
				</>
			)}
		</div>
	)
}

export default Project

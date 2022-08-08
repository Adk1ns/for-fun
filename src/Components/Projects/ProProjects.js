import React from 'react'
import bt from '../../Images/newSideNav.png'
import colorApp from '../../Images/colorApp.png'

const ProProjects = () => {
	return (
		<div className='col'>
			<h1 className='headline-style-sub text-center'>Pro Projects</h1>
			<div className='row mt-5 '>
				<div className='col-lg-6 d-flex justify-content-around my-lg-1 my-md-3'>
					<img src={bt} className='bt-image' />
				</div>
				<div className='col-lg-6 d-flex justify-content-around my-lg-1 my-md-3'>
					<img src={colorApp} className='colorApp-image' />
				</div>
			</div>
		</div>
	)
}

export default ProProjects

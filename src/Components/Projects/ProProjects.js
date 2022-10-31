import React from 'react'
import bt from '../../Images/newSideNav.png'
import colorApp from '../../Images/colorApp.png'
import NikeSeoul from '../../Images/nikeSeoul.png'
import dgtl from '../../Images/dgtl.png'
import Project from './Project'

const ProProjects = () => {

	return (
		<div className='col'>
			<h1 className='headline-style-sub text-center mt-4'>Pro Projects</h1>
			{/* <div className='row mt-5 '>
				<div className='col-lg-6 d-flex justify-content-around my-lg-1 my-md-3'>
					<img src={bt} className='bt-image' alt='Better Together' />
				</div>
				<div className='col-lg-6 d-flex justify-content-around my-lg-1 my-md-3'>
					<img
						src={colorApp}
						className='colorApp-image'
						alt='Color Picker App'
					/>
				</div>
			</div>
			<div className='row mt-5 '>
				<div className='col-lg-6 d-flex justify-content-around my-lg-1 my-md-3'>
					<img src={dgtl} className='bt-image' alt='dgtl website' />
				</div>
				<div className='col-lg-6 d-flex justify-content-around my-lg-1 my-md-3'>
					<img
						src={NikeSeoul}
						className='colorApp-image'
						alt='Nike Seoul ribbon ticker'
					/>
				</div>
			</div> */}
			<div className='d-flex justify-content-around flex-wrap'>
				<Project name='Ribbon Ticker' subHeader='Interactive displays by DGTL' image={NikeSeoul} alternativeText='Nike ribbon' />
				<Project name='Color Picker App' subHeader='Create color swatches for projects' image={colorApp} alternativeText='Color picker app' />
				<Project name='Better Together' subHeader='Success management platform' image={bt} alternativeText='Better Together' />
				<Project name='DGTL' subHeader='Interactive digital solutions' image={dgtl} alternativeText='DGTL' />
			</div>
		</div>
	)
}

export default ProProjects

import React from 'react'
import Weather from '../Weather/Weather'
import SideBarStyle from './SideBarStyle'
import profile from '../../Images/profile.jpg'
import trees from '../../Images/trees.png'

const Sidebar = ({ viewState, setViewState }) => {
	const clickHandler = () => {
		setViewState('weather')
	}
	const dictionaryClickHandler = () => {
		setViewState('dictionary')
	}
	const colorClickHandler = () => {
		setViewState('weather')
	}

	return (
		<SideBarStyle className='text-center'>
			<div className='d-flex justify-content-center'>
				{/* <img
					src={profile}
					alt='profile picture'
					className='profile-picture box-shadow mt-4'
				/> */}
			</div>
			<div className='mt-3 text-navy'>
				<h4>About</h4>
				<p className='px-3 text-dark-gray'>
					Web Engineer Lorem ipsum dolar blah durp dee doo habla dabla hole
					cheetos good gravy super pineapple junk food for lettuce after pigs
					and goats. Premium farts under a coconut while donuts.
				</p>
				<a
					href='https://github.com/Adk1ns'
					target='_blank'
					rel='noopener noreferrer'
					className='links'>
					GitHub
				</a>
				<a
					href='https://www.linkedin.com/in/jered-adkins-886457112/'
					target='_blank'
					rel='noopener noreferrer'
					className='links'>
					LinkedIn
				</a>
				<h4 className='mt-4'>Mini Projects</h4>
				<div className='text-dark-gray mini-projects'>
					<p onClick={clickHandler} className='sidebar-btn'>
						Weather
					</p>
					<p onClick={dictionaryClickHandler} className='sidebar-btn'>
						Dictionary
					</p>
					<p>Color Tools (coming soon!)</p>
				</div>
			</div>
		</SideBarStyle>
	)
}

export default Sidebar

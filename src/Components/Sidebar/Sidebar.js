import React from 'react'
import Weather from '../Weather/Weather'
import SideBarStyle from './SideBarStyle'
import profile from '../../Images/profile.jpg'

const Sidebar = () => {
	return (
		<SideBarStyle className='text-center box-shadow'>
			<h1>SideBar</h1>
			<div className='d-flex justify-content-center'>
				<img
					src={profile}
					alt='profile picture'
					className='profile-picture box-shadow'
				/>
			</div>
			<div>
				<p>Jered Adk1ns</p>
				<h4>About</h4>
				<p className='px-3'>
					This project is a living compilation of developer tools, resources,
					and small projects built by Jered Adkins.
				</p>
				<p className='px-3'>
					Lorem ipsum dolar blah durp dee doo habla dabla hole cheetos good
					gravy super pineapple junk food for lettuce after pigs and goats.
					Premium farts under a coconut while donuts.
				</p>
			</div>
		</SideBarStyle>
	)
}

export default Sidebar

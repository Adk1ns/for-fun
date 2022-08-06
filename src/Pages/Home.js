import React, { useState } from 'react'
import Dictionary from '../Components/Dictionary/Dictionary'
import About from '../Components/Home/About'
import Adk1ns from '../Components/Home/Adk1ns'
import Contact from '../Components/Home/Contact'
import Projects from '../Components/Home/Projects'
import Sidebar from '../Components/Sidebar/Sidebar'
import Weather from '../Components/Weather/Weather'
import mac from '../Images/mac.jpg'
import planning from '../Images/planning.png'
import HomeStyles from './HomeStyles'

const Home = () => {
	const [viewState, setViewState] = useState('About')

	function clickHandler(view) {
		setViewState(view)
	}

	return (
		<HomeStyles className='col'>
			<div className='row'>
				<div className='col-12 mt-3'>
					<div className='m-4 text-center'>
						<div className='row pb-5'>
							<div className='col-9 mt-5 text-left font-weight-bold'>
								<h1>Professional web solutions done right.</h1>
							</div>
							<div className='col-3 d-flex justify-content-center'></div>
						</div>

						<div className='gray-line' />

						<div className='row mt-5 pb-5'>
							<div className='col-7 mt-5'>
								<button
									className='display-btn mx-4'
									onClick={() => clickHandler('About')}>
									About
								</button>
								{/* <button
									className='display-btn mx-4'
									onClick={() => clickHandler('Projects')}>
									Projects
								</button> */}
								<button
									className='display-btn mx-4'
									onClick={() => clickHandler('Adk1ns')}>
									Adk1ns
								</button>
								<button
									className='display-btn mx-4'
									onClick={() => clickHandler('Contact')}>
									Contact
								</button>
								<div className='p-4 mt-4'>
									{viewState == 'About' && <About />}
									{viewState == 'Projects' && <Projects />}
									{viewState == 'Contact' && <Contact />}
									{viewState == 'Adk1ns' && <Adk1ns />}
								</div>
							</div>
							<div className='col-4 text-left'>
								<h1>Dream</h1>
								<h1>Plan</h1>
								<h1>Create</h1>
							</div>
						</div>

						<div className='gray-line' />
						{/* <h1 className='text-center mt-5'>
								<em>Super Empowering Quote</em> - Mr. Dude
							</h1> */}
					</div>
				</div>
			</div>
		</HomeStyles>
	)
}

export default Home

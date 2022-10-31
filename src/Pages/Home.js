import React, { useState } from 'react'
import About from '../Components/Home/About'
import Adk1ns from '../Components/Home/Adk1ns'
import Contact from '../Components/Home/Contact'
import HomeStyles from './HomeStyles'
import { motion } from 'framer-motion'

const Home = () => {
	const [viewState, setViewState] = useState('About')

	function clickHandler(view) {
		setViewState(view)
	}

	return (
		<HomeStyles className='col'>
			<div className='row'>
				<div className='col mt-3'>
					<div className='m-4 text-center'>
						<div className='row pb-5'>
							<div className='col-md-9 col-sm-12 mt-5 text-left font-weight-bold'>
								<h1>Professional web solutions done right.</h1>
							</div>
							<div className='col-3 d-flex justify-content-center'></div>
						</div>

						<div className='gray-line' />

						<div className='row mt-5 pb-5'>
							<div className='col-lg-7 col-md-12 mt-5'>
								<button
									className='display-btn mx-4'
									onClick={() => clickHandler('About')}>
									About
								</button>
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
								<div className='p-0 mt-4'>
									{viewState === 'About' && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.5 }}>
											<About />
										</motion.div>
									)}
									{viewState === 'Contact' && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.5 }}>
											<Contact />
										</motion.div>
									)}
									{viewState === 'Adk1ns' && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.5 }}>
											<Adk1ns />
										</motion.div>
									)}
								</div>
							</div>
							<div className='col-4 text-left'>
								<h1>Dream</h1>
								<h1>Plan</h1>
								<h1>Create.</h1>
							</div>
						</div>

						{/* <div className='gray-line' /> */}
					</div>
				</div>
			</div>
		</HomeStyles>
	)
}

export default Home

import React from 'react'
import Dictionary from '../Components/Dictionary/Dictionary'
import Sidebar from '../Components/Sidebar/Sidebar'
import Weather from '../Components/Weather/Weather'

const Home = () => {
	return (
		<div className='col'>
			<div className='row'>
				<div className='col-2'>
					<Sidebar />
				</div>
				<div className='col-10 '>
					<div className='m-5'>
						<h2>Professionally Built Web Apps</h2>
						<div className='row mx-auto'>
							<div className='col-6'>
								<p>yadda bladda</p>
							</div>
							<div className='col-6'>
								<p>A picture of something jazzy</p>
							</div>
						</div>
						<p className='text-center'>
							<em>Super Empowering Quote</em> - Mr. Dude
						</p>
						<div className='row mx-auto'>
							<div className='col-6'>
								<p>another fuckin cool pic</p>
							</div>
							<div className='col-6'>
								<p>yerdda berdda</p>
							</div>
						</div>
						<p className='text-center'>
							<em>Super Empowering Quote</em> - Mr. Dude
						</p>
					</div>
					<div className='my-5'>
						<Weather />
					</div>
					<div className='my-5'>
						<Dictionary />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

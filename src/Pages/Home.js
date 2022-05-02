import React from 'react'
import Dictionary from '../Components/Dictionary/Dictionary'
import Sidebar from '../Components/Sidebar/Sidebar'
import Weather from '../Components/Weather/Weather'

const Home = () => {
	return (
		<div className='col'>
			<div className='row'>
				<div className='col-3'>
					<Sidebar />
				</div>
				<div className='col-9'>
					Home
					<div className='my-5'>
						<Dictionary />
					</div>
					<div className='my-5'>
						<Weather />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

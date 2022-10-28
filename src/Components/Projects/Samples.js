import React from 'react'
import Dictionary from '../../Components/Dictionary/Dictionary'
import Inspiration from '../../Components/Inspiration/Inspiration'
import Weather from '../../Components/Weather/Weather'
import ProProjects from './ProProjects'

const Samples = () => {
	return (
		<div className='p-3 mb-5'>
			{/* <h1 className='mt-3 text-center headline-style-sub'>API Fun</h1> */}
			<div className='row mt-5'>
				<div className='col-lg-6'>
					<h1 className='headline-style'>Dictionary</h1>
				</div>
				<div className='col-lg-6'>
					<Dictionary />
				</div>
			</div>

			<div className='gray-line mt-5' />

			<div className='row mt-5'>
				<div className='col-lg-6 mt-5'>
					<Inspiration />
				</div>
				<div className='col-lg-6'>
					<h1 className='headline-style'>Inspiration</h1>
				</div>
			</div>

			<div className='gray-line mt-5' />

			<div className='row mt-2 pr-5'>
				<div className='col-lg-6 text-right'>
					<h1 className='headline-style'>Weather</h1>
					<h1 className='headline-style'>Data</h1>
					<h1 className='headline-style'>API</h1>
				</div>

				<div className='col-lg-6 mt-5 pl-4'>
					<Weather />
				</div>
			</div>

			<div className='gray-line mt-5' />

			<ProProjects />
		</div>
	)
}

export default Samples

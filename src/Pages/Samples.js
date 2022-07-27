import React from 'react'
import Dictionary from '../Components/Dictionary/Dictionary'
import Inspiration from '../Components/Inspiration/Inspiration'
import Weather from '../Components/Weather/Weather'

const Samples = () => {
	return (
		<div className='p-3'>
			<div className='row mt-2 pr-5'>
				<div className='col-6 mt-5 pl-4'>
					<Weather />
				</div>
				<div className='col-6 text-right'>
					<h1 className='headline-style'>Weather</h1>
					<h1 className='headline-style'>Data</h1>
					<h1 className='headline-style'>API</h1>
				</div>
			</div>

			<div className='gray-line mt-5' />

			<div className='row mt-5'>
				<div className='col-6'>
					<h1 className='headline-style'>Dictionary</h1>
				</div>
				<div className='col-6'>
					<Dictionary />
				</div>
			</div>

			<div className='gray-line mt-5' />

			<div className='row mt-5'>
				<div className='col-6 mt-5'>
					<Inspiration />
				</div>
				<div className='col-6'>
					<h1 className='headline-style'>Inspiration</h1>
				</div>
			</div>
		</div>
	)
}

export default Samples

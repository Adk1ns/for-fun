import React, { useState } from 'react'
import Dictionary from '../Components/Dictionary/Dictionary'
import Sidebar from '../Components/Sidebar/Sidebar'
import Weather from '../Components/Weather/Weather'
import mac from '../Images/mac.jpg'
import planning from '../Images/planning.png'
import HomeStyles from './HomeStyles'

const Home = () => {
	const [viewState, setViewState] = useState('intro')

	return (
		<HomeStyles className='col'>
			<div className='row'>
				<div className='col-2'>
					<Sidebar viewState={viewState} setViewState={setViewState} />
				</div>
				<div className='col-10 mt-3'>
					{viewState === 'intro' && (
						<div className='m-4 text-center'>
							<div className='row pb-5'>
								<div className='col-6 mt-5'>
									<h2>Javascript Solutions</h2>
									<p className='mt-5 text-gray'>
										Hamburger pork loin ground round tenderloin chislic, strip
										steak ribeye pork belly biltong tri-tip capicola. Swine
										leberkas landjaeger, ham hock meatball tri-tip andouille
										tenderloin doner. Tail kevin kielbasa pork, beef beef ribs
										cupim ham pig tongue. Short ribs sausage porchetta pork
										belly shankle turkey fatback.
									</p>
								</div>
								<div className='col-6 d-flex justify-content-center'>
									<img
										src={mac}
										alt='laptop picture'
										className='img-home box-shadow-dark'
									/>
								</div>
							</div>
							<div className='gray-line' />
							<div className='row mt-5 pb-5'>
								<div className='col-6'>
									<img
										src={planning}
										alt='laptop picture'
										className='img-home box-shadow-dark'
									/>
								</div>
								<div className='col-6 mt-5'>
									<h2>Professionally Built Apps</h2>
									<p className='mt-5 text-gray'>
										Hire an engineer trained in the latest Javascript libraries,
										frameworks, and web app technologies. With training in
										React, Apollo/ GraphQL, Styled Components, Fire Base, and
										more.
									</p>
								</div>
							</div>
							<div className='gray-line' />
							<p className='text-center mt-5'>
								<em>Super Empowering Quote</em> - Mr. Dude
							</p>
						</div>
					)}
					{viewState === 'weather' && (
						<div className='my-5'>
							<Weather viewState={viewState} setViewState={setViewState} />
						</div>
					)}
					{viewState === 'dictionary' && (
						<div className='my-5'>
							<Dictionary viewState={viewState} setViewState={setViewState} />
						</div>
					)}
				</div>
			</div>
		</HomeStyles>
	)
}

export default Home

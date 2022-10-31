import React from 'react'
import HomeStyles from '../../Pages/HomeStyles'
import trees from '../../Images/trees.png'

const About = () => {
	return (
		<HomeStyles>
			<div className='display-info px-4 pt-4 pb-4'>
				<h4 className='mt-4 px-4'>
					High quality apps, web pages, games and digital experiences built with
					the latest JavaScript technology and frameworks. Whether you building
					your new dream or adding to an existing project, hire a top notch
					developer.
				</h4>
				<div className='row'>
					<div className='col-3' />
					<div className='col-9'>
						{/* <h4 className='mt-2'>Tools I commonly use:</h4> */}
						{/* <h4 className=' mt-5'>
							JavaScript|| CSS || React || Bootstrap || GraphQL || FireBase ||
							GitHub || Jira || Linux & iOS || NPM || Nodejs || and More!
						</h4> */}
					</div>
				</div>
				<img src={trees} alt='trees' className='trees' />
			</div>
		</HomeStyles>
	)
}

export default About

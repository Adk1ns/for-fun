import React from 'react'
import HomeStyles from '../../Pages/HomeStyles'
import trees from '../../Images/trees.png'

const Contact = () => {
	return (
		<HomeStyles>
			<div className='display-info pt-4'>
				<h2 className='mb-3'>Contact info</h2>
				<h6 className='contact-info mb-3'>Jeredkins@gmail.com</h6>
				<h6 className='mb-3'>
					<a
						className='contact-info'
						href='https://github.com/Adk1ns'
						target='_blank'
						rel="noreferrer">
						GitHub
					</a>
				</h6>
				<h6 className='mb-3'>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/jered-adkins-886457112'
						className='contact-info'
						rel="noreferrer">
						Linkedin
					</a>
				</h6>
				<h6>
					<a
						target='_blank'
						className='contact-info'
						href='https://www.instagram.com/jayadkin/'
						rel="noreferrer">
						Instagram
					</a>
				</h6>
				<img src={trees} alt='trees' className='trees' />
				{/* <div className='row my-5 d-block d-sm-none' /> */}
			</div>
		</HomeStyles>
	)
}

export default Contact

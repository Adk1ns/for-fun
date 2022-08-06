import React from 'react'
import HomeStyles from '../../Pages/HomeStyles'
import trees from '../../Images/trees.png'

const Contact = () => {
	return (
		<HomeStyles>
			<div className='display-info p-4 '>
				<h3 className='mb-3'>Contact info:</h3>{' '}
				<h6 className='contact-info mb-3'>Jeredkins@gmail.com</h6>
				<h6 className='mb-3'>
					<a
						className='contact-info'
						href='https://github.com/Adk1ns'
						target='_blank'>
						GitHub
					</a>
				</h6>
				<h6 className='mb-3'>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/jered-adkins-886457112'
						className='contact-info'>
						Linkedin
					</a>
				</h6>
				<h6>
					<a
						target='_blank'
						className='contact-info'
						href='https://www.instagram.com/jayadkin/'>
						Instagram
					</a>
				</h6>
				<img src={trees} alt='trees' className='trees' />
			</div>
		</HomeStyles>
	)
}

export default Contact

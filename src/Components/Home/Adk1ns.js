import React from 'react'
import HomeStyles from '../../Pages/HomeStyles'
import passport from '../../Images/passport.jpg'

const Adk1ns = () => {
	return (
		<HomeStyles>
			<div className='display-info'>
				<h4>About the Dev</h4>
				<h4 className='my-3'>My name is Jered and I build web apps : )</h4>
				<h5>lorem ipsum</h5>
				<img src={passport} alt='picture' className='passport-pic' />
			</div>
		</HomeStyles>
	)
}

export default Adk1ns

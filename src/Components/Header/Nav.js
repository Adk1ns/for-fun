import React from 'react'
import { Link } from 'react-router-dom'
import NavStyle from './NavStyle'
import trees from '../../Images/trees.png'

const Nav = () => {
	return (
		<NavStyle>
			<div className='container-birds'>
				<div className='bird-container bird-container--one'>
					<div className='bird bird--one'></div>
				</div>

				<div className='bird-container bird-container--two'>
					<div className='bird bird--two'></div>
				</div>

				<div className='bird-container bird-container--three'>
					<div className='bird bird--three'></div>
				</div>

				<div className='bird-container bird-container-2 bird-container--four'>
					<div className='bird bird--four'></div>
				</div>
			</div>
			<nav className='d-flex justify-content-between border-bottom'>
				<h1 className='pt-1 nav-header'></h1>
				<img src={trees} alt='trees' className='trees' />
				<div className='pt-5 mt-4'>
					<Link to='/' className='p-2 link-nav'>
						About
					</Link>
					<Link to='/Resources' className='p-2 link-nav'>
						Resources
					</Link>
					<Link to='/ColorTools' className='p-2 link-nav'>
						Color Tools
					</Link>

					{/* <Link to='/Login' className='p-2 link-nav'>
						Log In
					</Link> */}
				</div>
			</nav>
		</NavStyle>
	)
}

export default Nav

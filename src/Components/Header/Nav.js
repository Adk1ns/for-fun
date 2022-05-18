import React from 'react'
import { Link } from 'react-router-dom'
import NavStyle from './NavStyle'
import trees from '../../Images/trees.png'

const Nav = () => {
	return (
		<NavStyle>
			<div class='container-birds'>
				<div class='bird-container bird-container--one'>
					<div class='bird bird--one'></div>
				</div>

				<div class='bird-container bird-container--two'>
					<div class='bird bird--two'></div>
				</div>

				<div class='bird-container bird-container--three'>
					<div class='bird bird--three'></div>
				</div>

				<div class='bird-container bird-container-2 bird-container--four'>
					<div class='bird bird--four'></div>
				</div>
			</div>
			<nav className='d-flex justify-content-between border-bottom box-shadow'>
				<h1 className='pt-1 nav-header'>Adk1ns.com</h1>
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

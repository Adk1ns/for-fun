import React from 'react'
import { Link } from 'react-router-dom'
import NavStyle from './NavStyle'

const Nav = () => {
	return (
		<NavStyle>
			<nav className='d-flex justify-content-between px-3'>
				<h1 className='pt-5 nav-header'>Adk1ns.com</h1>
				<div className='pt-5 mt-1'>
					<Link to='/' className='p-2 link-nav'>
						Main
					</Link>
					<Link to='/Samples' className='p-2 link-nav'>
						Projects
					</Link>
					{/* <Link to='/ColorTools' className='p-2 link-nav'>
						Tools
					</Link> */}

					{/* <Link to='/Login' className='p-2 link-nav'>
						Log In
					</Link> */}
				</div>
			</nav>
		</NavStyle>
	)
}

export default Nav

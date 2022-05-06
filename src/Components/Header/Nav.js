import React from 'react'
import { Link } from 'react-router-dom'
import NavStyle from './NavStyle'

const Nav = () => {
	return (
		<NavStyle>
			<nav className='p-3 d-flex justify-content-between border-bottom'>
				<h1 className='mx-4 nav-header'>ADK1NS</h1>
				<div className='pt-4'>
					<Link to='/' className='p-2 link-nav'>
						About
					</Link>
					<Link to='/Resources' className='p-2 link-nav'>
						Resources
					</Link>
					<Link to='/ColorTools' className='p-2 link-nav'>
						Color Tools
					</Link>
					<Link to='/Login' className='p-2 link-nav'>
						Log In
					</Link>
				</div>
			</nav>
		</NavStyle>
	)
}

export default Nav

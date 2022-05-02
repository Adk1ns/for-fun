import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div>
			<nav className='p-3 d-flex justify-content-between border-bottom'>
				<h1>EXP</h1>
				<div className='pt-4'>
					<Link to='/' className='p-2'>
						Home
					</Link>
					<Link to='/Blog' className='p-2'>
						Blog
					</Link>
					<Link to='/Colors' className='p-2'>
						Color Tools
					</Link>
					<Link to='/Docs' className='p-2'>
						Docs
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default Nav

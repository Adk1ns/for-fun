import styled from 'styled-components'

const NavStyle = styled.div`
	background-color: black;
	${
		'' /* position: -webkit-sticky;
	position: sticky;
	top: 0;
	left: 0; */
	}

	.link-nav {
		color: white;
		font-size: 1.4em;
		font-weight: bold;
		position: relative;
		top: 0.5rem;
		&:hover {
			color: #f77956;
			text-decoration: none;
		}
	}

	.nav-header {
		color: white;
		letter-spacing: -0.2rem;
	}
`

export default NavStyle

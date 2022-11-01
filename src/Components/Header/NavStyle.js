import styled from 'styled-components'

const NavStyle = styled.div`
	background-color: black;
	width: 100%;

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
		@media screen and (max-width: 400px) {
			font-size: 1.2em;
		}
	}

	.nav-header {
		color: white;
		letter-spacing: -0.2rem;
		@media screen and (max-width: 400px) {
			font-size: 2.2em;
		}
	}

	@media screen and (max-width: 350px) {
		.link-nav {
			font-size: 1em;
		}
		.nav-header {
			letter-spacing: -0.2rem;
			@media screen and (max-width: 400px) {
				font-size: 1.8em;
			}
		}
	}
`

export default NavStyle

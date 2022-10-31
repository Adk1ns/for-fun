import styled from 'styled-components'

const GlobalStyles = styled.div`
	.headline-style {
		color: white;
		font-size: 10.5em;
		text-decoration: underline;
		text-decoration-color: black;
		letter-spacing: -0.85rem;
	}
	.headline-style-sub {
		color: white;
		font-size: 5.5em;
		text-decoration: underline;
		text-decoration-color: black;
		letter-spacing: -0.45rem;
	}

	.border-bottom {
		border-bottom: 1px solid darkgray;
	}

	.box-shadow {
		box-shadow: 3px 8px 20px lightgray;
	}

	.box-shadow-dark {
		box-shadow: 3px 8px 20px darkgray;
	}

	.gray-line {
		background-color: #c5c3c6;
		height: 2px;
		width: 100%;
	}

	.text-gray {
		color: #8b9898;
	}

	.text-dark-gray {
		color: #46494c;
	}

	.text-navy {
		color: #4c5c68;
	}
	@media screen and (max-width: 1400px) {
		.headline-style {
			font-size: 8.25em;
			letter-spacing: -0.65rem;
		}
	}
	@media screen and (max-width: 1246px) {
		.headline-style {
			font-size: 8.25em;
			letter-spacing: -0.65rem;
		}
	}
	@media screen and (max-width: 1100px) {
		.headline-style {
			font-size: 7.25em;
			letter-spacing: -0.65rem;
		}
	}
	@media screen and (max-width: 850px) {
		.headline-style {
			font-size: 9em;
			letter-spacing: -0.65rem;
		}
	}
	@media screen and (max-width: 750px) {
		.headline-style {
			font-size: 8em;
			letter-spacing: -0.55rem;
		}
	}
	@media screen and (max-width: 670px) {
		.headline-style {
			font-size: 4.5em;
			letter-spacing: -0.4rem;
		}
	}
	${'' /* @media screen and (min-width: 991px) and (max-width: 1100px) {
		h1 {
			font-size: 3em;
			letter-spacing: -0.65rem;
		}
	} */}
`

export default GlobalStyles

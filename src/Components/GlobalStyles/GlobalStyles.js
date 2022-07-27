import styled from 'styled-components'

const GlobalStyles = styled.div`
	.headline-style {
		color: white;
		font-size: 10.5em;
		text-decoration: underline;
		text-decoration-color: black;
		letter-spacing: -0.85rem;
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
`

export default GlobalStyles

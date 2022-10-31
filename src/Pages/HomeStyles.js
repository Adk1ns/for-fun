import styled from 'styled-components'

const HomeStyles = styled.div`
	h1 {
		color: white;
		font-size: 10.2em;
		text-decoration: underline;
		text-decoration-color: black;
		letter-spacing: -0.85rem;
	}

	h4 {
		letter-spacing: -0.07rem;
	}
	.img-home {
		width: 80%;
		border-radius: 5%;
	}
	.contact-info {
		color: black;
		font-size: 1.75em;
	}
	.display-info {
		background-color: rgba(255, 255, 255, 0.9);
		border: solid black 0.5rem;
		border-radius: 1rem;
		min-height: 20rem;
		position: relative;
	}
	.display-btn {
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		border: solid black 0.25rem;
		background-color: white;
		font-weight: bold;
		font-size: 1.35em;
		letter-spacing: -0.05rem;
		cursor: pointer;
		&:hover {
			color: #f77956;
		}
	}
	.passport-pic {
		border-radius: 100%;
		width: 6rem;
		position: absolute;
		left: 5%;
		bottom: 10%;
		cursor: pointer;
		@media screen and (max-width: 1080px) and (min-width: 991px) {
			width: 4rem;
			bottom: 2%;
		}
	}
	.forest-pic {
		border-radius: 100%;
		width: 6rem;
		position: absolute;
		right: 5%;
		bottom: 10%;
		cursor: pointer;
		@media screen and (max-width: 1080px) and (min-width: 991px) {
			width: 4rem;
			bottom: 2%;
		}
	}

	.trees {
		width: 13rem;
		position: absolute;
		left: -0.05%;
		bottom: -0.5%;
	}

	.arrow {
		font-size: 1em;
	}

	${'' /* changes on screen size ***************************************/}
	@media screen and (max-width: 1244px) {
	}
	@media screen and (max-width: 1226px) {
		h1 {
			font-size: 8.5em;
			letter-spacing: -0.65rem;
		}
	}
	@media screen and (max-width: 850px) {
		h1 {
			font-size: 9em;
			letter-spacing: -0.65rem;
		}
	}
	@media screen and (max-width: 750px) {
		h1 {
			font-size: 8em;
			letter-spacing: -0.55rem;
		}
	}
	@media screen and (max-width: 670px) {
		h1 {
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
	@media screen and (max-width: 574px) {
		.trees {
			display: none;
		}
	}
`

export default HomeStyles

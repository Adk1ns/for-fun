import styled from 'styled-components'

const HomeStyles = styled.div`
	h1 {
		color: white;
		font-size: 10.5em;
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
	.display-info {
		background-color: rgba(255, 255, 255, 0.9);
		border: solid black 0.5rem;
		border-radius: 1rem;
		min-height: 20rem;
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
	}
`

export default HomeStyles

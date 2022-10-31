import styled from 'styled-components'

const ProjectStyle = styled.div`
	.colorApp-image {
		width: 95%;
		border-radius: 0.75rem;
		border: 0.35rem solid black;
	}

	.bt-image {
		width: 95%;
		border-radius: 0.75rem;
		border: 0.35rem solid black;
	}

	.project-card {
		position: relative;
		width: 45%;
		border-radius: 0.75rem;
		border: 0.35rem solid black;
		background-color: black;
		cursor: pointer;
		&:hover {
			box-shadow: 2px 2px 2px black;
		}
		img {
			width: 100%;
		}
		h1 {
			position: absolute;
			top: 48%;
			left: 5%;
			font-weight: 700;
			font-size: 3.25em;
		}
		h3 {
			position: absolute;
			top: 70%;
			left: 5%;
		}
		h1,
		h3 {
			color: white;
			opacity: 100%;
		}
		.darken {
			opacity: 20%;
			background-color: black;
		}
	}
`

export default ProjectStyle

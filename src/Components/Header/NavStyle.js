import styled from 'styled-components'

const NavStyle = styled.div`
	background-color: #1985a1;

	.link-nav {
		color: black;
		font-size: 1.2em;
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
		position: absolute;
		top: 4rem;
		z-index: 999;
	}

	.trees {
		width: 20rem;
		height: 7rem;
		position: relative;
	}

	.container-birds {
		z-index: 2;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 20vh;
		background-blend-mode: soft-light;
		background-size: cover;
		background-position: center center;
	}

	.bird {
		background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
		background-size: auto 100%;
		width: 88px;
		height: 125px;
		will-change: background-position;
		animation-name: fly-cycle;
		animation-timing-function: steps(10);
		animation-iteration-count: infinite;

		&--one {
			animation-duration: 1s;
			animation-delay: 1s;
		}

		&--two {
			animation-duration: 0.9s;
			animation-delay: 1.75s;
		}

		&--three {
			animation-duration: 1.25s;
			animation-delay: 3.25s;
		}

		&--four {
			animation-duration: 1.1s;
			animation-delay: 100.5s;
		}
	}

	.bird-container {
		position: absolute;
		top: 20%;
		left: -10%;
		transform: scale(0) translateX(-10vw);
		will-change: transform;

		animation-name: fly-right-one;
		animation-timing-function: linear;
		animation-iteration-count: infinite;

		&--one {
			animation-duration: 15s;
			animation-delay: 0;
		}

		&--two {
			animation-duration: 16s;
			animation-delay: 18s;
		}

		&--three {
			animation-duration: 14.6s;
			animation-delay: 19.5s;
		}

		&--four {
			animation-duration: 16s;
			animation-delay: 100.25s;
		}
	}
	.bird-container-2 {
		animation-name: fly-right-two;
	}

	@keyframes fly-cycle {
		100% {
			background-position: -900px 0;
		}
	}

	@keyframes fly-right-one {
		0% {
			transform: scale(0.3) translateX(-1vw);
		}

		10% {
			transform: translateY(-1vh) translateX(10vw) scale(0.4);
		}

		20% {
			transform: translateY(-3vh) translateX(20vw) scale(0.5);
		}

		30% {
			transform: translateY(0vh) translateX(30vw) scale(0.6);
		}

		40% {
			transform: translateY(-4vh) translateX(40vw) scale(0.6);
		}

		50% {
			transform: translateY(-7vh) translateX(50vw) scale(0.6);
		}

		60% {
			transform: translateY(-5vh) translateX(60vw) scale(0.6);
		}
		70% {
			transform: translateY(-7vh) translateX(70vw) scale(0.6);
		}
		80% {
			transform: translateY(-20vh) translateX(80vw) scale(0.6);
		}

		100% {
			transform: translateY(-20vh) translateX(94vw) scale(0.6);
		}
	}

	@keyframes fly-right-two {
		0% {
			transform: translateY(-4vh) translateX(0vw) scale(0.5);
		}

		10% {
			transform: translateY(-4vh) translateX(0vw) scale(0.4);
		}

		20% {
			transform: translateY(-6vh) translateX(0vw) scale(0.6);
		}

		30% {
			transform: translateY(-2vh) translateX(10vw) scale(0.45);
		}

		40% {
			transform: translateY(0vh) translateX(20vw) scale(0.5);
		}

		50% {
			transform: translateY(-5vh) translateX(30vw) scale(0.45);
		}

		60% {
			transform: translateY(6vh) translateX(40vw) scale(0.45);
		}
		70% {
			transform: translateY(-2vh) translateX(50vw) scale(0.45);
		}
		80% {
			transform: translateY(-3vh) translateX(60vw) scale(0.45);
		}

		100% {
			transform: translateY(-15vh) translateX(94vw) scale(0.45);
		}
	}
`

export default NavStyle

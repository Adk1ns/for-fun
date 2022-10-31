import styled from 'styled-components'

const WeatherStyle = styled.div`
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 1rem;
	border: 5px solid black;
	font-size: 1.1em;
	.today-details {
		z-index: 1;
	}

	.weather-icon {
		width: 100%;
	}

	@media screen and (max-width: 575px) {
		font-size: 1em;
	}
`

export default WeatherStyle

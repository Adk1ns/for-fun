const calcWindDirection = (windDirection) => {
	if (windDirection <= 30 || windDirection >= 330) {
		return 'North'
	}
	if (windDirection > 30 && windDirection <= 60) {
		return 'North East'
	}
	if (windDirection > 60 && windDirection <= 120) {
		return 'East'
	}
	if (windDirection > 120 && windDirection <= 150) {
		return 'South East'
	}
	if (windDirection > 150 && windDirection <= 210) {
		return 'South'
	}
	if (windDirection > 210 && windDirection <= 240) {
		return 'South West'
	}
	if (windDirection > 240 && windDirection <= 300) {
		return 'West'
	}
	if (windDirection > 300 && windDirection <= 330) {
		return 'North West'
	}
}

export default calcWindDirection

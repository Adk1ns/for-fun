const calcMoonPhase = (moonPhase) => {
	if (moonPhase === 0 || moonPhase === 1) {
		return 'new Moon'
	}
	if (moonPhase > 0 && moonPhase < 0.25) {
		return 'Waxing Crescent'
	}
	if (moonPhase >= 0.25 && moonPhase < 0.5) {
		return 'Waxing Gibbous'
	}
	if (moonPhase === 0.5) {
		return 'full moon'
	}
	if (moonPhase > 0.5 && moonPhase < 0.75) {
		return 'Waning Gibbous'
	}
	if (moonPhase >= 0.75 && moonPhase < 1) {
		return 'Waning Crescent.'
	}
}

export default calcMoonPhase

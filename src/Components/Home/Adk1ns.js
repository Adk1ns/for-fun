import React, { useState } from 'react'
import HomeStyles from '../../Pages/HomeStyles'
import passport from '../../Images/passport.jpg'
import PhoneCall from '../../Images/PhoneCall.jpg'
import ForestPokemon from '../../Images/ForestPokemon.jpg'
import ForestTongue from '../../Images/ForestTongue.jpg'
import { motion } from 'framer-motion'

const Adk1ns = () => {
	const [jeredPicture, setJeredPicture] = useState(passport)
	const [forestPicture, setForestPicture] = useState(ForestPokemon)

	function clickHandlerJered() {
		if (jeredPicture === passport) {
			setJeredPicture(PhoneCall)
		} else {
			setJeredPicture(passport)
		}
	}
	function clickHandlerForest() {
		if (forestPicture === ForestPokemon) {
			setForestPicture(ForestTongue)
		} else {
			setForestPicture(ForestPokemon)
		}
	}

	return (
		<HomeStyles>
			<div className='display-info'>
				<h3 className='mt-3'>About the Dev</h3>
				<h3 className='my-3'>My name is Jered and I build web apps</h3>
				<h4 className='my-3'>When I am not at my desk...</h4>
				<h5>You can usually find me at the beach</h5>
				<h5>Making music in the garage</h5>
				<h5 className='d-none d-sm-block'>
					Or wresting this guy <span className='arrow'>&#8594;</span>
				</h5>
				<h5 className='d-block d-sm-none'>
					Or wresting this guy <span className='arrow'>&#8595;</span>
				</h5>
				<div className='d-flex justify-content-between mt-4'>
				{jeredPicture === passport && (
					<motion.div
						initial={{}}
						animate={{ '--rotate': '360deg' }}
						transition={{ duration: 1, repeat: 0 }}>
						<img
							style={{ transform: 'rotate(var(--rotate))' }}
							src={passport}
							alt='Jered the human'
							className='passport-pic'
							onClick={clickHandlerJered}
						/>
					</motion.div>
				)}{' '}
				{jeredPicture === PhoneCall && (
					<motion.div
						initial={{ '--rotate': '0deg' }}
						animate={{ '--rotate': '360deg' }}
						transition={{ duration: 1, repeat: 0 }}>
						<img
							style={{ transform: 'rotate(var(--rotate))' }}
							src={PhoneCall}
							alt='Jered the human'
							className='passport-pic'
							onClick={clickHandlerJered}
						/>
					</motion.div>
				)}
				{forestPicture === ForestPokemon && (
					<motion.div
						initial={{}}
						animate={{ '--rotate': '360deg' }}
						transition={{ duration: 1, repeat: 0 }}>
						<img
							style={{ transform: 'rotate(var(--rotate))' }}
							src={forestPicture}
							alt='Forest the dog'
							className='forest-pic'
							onClick={clickHandlerForest}
						/>
					</motion.div>
				)}{' '}
				{forestPicture === ForestTongue && (
					<motion.div
						initial={{ '--rotate': '0deg' }}
						animate={{ '--rotate': '360deg' }}
						transition={{ duration: 1, repeat: 0 }}>
						<img
							style={{ transform: 'rotate(var(--rotate))' }}
							src={forestPicture}
							alt='Forest the dog'
							className='forest-pic'
							onClick={clickHandlerForest}
						/>
					</motion.div>
				)}
				</div>
			</div>
		</HomeStyles>
	)
}

export default Adk1ns

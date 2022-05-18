import React, { useEffect, useState } from 'react'
import guid from '../Utility/guid'
import { motion, AnimatePresence } from 'framer-motion'
import DictionaryStyles from './DictionaryStyles'
import { TransparentBTN } from '../UI/Buttons'

const Dictionary = ({ viewState, setViewState }) => {
	const [searchWord, setSearchWord] = useState()
	const [queWord, setQueWord] = useState()
	const [wordData, setWordData] = useState()
	const [wordNotFound, setWordNotFound] = useState(false)

	useEffect(() => {
		if (searchWord) {
			const dictionarySearch = async () => {
				const response = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
				)
				if (!response.ok) {
					throw new Error('Something went wrong!')
				}
				const responseData = await response.json()
				setWordData(responseData)
				setWordNotFound(false)
			}
			dictionarySearch().catch((error) => {
				console.log('Oops, there was an error', error)
				setWordNotFound(true)
				setWordData(null)
			})
		}
	}, [searchWord])

	const searchHandler = (e) => {
		e.preventDefault()
		setSearchWord(queWord)
	}

	const setTypedWord = (e) => {
		setQueWord(e.target.value)
	}

	const backClickHandler = () => {
		setViewState('intro')
	}

	return (
		<DictionaryStyles className=''>
			<div className='row'>
				<div className='col-3 text-center mt-4'>
					<h5>Dictionary</h5>
					<form onSubmit={searchHandler} className='my-3'>
						<input
							type='text'
							placeholder='search'
							onChange={setTypedWord}
							className='search-input'
						/>
					</form>
					{wordData && (
						<h6>
							{' '}
							{searchWord} {wordData[0].phonetic}{' '}
						</h6>
					)}
				</div>

				<div className='col-9'>
					{wordNotFound && <p>Could not find search word.</p>}
					{wordData && (
						<div>
							{wordData[0].meanings.map((meaning, index) => (
								<div key={guid()}>
									<p>
										{index + 1} .){' '}
										<em className='mr-2'>{meaning.partOfSpeech}</em>{' '}
										{meaning.definitions[0].definition}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<div className='gray-line mx-auto my-5' />
			<div className='row'>
				<TransparentBTN onClick={backClickHandler} className='mx-auto'>
					Home
				</TransparentBTN>
			</div>
		</DictionaryStyles>
	)
}

export default Dictionary

import React, { useEffect, useState } from 'react'
import guid from '../Utility/guid'

const Dictionary = () => {
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

	return (
		<div className='d-flex justify-content-between'>
			<div className='col-3'>
				Dictionary
				<form onSubmit={searchHandler}>
					<input type='text' placeholder='search' onChange={setTypedWord} />
				</form>
				{wordData && (
					<p>
						{' '}
						{searchWord} {wordData[0].phonetic}{' '}
					</p>
				)}
			</div>
			<div className='col-9'>
				{wordNotFound && <p>Could not find search word.</p>}
				{wordData && (
					<div>
						{wordData[0].meanings.map((meaning, index) => (
							<div key={guid()}>
								<p>
									{index + 1} .) {meaning.partOfSpeech}{' '}
									{meaning.definitions[0].definition}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Dictionary

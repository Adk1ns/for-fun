import React, { useEffect, useState } from 'react'
import InspirationStyles from './InspirationStyles'
//https://api.quotable.io/random
//http://api.icndb.com/jokes/random

const Inspiration = () => {
	const [data, setData] = useState()

	useEffect(() => {
		const getInspired = async () => {
			const response = await fetch('https://api.quotable.io/random')
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}
			const responseData = await response.json()
			setData(responseData)
		}
		getInspired().catch((error) => {
			console.log('Oops, there was an error', error)
		})
	}, [])

	// const searchHandler = (e) => {
	// 	e.preventDefault()
	// }

	return (
		<InspirationStyles>
			{data && (
				<div className='p-4'>
					<h5>{data.content}</h5>
					<h6 className='text-right'>-{data.author}</h6>
				</div>
			)}
		</InspirationStyles>
	)
}

export default Inspiration

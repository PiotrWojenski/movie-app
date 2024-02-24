import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Searches = () => {
	const location = useLocation()
	const urlMovieTitles = new URLSearchParams(location.search).get('result')

	const { data } = useFetch()

	const result: any = data?.filter((item: any) => item.title.toLowerCase().includes(urlMovieTitles?.toLowerCase()))

	return (
		<div>
			<h2>
				Wyszukiwania dla : {urlMovieTitles}({result.length})
			</h2>
		</div>
	)
}

export default Searches

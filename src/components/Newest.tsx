import React from 'react'
import useFetch from '../hooks/useFetch'
import useFetchMovies from '../hooks/useFetchMovies'
import useFetchSeries from '../hooks/useFetchSeries'

const Newest = () => {
	const { data, isError, isLoading } = useFetch()
	const { movies } = useFetchMovies()
	const { series } = useFetchSeries()
	console.log(movies)
	console.log(series)

	if (isError) return <h2>Problem z polaczeniem</h2>
	if (isLoading) return <h2>Loading...</h2>

	return (
		<div>
			{data?.map((item: any) => {
				return <div> {item.title} </div>
			})}
		</div>
	)
}

export default Newest

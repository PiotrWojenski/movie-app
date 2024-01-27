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
		<div className="p-1 m-3">
			<h1>ALL</h1>
			<div className="flex flex-wrap">
				{data?.map((item: any) => {
					return <div className="p-1 m-1"> {item.title} </div>
				})}
			</div>
		</div>
	)
}

export default Newest

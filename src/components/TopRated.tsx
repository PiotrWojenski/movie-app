import React from 'react'
import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'

const TopRated = () => {
	const { data: movies, isLoading, isError } = useFetch()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	// Sortowanie filmów według oceny i wzięcie pierwszych 10
	const topRatedMovies = movies?.sort((a, b) => b.rating - a.rating).slice(0, 10)

	return (
		<div className="p-4 m-4">
			<h1 className="text-2xl font-bold mb-4">Najlepiej Oceniane</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{topRatedMovies?.map(movie => (
					<MovieItem key={movie.id} item={movie} />
				))}
			</div>
		</div>
	)
}

export default TopRated

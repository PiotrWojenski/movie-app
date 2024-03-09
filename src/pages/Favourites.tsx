import React, { useContext } from 'react'
import favouriteContext from '../context/favouriteContext'
import MovieItem from '../components/MovieItem'

const FavouritesPage = () => {
	const { favourite } = useContext(favouriteContext)

	return (
		<div>
			<h2>Favourite</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{favourite.map((movie: any) => (
					<MovieItem key={movie.title} item={movie} />
				))}
			</div>
		</div>
	)
}

export default FavouritesPage

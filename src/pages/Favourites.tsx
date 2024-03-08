import React, { useContext } from 'react'
import favouriteContext from '../context/favouriteContext'
import MovieItem from '../components/MovieItem'

const FavouritesPage = () => {
	const { favourite } = useContext(favouriteContext)

	return (
		<div>
			<h2>Favourite</h2>
			<div className="movies-list">
				{favourite.map((movie: any) => (
					<MovieItem key={movie.title} item={movie} />
				))}
			</div>
		</div>
	)
}

export default FavouritesPage

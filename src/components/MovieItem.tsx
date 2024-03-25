import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { movieType } from '../types/myTypes'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import favouriteContext from '../context/favouriteContext'

type MovieItemProps = {
	item: movieType
}

const MovieItem: React.FC<MovieItemProps> = ({ item }) => {
	const { favourite, addFavourite, removeFavourite } = useContext(favouriteContext)

	const isFavourite: boolean = favourite.some((fav: movieType) => fav.title === item.title)

	const toggleFavourite = () => {
		if (isFavourite) {
			removeFavourite(item)
		} else {
			addFavourite(item)
		}
	}

	return (
		<div className="relative movie-item m-4 overflow-hidden rounded-lg shadow-lg">
			<Link to={`/movie?title=${encodeURIComponent(item.title || '')}`}>
				<img src={item.img} alt={item.title} className="h-full w-full object-cover rounded-lg" />
			</Link>
			<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
				<h3 className="text-3xl font-bold text-white shadow-2xl shadow-black">{item.title}</h3>
				<div className="absolute top-0 right-0 p-2">
					{isFavourite ? (
						<FavoriteIcon className="text-red-500 cursor-pointer" onClick={toggleFavourite} />
					) : (
						<FavoriteBorderIcon className="text-white hover:text-red-500 cursor-pointer" onClick={toggleFavourite} />
					)}
				</div>
			</div>
		</div>
	)
}

export default MovieItem

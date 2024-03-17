import { movieType } from '../types/myTypes'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import favouriteContext from '../context/favouriteContext'
import { useContext } from 'react'

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
		<div className="flex flex-col bg-orange-200 rounded-lg overflow-hidden shadow-lg m-4">
			<Link to={`/movie?title=${encodeURIComponent(item.title || '')}`}>
				<img src={item.img} alt={item.title} className="h-56 w-full object-cover" />
			</Link>
			<div className="p-4">
				<h3 className="text-lg font-bold text-center">{item.title}</h3>
				<div className="text-center">
					{isFavourite ? (
						<FavoriteIcon className="text-red-500 cursor-pointer" onClick={toggleFavourite} />
					) : (
						<FavoriteBorderIcon className="hover:text-red-500 cursor-pointer" onClick={toggleFavourite} />
					)}
				</div>
			</div>
		</div>
	)
}

export default MovieItem

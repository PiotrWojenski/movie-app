import React from 'react'
import { movieType } from '../types/myTypes'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder' // Importuj ikonę

type MovieItemProps = {
	item: movieType
}

const MovieItem: React.FC<MovieItemProps> = ({ item }) => {
	return (
		<div className="flex flex-col bg-orange-200 rounded-lg overflow-hidden shadow-lg m-4">
			<Link to={`/movie?title=${item.title}`}>
				<img src={item.img} alt={item.title} className="h-56 w-full object-cover" />
			</Link>
			<div className="p-4">
				<h3 className="text-lg font-bold text-center">{item.title}</h3>
				<div className="text-center">
					<FavoriteBorderIcon />
				</div>
			</div>
		</div>
	)
}

export default MovieItem

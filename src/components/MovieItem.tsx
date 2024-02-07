import React from 'react'
import { movieType } from '../types/myTypes'
import { Link } from 'react-router-dom'

type MovieItemProps = {
	item: movieType
}

const MovieItem: React.FC<MovieItemProps> = ({ item }) => {
	return (
		<div className="flex flex-col  bg-orange-200 rounded-lg overflow-hidden shadow-lg">
			<Link to={`/movie?title=${item.title}`}>
				<img src={item.img} alt={item.title} className=" h-auto " />{' '}
			</Link>
			<div className="p-3">
				<h3 className="text-lg font-bold ">{item.title}</h3>
			</div>
		</div>
	)
}

export default MovieItem

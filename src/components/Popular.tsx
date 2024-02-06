import React from 'react'
import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'

const Popular = () => {
	const { moviesPopular } = useFetch()

	return (
		<div className="p-4 m-3">
			<h1 className="text-2xl font-bold mb-4">POPULAR</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{moviesPopular?.map((item: any) => {
					return <MovieItem key={item.id} item={item} />
				})}
			</div>
		</div>
	)
}

export default Popular

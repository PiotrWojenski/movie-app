import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'
import { sliderSettings } from '../settings/sliderSettings'

const TopRated = () => {
	const { data: movies, isLoading, isError } = useFetch()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	const topRatedMovies = (movies as { title: string; rating: number }[])
		?.sort((a, b) => b.rating - a.rating)
		.slice(0, 10)

	return (
		<div className="p-4 m-4">
			<h1 className="text-2xl font-bold mb-4">Top Rated</h1>
			<Slider {...sliderSettings}>
				{topRatedMovies?.map(movie => (
					<div key={movie.title} className="p-4">
						<MovieItem item={movie} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default TopRated

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'
import { sliderSettings } from '../settings/sliderSettings'

const Newest = () => {
	const { newMovies, isError, isLoading } = useFetch()

	if (isError) return <div>Error</div>
	if (isLoading) return <div>Loading...</div>

	return (
		<div className="py-8 px-4 m-4">
			<h1 className="text-2xl font-bold mb-4">Newest</h1>
			<Slider {...sliderSettings}>
				{newMovies?.map(movie => (
					<div key={movie.title} className="p-4">
						<MovieItem item={movie} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Newest

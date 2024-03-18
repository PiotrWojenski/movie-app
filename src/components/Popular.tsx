import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'
import { sliderSettings } from '../settings/sliderSettings'

const Popular = () => {
	const { moviesPopular } = useFetch()

	if (!moviesPopular) return <div>Loading...</div>

	return (
		<div className="p-4 m-3">
			<h1 className="text-2xl font-bold mb-4">Popular</h1>
			<Slider {...sliderSettings}>
				{moviesPopular.map(item => (
					<div key={item.title} className="p-4">
						<MovieItem item={item} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Popular

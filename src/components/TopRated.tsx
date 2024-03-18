import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'

const CustomArrow: React.FC<{
	className?: string
	style?: React.CSSProperties
	onClick?: () => void
	isNext?: boolean
}> = ({ className, style, onClick, isNext }) => {
	const baseStyle = 'z-10 absolute top-1/2 transform -translate-y-1/2 cursor-pointer'
	return (
		<div
			className={`${className} ${isNext ? 'right-0 mr-2' : 'left-0 ml-2'} ${baseStyle}`}
			style={{ ...style, display: 'block', background: 'grey' }}
			onClick={onClick}
		/>
	)
}

const TopRated = () => {
	const { data: movies, isLoading, isError } = useFetch()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	const topRatedMovies = (movies as { title: string; rating: number }[])
		?.sort((a, b) => b.rating - a.rating)
		.slice(0, 10)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <CustomArrow isNext={true} />,
		prevArrow: <CustomArrow isNext={false} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div className="p-4 m-4">
			<h1 className="text-2xl font-bold mb-4">Top Rated</h1>
			<Slider {...settings}>
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

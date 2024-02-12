import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const MoviePage = () => {
	const location = useLocation()
	const urlMovieTitle = new URLSearchParams(location.search).get('title')

	const { data } = useFetch()

	const movie = data?.find((item: any) => item.title === urlMovieTitle)

	console.log(movie)

	return (
		<div className="py-8">
			<h1 className="text-2xl font-bold mb-4">{(movie as { title: string })?.title}</h1>
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<img src={(movie as { img: string })?.img} alt={(movie as { title: string })?.title} className="w-full" />
				</div>
				<div className="w-full md:w-1/2">
					<p className="text-gray-700 mb-4">
						Opis filmu Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit omnis sunt. Earum est, dolor
						assumenda odio, laborum molestias nihil reiciendis eaque nobis sequi commodi aspernatur eum debitis.
						Assumenda asperiores in quo, maiores esse quasi.
					</p>
					<p className="text-gray-700 mb-4">Rating: {(movie as { rating: string })?.rating}</p>
				</div>
			</div>
		</div>
	)
}

export default MoviePage

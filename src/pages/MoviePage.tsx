import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const MoviePage = () => {
	const location = useLocation()
	const urlMovieTitle = new URLSearchParams(location.search).get('title')

	const { data } = useFetch()

	console.log(urlMovieTitle)

	const movie = data?.find((item: any) => item.title === urlMovieTitle)

	console.log(movie)

	return <div></div>
}

export default MoviePage

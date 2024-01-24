import axios from 'axios'
import { useQuery } from 'react-query'

const useFetch = () => {
	const getMovies = async () => {
		const movies = await axios.get('https://movie-app-b3e28-default-rtdb.firebaseio.com/movies.json')

		const showMovies = Object.values(movies.data)

		return showMovies
	}
	const { data, isError, isLoading } = useQuery('moviesData', getMovies)

	return { data, isError, isLoading }
}

export default useFetch

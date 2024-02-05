import axios from 'axios'
import { useQuery } from 'react-query'

const useFetch = () => {
	const getMovies = async () => {
		const movies = await axios.get('https://movie-app-b3e28-default-rtdb.firebaseio.com/movies.json')

		const showMovies = Object.values(movies.data)

		return showMovies
	}
	const { data, isError, isLoading } = useQuery('moviesData', getMovies)
	const newMovies = data?.filter((item: any) => item.isNew === true)
	const moviesPopular = data?.filter((item: any) => item.isPopular === true)
	return { data, isError, isLoading, newMovies, moviesPopular }
}

export default useFetch

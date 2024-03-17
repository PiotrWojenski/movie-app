import axios from 'axios'
import { useQuery } from 'react-query'
import { movieType } from '../types/myTypes'

const useFetch = () => {
	const getMovies = async (): Promise<movieType[]> => {
		try {
			const response = await axios.get<{ [key: string]: movieType }>(
				'https://movie-app-b3e28-default-rtdb.firebaseio.com/movies.json'
			)

			const moviesArray = Object.values(response.data).map(movie => movie)
			return moviesArray
		} catch (error) {
			throw new Error('Failed to fetch movies')
		}
	}

	const { data, isError, isLoading } = useQuery<movieType[]>('moviesData', getMovies, {})

	const newMovies = data?.filter(item => item.isNew === true)
	const moviesPopular = data?.filter(item => item.isPopular === true)

	return { data, isError, isLoading, newMovies, moviesPopular }
}

export default useFetch

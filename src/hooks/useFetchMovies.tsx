import useFetch from './useFetch'

const useFetchMovies = () => {
	const { data } = useFetch()
	const movies = data?.filter((item: any) => item.type === 'movie')
	return { movies }
}

export default useFetchMovies

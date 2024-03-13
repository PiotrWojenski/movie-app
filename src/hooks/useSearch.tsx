import useFetch from './useFetch'
import { movieType } from '../types/myTypes'

const useSearch = (query: string) => {
	const { data, isError, isLoading } = useFetch()

	const moviesData = data as movieType[]

	const filteredData = moviesData?.filter((item: movieType) => item.title?.toLowerCase().includes(query.toLowerCase()))

	return { filteredData, isError, isLoading }
}

export default useSearch

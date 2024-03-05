import useFetch from './useFetch'

const useSearch = (query: string) => {
	const { data, isError, isLoading } = useFetch()

	const filteredData = data?.filter((item: any) => item.title.toLowerCase().includes(query.toLowerCase()))

	return { filteredData, isError, isLoading }
}

export default useSearch

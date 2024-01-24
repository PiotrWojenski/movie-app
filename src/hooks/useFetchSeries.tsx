import useFetch from './useFetch'

const useFetchSeries = () => {
	const { data } = useFetch()
	const series = data?.filter((item: any) => item.type === 'series')
	return { series }
}

export default useFetchSeries

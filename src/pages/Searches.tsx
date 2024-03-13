import { useLocation } from 'react-router-dom'
import useSearch from '../hooks/useSearch' // Zaimportuj useSearch zamiast useFetch
import MovieItem from '../components/MovieItem' // Zaimportuj MovieItem, aby użyć dla renderowania każdego wyniku

const Searches = () => {
	const location = useLocation()
	const query = new URLSearchParams(location.search).get('result') || '' // Zapewnij domyślną wartość

	const { filteredData, isError, isLoading } = useSearch(query)

	if (isError) return <div>Wystąpił błąd podczas ładowania danych.</div>
	if (isLoading) return <div>Ładowanie...</div>

	return (
		<div>
			<h2>
				Wyszukiwania dla: {query} ({filteredData?.length})
			</h2>
			<div className="grid grid-cols-3 gap-4">
				{filteredData?.map(item => (
					<MovieItem key={item.title} item={item} />
				))}
			</div>
		</div>
	)
}

export default Searches

import MovieItem from '../components/MovieItem'
import useFetchMovies from '../hooks/useFetchSeries'

const Series = () => {
	const { series } = useFetchMovies()
	const showSeries = series?.filter((item: any) => item.type === 'series')

	return (
		<div className="p-5 m-4">
			<h1 className="text-2xl font-bold mb-4">Series</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{showSeries?.map((item: any) => {
					return <MovieItem key={item.id} item={item} />
				})}
			</div>
		</div>
	)
}

export default Series

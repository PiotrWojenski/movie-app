import useFetch from '../hooks/useFetch'
import MovieItem from './MovieItem'

const Newest = () => {
	const { newMovies, isError, isLoading } = useFetch()

	if (isError) return <h2>Error </h2>
	if (isLoading) return <h2>Loading...</h2>

	return (
		<div className="p-4 m-3">
			<h1 className="text-2xl font-bold mb-4">NOWOŚCI</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{newMovies?.map((item: any) => {
					return <MovieItem key={item.id} item={item} />
				})}
			</div>
		</div>
	)
}

export default Newest

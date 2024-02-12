import MovieItem from '../components/MovieItem'
import useFetchMovies from '../hooks/useFetchMovies'

const Movies = () => {
	const { movies } = useFetchMovies()
	const showMovies = movies?.filter((item: any) => item.type === 'movie')

	return (
		<div className="p-4 m-4">
			<h1 className="text-2xl font-bold mb-4">Movies</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{showMovies?.map((item: any) => {
					return <MovieItem key={item.id} item={item} />
				})}
			</div>
		</div>
	)
}

export default Movies

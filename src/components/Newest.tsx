import useFetch from '../hooks/useFetch'
import useFetchMovies from '../hooks/useFetchMovies'
import useFetchSeries from '../hooks/useFetchSeries'

const Newest = () => {
	const { data, isError, isLoading } = useFetch()
	const { movies } = useFetchMovies()
	const { series } = useFetchSeries()
	console.log(movies)
	console.log(series)

	if (isError) return <h2>Error </h2>
	if (isLoading) return <h2>Loading...</h2>

	return (
		<div className="p-4 m-3">
			<h1 className="text-2xl font-bold mb-4">ALL</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{data?.map((item: any) => {
					return (
						<div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg">
							<img src={item.img} alt={item.title} className=" h-52 object-cover" />
							<div className="p-4">
								<h3 className="text-lg font-semibold truncate">{item.title}</h3>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Newest

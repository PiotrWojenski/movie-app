import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Searches = () => {
	const location = useLocation()
	const urlMovieTitles = new URLSearchParams(location.search).get('result')

	const { data } = useFetch()

	const result: any = data?.filter((item: any) => item.title.toLowerCase().includes(urlMovieTitles?.toLowerCase()))

	return (
		<div>
			<h2>
				Wyszukiwania dla: {urlMovieTitles}({result.length})
			</h2>
			<div>
				{result.map((item: any) => (
					<div key={item.id}>
						<h3>{item.title}</h3>
						<img src={item.img} alt={item.title} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Searches

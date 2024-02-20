import Intro from '../components/Intro'
import Newest from '../components/Newest'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'

const Home = () => {
	return (
		<div>
			<Intro />
			<Newest />
			<TopRated />
			<Popular />
		</div>
	)
}

export default Home

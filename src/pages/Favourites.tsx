import { useContext } from 'react'
import favouriteContext from '../context/favouriteContext'

const Favourites = () => {
	const { favourite } = useContext(favouriteContext)
	console.log(favourite)
	return <div>Favourites</div>
}

export default Favourites

import img from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className="bg-gray-800 text-white p-5 text-3xl  font-bold">
			<div className="container mx-auto flex justify-between items-center h-9">
				<img src={img} alt="logo" className="flex-1 items-start h-6 text-pink-700" />
				<div className="flex-1">Search</div>
				<nav>
					<ul className="flex-1 ">
						<Link to="/">Home</Link>
						<Link to="/movies">Movies</Link>
						<Link to="/series">Series</Link>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar

import img from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<img src={img} alt="logo" className="h-8" />
				<nav>
					<ul className="flex space-x-4">
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

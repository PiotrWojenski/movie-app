import img from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className="bg-gray-800  text-white p-2 text-3xl  font-bold">
			<div className="flex justify-between items-center h-9">
				<img src={img} alt="logo" className="flex-1 items-start  h-6 " />
				<div className="flex-1 text-center">Search</div>
				<nav>
					<ul className="flex flex-2 justify-between items-center ">
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

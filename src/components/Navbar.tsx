import img from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className="bg-gray-800  text-white p-2 text-3xl  font-bold">
			<div className="flex justify-between items-center h-9">
				<span className="flex-1 flex justify-start items-center   ">
					<img src={img} alt="logo" className="logo-img   " />
				</span>
				<div className="flex-1 flex justify-center items-center">Search</div>
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

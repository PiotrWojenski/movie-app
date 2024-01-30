import img from '../logo.svg'

const Navbar = () => {
	return (
		<header className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<img src={img} alt="logo" className="h-8" />
				<nav>
					<ul className="flex space-x-4">
						<li className="hover:text-gray-300">HOME</li>
						<li className="hover:text-gray-300">MOVIES</li>
						<li className="hover:text-gray-300">SERIES</li>
						<li className="hover:text-gray-300">FAVOURITES</li>
						<li className="hover:text-gray-300">PROFILE</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar

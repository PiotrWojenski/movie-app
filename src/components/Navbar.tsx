import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

const Navbar = () => {
	return (
		<header className="bg-gray-800 text-white p-4 text-xl font-bold fixed top-0 left-0 w-full z-50 mb-10">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<span className="logo-img" style={{ fontFamily: "'Protest Riot', sans-serif" }}>
						ratingAppski
					</span>
				</div>
				<TextField
					id="filled-multiline-flexible"
					label="Search..."
					variant="filled"
					className="bg-slate-100 rounded-lg no-underline"
				/>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link to="/" className="hover:text-gray-300">
								Home
							</Link>
						</li>
						<li>
							<Link to="/movies" className="hover:text-gray-300">
								Movies
							</Link>
						</li>
						<li>
							<Link to="/series" className="hover:text-gray-300">
								Series
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar

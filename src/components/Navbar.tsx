import React from 'react'

const Navbar = () => {
	return (
		<header className="flex ">
			<span className="flex-1">LOGO</span>
			<nav className="flex-1">
				<ul className="flex justify-around  ">
					<li>HOME</li>
					<li>MOVIES</li>
					<li>SERIES</li>
					<li>FAVOURTIES</li>
					<li>PROFIE</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar

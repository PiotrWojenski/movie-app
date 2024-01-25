import React from 'react'

const Navbar = () => {
	return (
		<header className="flex ">
			<span className="flex-1">LOGO</span>
			<nav className="flex-1">
				<ul className="flex justify-around ">
					<li>HOME</li>
					<li>FILMY</li>
					<li>SERIALE</li>
					<li>LISTA ŻYCZEŃ</li>
					<li>PROFIL</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar

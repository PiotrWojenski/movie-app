import React from 'react'

const Navbar = () => {
	return (
		<header className="flex">
			<span>LOGO</span>
			<nav>
				<ul className="flex">
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

import React from 'react'
import img from '../logo.svg'

const Navbar = () => {
	return (
		<header className="flex ">
			<span className="flex-1 m-2 p-2">
				<img src={img} alt="logo" />
			</span>
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

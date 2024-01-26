import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Popular from './components/Popular'
import Newest from './components/Newest'
import TopRated from './components/TopRated'
import axios from 'axios'

function App() {
	const getMovies = async () => {
		const movies = await axios.get('https://movie-app-b3e28-default-rtdb.firebaseio.com/movies.json')

		const showMovies = Object.values(movies.data)
		console.log(showMovies)
	}

	useEffect(() => {
		getMovies()
	}, [])
	return (
		<div>
			<Navbar />
			<Intro />
			<Popular />
			<TopRated />
			<Newest />
		</div>
	)
}

export default App

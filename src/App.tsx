import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import MoviePage from './pages/MoviePage'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Searches from './pages/Searches'
import Favourites from './pages/Favourites'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favourite" element={<Favourites />} />

				<Route path="/movies" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route path="/movie" element={<MoviePage />} />
				<Route path="/search" element={<Searches />} />
			</Routes>
		</Router>
	)
}

export default App

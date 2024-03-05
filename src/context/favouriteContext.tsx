import { createContext, useState } from 'react'
import { movieType, FavouriteContextType, FavouriteContextProviderType } from '../types/myTypes'

const defaultState = {
	favourite: [],
	addFavourite: (movie: movieType) => {},
	removeFavourite: (movie: movieType) => {},
}

const favouriteContext = createContext<FavouriteContextType>(defaultState)

export const FavouriteContextProvider = ({ children }: FavouriteContextProviderType) => {
	const [favourite, setFavourite] = useState<movieType[]>([])

	const addFavourite = (movie: movieType) => {
		const alreadyFavourite = favourite.find(item => item.title === movie.title)

		if (alreadyFavourite === undefined) {
			setFavourite([...favourite, movie])
		}
	}

	const removeFavourite = (movie: movieType) => {
		const filteredFavourite = favourite.filter(item => item.title !== movie.title)

		setFavourite(filteredFavourite)
	}

	return (
		<favouriteContext.Provider value={{ favourite, addFavourite, removeFavourite }}>
			{children}
		</favouriteContext.Provider>
	)
}

export default favouriteContext

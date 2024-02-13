export type movieType = {
	author?: string
	description?: string
	img?: string
	isNew?: boolean
	isPopular?: boolean
	rating?: number
	title?: string
	type?: string
	year?: number
}

export type searchType = {
	result: string
}

export type FavouriteContextType = {
	favourite: any
	addFavourite: (movie: movieType) => void
	removeFavourite: (movie: movieType) => void
}

export type FavouriteContextProviderType = {
	children: React.ReactNode
}

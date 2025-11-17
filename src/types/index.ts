export type Palette = {
	name: string
	main: string
	second: string
	third: string
}

export type NavLink = {
	name: string
	href: string
}

export type Language = {
	code: string
	label: string
	flag: string
}

export type Photo = {
	id: number
	src: {
		large2x?: string
		large?: string
		medium?: string
	}
}

export type PexelsResponse = {
	photos: Photo[]
}

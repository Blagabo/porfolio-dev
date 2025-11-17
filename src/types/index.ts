export interface Palette {
	name: string
	main: string
	second: string
	third: string
}

export interface NavLink {
	name: string
	href: string
}

export interface Language {
	code: string
	label: string
	flag: string
}

export interface Photo {
	id: number
	src: {
		large2x?: string
		large?: string
		medium?: string
	}
}

export interface PexelsResponse {
	photos: Photo[]
}

type Palette = {
	name: string
	main_color: string
	second_color: string
	third_color: string
}

export {}

declare global {
	interface Window {
		HUGO_COLOR_PALETTES?: Palette[]
		currentColorPalette?: Palette
		DynamicColors?: {
			initialize: () => Palette | undefined
			cycle: () => void
			apply: (palette: Palette) => void
			getRandom: () => Palette
			getByName: (name: string) => Palette | undefined
			palettes: Palette[]
		}
	}
}

const FALLBACK_PALETTES: Palette[] = [
	{ name: "professional", main_color: "#474A51", second_color: "#E52521", third_color: "#3CB043" },
	{ name: "ocean", main_color: "#1E40AF", second_color: "#06B6D4", third_color: "#10B981" },
	{ name: "sunset", main_color: "#DC2626", second_color: "#F59E0B", third_color: "#EF4444" },
	{ name: "forest", main_color: "#059669", second_color: "#10B981", third_color: "#F59E0B" },
	{ name: "charcoal", main_color: "#1F2937", second_color: "#EF4444", third_color: "#22C55E" },
]

const root = () => document.documentElement

function getPalettes(): Palette[] {
	return window.HUGO_COLOR_PALETTES && window.HUGO_COLOR_PALETTES.length > 0
		? window.HUGO_COLOR_PALETTES
		: FALLBACK_PALETTES
}

function applyColors(palette: Palette) {
	const element = root()
	element.style.setProperty("--color-primary", palette.main_color)
	element.style.setProperty("--color-second", palette.second_color)
	element.style.setProperty("--color-third", palette.third_color)
	element.setAttribute("data-color-palette", palette.name)
	window.currentColorPalette = palette
}

function randomPalette(palettes: Palette[]) {
	return palettes[Math.floor(Math.random() * palettes.length)]
}

function initialize() {
	const palettes = getPalettes()
	const selected = randomPalette(palettes)
	applyColors(selected)
	return selected
}

function cycle() {
	const palettes = getPalettes()
	const currentName = root().getAttribute("data-color-palette")
	const index = palettes.findIndex((p) => p.name === currentName)
	const next = palettes[(index + 1) % palettes.length]
	applyColors(next)
}

;(window as any).DynamicColors = {
	initialize,
	cycle,
	apply: applyColors,
	getRandom: () => randomPalette(getPalettes()),
	getByName: (name: string) => getPalettes().find((palette) => palette.name === name),
	palettes: getPalettes(),
}

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		if (!root().getAttribute("data-color-palette")) {
			initialize()
		}
	}, 100)
})

window.addEventListener("load", () => {
	if (!root().getAttribute("data-color-palette")) {
		initialize()
	}
})

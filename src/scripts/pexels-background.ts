import type { PexelsResponse, Photo } from "../types"

declare global {
	interface Window {
		PEXELS_API_KEY?: string | null
		PEXELS_QUERIES?: string[]
		PEXELS_ENABLED?: boolean
	}
}

class PexelsBackground {
	private apiKey: string | null = null
	private usedImages = new Set<number>()
	private currentImage: string | null = null
	private fallbackGradient =
		"linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 25%, var(--color-primary-light) 50%, var(--color-primary) 75%, var(--color-primary-dark) 100%)"

	async init() {
		this.apiKey = window.PEXELS_API_KEY ?? null
		if (!this.apiKey) {
			this.applyFallback()
			return
		}
		try {
			await this.loadImage()
		} catch (error) {
			console.error("Failed to load Pexels background", error)
			this.applyFallback()
		}
	}

	private async loadImage() {
		const queries = window.PEXELS_QUERIES ?? ["technology", "landscape", "future city"]
		const query = queries[Math.floor(Math.random() * queries.length)]
		const url = new URL("https://api.pexels.com/v1/search")
		url.searchParams.set("query", query)
		url.searchParams.set("orientation", "landscape")
		url.searchParams.set("size", "large")
		url.searchParams.set("per_page", "15")
		url.searchParams.set("page", `${Math.floor(Math.random() * 10) + 1}`)

		const response = await fetch(url.toString(), {
			headers: { Authorization: this.apiKey ?? "" },
		})
		if (!response.ok) throw new Error(`Pexels error ${response.status}`)
		const data = (await response.json()) as PexelsResponse
		this.pickPhoto(data.photos)
	}

	private pickPhoto(photos: Photo[]) {
		const fresh = photos.filter((photo) => !this.usedImages.has(photo.id))
		const list = fresh.length > 0 ? fresh : photos
		const photo = list[Math.floor(Math.random() * list.length)]
		this.currentImage = photo.src.large2x ?? photo.src.large ?? photo.src.medium ?? null
		this.usedImages.add(photo.id)
		if (this.currentImage) this.applyBackground()
	}

	private applyBackground() {
		const hero = document.querySelector<HTMLElement>(".hero-section")
		if (!hero || !this.currentImage) return
		hero.classList.add("pexels-bg")
		const container = document.createElement("div")
		container.className = "pexels-bg-container"
		Object.assign(container.style, {
			position: "absolute",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			opacity: "0",
			transition: "opacity 0.8s ease",
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundImage: `url(${this.currentImage})`,
		})

		const overlay = document.createElement("div")
		Object.assign(overlay.style, {
			position: "absolute",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			background:
				"linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)",
			opacity: "0",
			transition: "opacity 0.8s ease",
		})

		hero.appendChild(container)
		hero.appendChild(overlay)

		requestAnimationFrame(() => {
			container.style.opacity = "1"
			overlay.style.opacity = "1"
		})
	}

	private applyFallback() {
		const hero = document.querySelector<HTMLElement>(".hero-section")
		if (!hero) return
		hero.classList.remove("pexels-bg")
		hero.style.background = this.fallbackGradient
	}
}

document.addEventListener("DOMContentLoaded", () => {
	if (!window.PEXELS_ENABLED) return
	const background = new PexelsBackground()
	background.init()
})

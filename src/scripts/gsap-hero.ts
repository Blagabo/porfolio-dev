import gsap from "gsap"

const select = <T extends Element = Element>(selector: string) =>
	document.querySelector<T>(selector)
const selectAll = <T extends Element = Element>(selector: string) =>
	Array.from(document.querySelectorAll<T>(selector))

let typingInitialized = false

function initTypingEffect() {
	if (typingInitialized) return
	const element = select<HTMLElement>(".typewriter")
	if (!element) return
	const original = element.dataset.originalText || element.textContent || ""
	const concepts = original
		.split(".")
		.map((part) => part.trim())
		.filter(Boolean)
	if (concepts.length === 0) return
	element.textContent = ""
	const cursor = document.createElement("span")
	cursor.className = "typing-cursor"
	element.appendChild(cursor)

	function typeConcept(concept: string) {
		return new Promise<void>((resolve) => {
			const chars = concept.split("")
			let index = 0
			const typeInterval = setInterval(() => {
				if (element) {
					element.textContent = chars.slice(0, index + 1).join("")
					element.appendChild(cursor)
					element.style.color = "inherit"
				}
				index += 1
				if (index === chars.length) {
					clearInterval(typeInterval)
					setTimeout(() => eraseConcept(chars, resolve), 1500)
				}
			}, 80)
		})
	}

	function eraseConcept(chars: string[], resolve: () => void) {
		let index = chars.length
		const eraseInterval = setInterval(() => {
			index -= 1
			if (element) {
				element.textContent = chars.slice(0, index).join("")
				element.appendChild(cursor)
			}
			if (index <= 0) {
				clearInterval(eraseInterval)
				setTimeout(resolve, 400)
			}
		}, 40)
	}

	async function loop() {
		for (const concept of concepts) {
			await typeConcept(concept)
		}
		loop()
	}

	loop()

	gsap.to(cursor, { opacity: 0, duration: 0.7, yoyo: true, repeat: -1, ease: "power2.inOut" })
	typingInitialized = true
}

function initQuickFactLighting() {
	selectAll<HTMLElement>(".quick-fact-card").forEach((card) => {
		card.addEventListener("mousemove", (event) => {
			const rect = card.getBoundingClientRect()
			const x = ((event.clientX - rect.left) / rect.width) * 100
			const y = ((event.clientY - rect.top) / rect.height) * 100
			card.style.setProperty("--mouse-x", `${x}%`)
			card.style.setProperty("--mouse-y", `${y}%`)
		})
		card.addEventListener("mouseleave", () => {
			card.style.setProperty("--mouse-x", "50%")
			card.style.setProperty("--mouse-y", "50%")
		})
	})
}

function initHeroAnimations() {
	const hero = select<HTMLElement>(".hero-section")
	if (!hero) return
	const animated = hero.querySelectorAll<HTMLElement>("[data-animation]")
	const timeline = gsap.timeline()
	gsap.set(animated, { opacity: 0, y: 50, rotationX: -15 })
	timeline.to(animated, {
		opacity: 1,
		y: 0,
		rotationX: 0,
		duration: 1,
		stagger: 0.1,
		ease: "back.out(1.7)",
	})
}

document.addEventListener("DOMContentLoaded", () => {
	initHeroAnimations()
	initTypingEffect()
	initQuickFactLighting()
})

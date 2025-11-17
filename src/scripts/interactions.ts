declare global {
	interface Window {
		FORMSPREE_ENDPOINT?: string
	}
}

export {}

const qs = <T extends Element = Element>(selector: string) => document.querySelector<T>(selector)
const qsa = <T extends Element = Element>(selector: string) =>
	Array.from(document.querySelectorAll<T>(selector))

function toggleDarkMode() {
	const html = document.documentElement
	const next = !html.classList.contains("dark")
	html.classList.toggle("dark", next)
	localStorage.setItem("darkMode", String(next))
}

function handleSectionLinks() {
	const links = qsa<HTMLAnchorElement>(".section-link")
	links.forEach((link) => {
		link.addEventListener("click", (event) => {
			const targetId = link.dataset.section ?? link.getAttribute("href")
			if (!targetId) return
			const targetEl = document.querySelector(targetId)
			if (targetEl) {
				event.preventDefault()
				targetEl.scrollIntoView({ behavior: "smooth", block: "start" })
			}
		})
	})
}

function handleMobileMenu() {
	const button = qs<HTMLButtonElement>("#menu-btn")
	const menu = qs<HTMLDivElement>("#mobile-menu")
	if (!button || !menu) return
	button.addEventListener("click", () => menu.classList.toggle("hidden"))
	menu.querySelectorAll("a").forEach((anchor) => {
		anchor.addEventListener("click", () => menu.classList.add("hidden"))
	})
}

function initializeFadeIn() {
	const sections = qsa<HTMLElement>("section[data-animate]")
	if (sections.length === 0 || !("IntersectionObserver" in window)) return
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in-visible")
					observer.unobserve(entry.target)
				}
			})
		},
		{ threshold: 0.2 }
	)
	sections.forEach((section) => observer.observe(section))
}

function handleModal() {
	const openBtn = qs<HTMLButtonElement>("#aboutModalBtn")
	const closeBtn = qs<HTMLButtonElement>("#closeAboutModal")
	const modal = qs<HTMLDivElement>("#aboutModal")
	if (!modal || !openBtn || !closeBtn) return
	const close = () => modal.classList.add("hidden")
	const open = () => modal.classList.remove("hidden")
	openBtn.addEventListener("click", open)
	closeBtn.addEventListener("click", close)
	modal.addEventListener("click", (event) => {
		if (event.target === modal) close()
	})
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") close()
	})
}

function initDarkModeToggle() {
	const toggles = qsa<HTMLButtonElement>("#darkModeToggle, #darkModeToggleMobile")
	toggles.forEach((button) => button.addEventListener("click", toggleDarkMode))
}

document.addEventListener("DOMContentLoaded", () => {
	handleSectionLinks()
	handleMobileMenu()
	initializeFadeIn()
	handleModal()
	initDarkModeToggle()
})

import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress"
import icon from "astro-icon"

export default defineConfig({
	site: "https://blagabo.dev",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
		compress(),
	],
})

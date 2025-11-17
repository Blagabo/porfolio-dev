/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1f3258",
					light: "#4f6cf5",
					dark: "#0b1424",
				},
				accent: {
					DEFAULT: "#9be2ff",
					muted: "#7aa2ff",
				},
				bg: {
					DEFAULT: "#0f1b2e",
					secondary: "#162540",
					tertiary: "#1f3054",
				},
				text: {
					primary: "#e8edf7",
					secondary: "#b9c3d9",
				},
			},
			fontFamily: {
				sans: ["Nunito", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
				heading: ["Montserrat", "Nunito", "sans-serif"],
			},
		},
	},
	plugins: [],
}

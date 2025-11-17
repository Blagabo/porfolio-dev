/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#364fc7',
        },
        dark: {
          50: '#dde6ff',
          100: '#bacffd',
          200: '#94b0f7',
          300: '#6a8bdc',
          400: '#4866ad',
          500: '#31436f',
          600: '#1f2b4c',
          700: '#111a2f',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

const { heroui } = require("@heroui/react");
// Generated color palettes
const accent = { 200: '#b3c7ff', 600: '#364bff', 900: '#182775', 950: '#131e4f' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
			colors: { accent, gray },
		},
  },
  darkMode: 'class',
  plugins: [heroui()]
}
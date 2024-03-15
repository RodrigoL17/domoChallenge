/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '480px',	
		},
		extend: {
			colors:{
				primary: '#ffffff',
				secondary: '#9499a1',
				cardTitle:	'#030303',
				bgPrimary: '#273244',
				bgSecondary: '#4670f6',
			}
		},
	},
	plugins: [],
}

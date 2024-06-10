/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			  scroll: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-63%)' },
			  },
			  mobile: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-250%)' },
			  },
			  fadeInDown: {
				'from': {
				  opacity: '0',
				  transform: 'translateY(-100px)',
				},
				'to': {
				  opacity: '1',
				  transform: 'translateY(0)',
				},
			  },
			},
			animation: {
			  scroll: 'scroll 20s linear infinite',
			  mobile: 'mobile 20s linear infinite',
			  fadeInDown: 'fadeInDown 1s ease-out forwards',
			},
		  },
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				englishViolet: {
					'DEFAULT': 'hsla(294, 22%, 25%, 1)'
				},
				dimGray: { 'DEFAULT': 'hsla(273, 5%, 42%, 1)' }
			}
		},
	},
	plugins: [],
}


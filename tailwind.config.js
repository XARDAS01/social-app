/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
				white: '#fcfcfc',
				black: '#000000',
				green: '#2ED00D',
				yellow: '#F5B005',
        grey: '#ABB2BF',

				brandTextColor: '#ABB2BF',
				brandColorMain: '#0c0c0d',
        brandColorSecond: '#C778DD',
			},
			fontSize: {
				xxxs: '.5rem',
				xxs: '.675rem',
			},
			fontFamily: {
				sans: [ 'Fira Code, Ubuntu, Helvetica, Arial, sans-serif' ],
			},
			screens: {
				'zero': '0px',
				'msm': '320px',
				'380': '380px',
				'425': '425px',
				'sm': '640px',
				// => @media (min-width: 640px) { ... }

				'tablet': '768px',
				'notebook': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			zIndex: {
				1: '1',
				5: '5',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
				1000: '1000',
				1500: '1500',
			},
    },
  },
  plugins: [],
};

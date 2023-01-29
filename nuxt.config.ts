// https://nuxt.com/docs/api/configuration/nuxt-config
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
		'@pinia/nuxt',
	],

	ssr: false,
	
  app: {
		head: {
			script: [],
			meta: [
				{
					name: 'robots',
					content: process.env.ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
				},
			],
		},
	},

	css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

	runtimeConfig: {
		public: {
			API_BASE_URL: process.env.API_BASE_URL || '',
		},
	},
})

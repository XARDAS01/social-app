import { createI18n } from 'vue-i18n';

import ru from '../locales/ru.json';
import en from '../locales/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		strategy: 'prefix_except_default',
		detectBrowserLanguage: false,
		langDir: 'locales',
		lazy: false,
		locales: [
			{
				code: 'ru',
				iso: 'ru',
				file: ru,
			},
			{
				code: 'en',
				iso: 'en',
				file: en,
			},
		],
		locale: 'ru',
		messages: {
			ru,
			en,
		},
		parsePages: false,
		vueI18n: {
			legacy: false,
		},
	});

	vueApp.use(i18n);
});

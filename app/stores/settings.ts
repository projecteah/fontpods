import type { AvailableLocales } from '~~/i18n/locales'

export const useSettingsStore = defineStore('settings', () => {
	const nuxtApp = useNuxtApp()
	const i18n = nuxtApp.$i18n

	const locale = computed(() => i18n.locale.value as AvailableLocales)

	function setLocale(newLocale: AvailableLocales) {
		i18n.setLocale(newLocale)
	}

	return { locale, setLocale }
})

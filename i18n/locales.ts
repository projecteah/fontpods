import type { LocaleObject } from '@nuxtjs/i18n'

export const locales: LocaleObject[] = [
	{
		code: 'en',
		file: 'en.json',
		language: 'en',
		name: 'English',
	},
	{
		code: 'zh-CN',
		file: 'zh-cn.json',
		language: 'zh-Hans-CN',
		name: '简体中文',
	},
	{
		code: 'zh-TW',
		file: 'zh-tw.json',
		language: 'zh-Hans-TW',
		name: '繁體中文',
	},
]

export const currentLocales = [...locales].sort((a, b) => a.code.localeCompare(b.code))

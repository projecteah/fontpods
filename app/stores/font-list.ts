const defaultPreviewText = 'The quick brown fox jumps over the lazy dog.'
const defaultFontSize = 24

export const useFontListStore = defineStore(
	'fontList',
	() => {
		const search = ref('')
		const previewText = ref(defaultPreviewText)
		const fontSize = ref(defaultFontSize)
		const layout = ref<FontLayout>('grid')
		const filterSource = ref<FontFilterSource>('all')

		function resetPreview() {
			previewText.value = defaultPreviewText
			fontSize.value = defaultFontSize
		}

		function resetFontSize() {
			fontSize.value = defaultFontSize
		}

		function resetFilter() {
			filterSource.value = 'all'
			search.value = ''
		}

		return {
			search,
			previewText,
			fontSize,
			layout,
			filterSource,
			resetPreview,
			resetFontSize,
			resetFilter,
		}
	},
	{
		persist: true,
		tauri: { save: true, sync: false, autoStart: false },
	},
)

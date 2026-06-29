export const useFontStore = defineStore(
	'font',
	() => {
		const fonts = ref<FontData[]>([])
		const loading = ref(false)
		const error = ref<string | null>(null)

		const regularFonts = computed(() => fonts.value.filter((f) => f.style === 'Regular'))
		const favoriteFonts = computed(() => fonts.value.filter((f) => f.favorite))
		const localFonts = computed(() => fonts.value.filter((f) => f.source === 'local'))
		const webFonts = computed(() => fonts.value.filter((f) => f.source === 'web'))
		const totalCount = computed(() => regularFonts.value.length)

		function isFavorite(postscriptName: string): boolean {
			return fonts.value.find((f) => f.postscriptName === postscriptName)?.favorite ?? false
		}

		function toggleFavorite(postscriptName: string) {
			const font = fonts.value.find((f) => f.postscriptName === postscriptName)
			if (font) font.favorite = !font.favorite
		}

		function setLocalFonts(raw: RawFontData[]) {
			const prev = new Map(fonts.value.map((f) => [f.postscriptName, f]))
			const local: FontData[] = raw.map((r) => ({
				postscriptName: r.postscriptName,
				family: r.family,
				fullName: r.fullName,
				style: r.style,
				source: 'local',
				favorite: prev.get(r.postscriptName)?.favorite ?? false,
			}))
			fonts.value = [...local, ...webFonts.value]
		}

		function addWebFont(entry: { postscriptName: string; family: string; url: string }) {
			if (fonts.value.some((f) => f.postscriptName === entry.postscriptName)) return
			fonts.value = [
				...fonts.value,
				{
					postscriptName: entry.postscriptName,
					family: entry.family,
					fullName: entry.family,
					style: 'Regular',
					source: 'web',
					url: entry.url,
					favorite: false,
				},
			]
		}

		function removeWebFont(postscriptName: string) {
			fonts.value = fonts.value.filter((f) => f.postscriptName !== postscriptName)
		}

		function clearLocalFonts() {
			fonts.value = [...webFonts.value]
		}

		return {
			fonts,
			loading,
			error,
			regularFonts,
			favoriteFonts,
			localFonts,
			webFonts,
			totalCount,
			isFavorite,
			toggleFavorite,
			setLocalFonts,
			addWebFont,
			removeWebFont,
			clearLocalFonts,
		}
	},
	{
		persist: {
			serializer: {
				serialize: (state: { fonts?: FontData[] }) =>
					JSON.stringify((state.fonts || []).filter((f) => f.favorite || f.source === 'web')),
				deserialize: (data: string) => ({ fonts: JSON.parse(data) }),
			},
		},
		tauri: { save: true, sync: false, autoStart: false },
	},
)

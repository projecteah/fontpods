export interface RawFontData {
	family: string
	fullName: string
	postscriptName: string
	style: string
}

export interface FontData extends RawFontData {
	source: 'local' | 'web'
	url?: string
	favorite: boolean
}

export interface LocalFontAccess {
	queryLocalFonts: (options?: { postscriptNames?: string[] }) => Promise<RawFontData[]>
}

export type FontPermissionState = 'granted' | 'denied' | 'prompt' | 'unsupported'

export type FontLayout = 'row' | 'grid'

export type FontFilterSource = 'all' | 'local' | 'web' | 'favorites'

export type FontEmptyState = 'unsupported' | 'permission' | 'empty'

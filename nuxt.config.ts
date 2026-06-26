export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@nuxt/ui'],
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in',
		},
	},
	css: ['@/assets/css/main.css'],
	ssr: false,
	vite: {
		clearScreen: false,
		envPrefix: ['VITE_', 'TAURI_'],
		server: {
			strictPort: true,
			hmr: {
				protocol: 'ws',
				host: '0.0.0.0',
				port: 1421,
			},
			watch: {
				ignored: ['**/src-tauri/**'],
			},
		},
	},
	devServer: {
		port: '1420',
	},
	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},
	nitro: {
		preset: 'static',
	},
	ui: {
		fonts: false,
	},
	devtools: {
		enabled: false,
	},
	compatibilityDate: '2026-01-01',
})

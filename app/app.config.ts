export default defineAppConfig({
	app: {
		name: 'FontPods',
	},
	ui: {
		colors: {
			primary: 'blue',
			neutral: 'neutral',
		},
		button: {
			slots: {
				base: 'cursor-pointer',
			},
		},
		formField: {
			slots: {
				root: 'w-full',
			},
		},
		input: {
			slots: {
				root: 'w-full',
			},
		},
		textarea: {
			slots: {
				root: 'w-full',
				base: 'resize-none',
			},
		},
		accordion: {
			slots: {
				trigger: 'cursor-pointer',
				item: 'md:py-2',
			},
		},
		navigationMenu: {
			slots: {
				link: 'cursor-pointer',
			},
		},
	},
})

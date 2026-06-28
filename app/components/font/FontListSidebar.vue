<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const appConfig = useAppConfig()
const icons = appConfig.ui.icons

const previewLayout = ref<TabsItem[]>([
	{
		label: 'Rows',
		icon: icons.rows,
		value: 'row',
	},
	{
		label: 'Grid',
		icon: icons.grid,
		value: 'grid',
	},
])

const filterSourceItems = ref<TabsItem[]>([
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'Local',
		value: 'local',
	},
	{
		label: 'Web',
		value: 'web',
	},
	{
		label: 'Favorites',
		value: 'favorites',
	},
])
</script>

<template>
	<USidebar rail collapsible="offcanvas">
		<div class="flex h-full flex-col gap-4">
			<div class="flex w-full flex-col gap-2">
				<div class="flex items-center justify-between">
					<span class="text-sm">114 of 514 fonts</span>
					<UTooltip text="Refresh">
						<UButton :icon="icons.refresh" color="neutral" variant="ghost" size="xs" />
					</UTooltip>
				</div>
				<UInput :icon="icons.search" placeholder="Search..." />
				<div class="flex min-w-full gap-2">
					<UTabs :items="previewLayout" color="neutral" size="sm" :content="false" />
					<UButton
						:icon="icons.plus"
						label="Add"
						color="neutral"
						variant="soft"
						size="sm"
						class="w-full"
					/>
				</div>
			</div>
			<USeparator />
			<div class="flex flex-col gap-2">
				<UFormField label="Preview">
					<UTextarea
						placeholder="The quick brown fox jumps over the lazy dog."
						:rows="2"
						autoresize
					/>
					<template #hint>
						<UTooltip text="Reset">
							<UButton :icon="icons.reset" color="neutral" variant="ghost" size="xs" />
						</UTooltip>
					</template>
				</UFormField>
				<UFormField label="Font size" orientation="horizontal">
					<FontSizeInput class="max-w-26" />
				</UFormField>
			</div>
			<USeparator />
			<UFormField label="Filter">
				<UTabs :items="filterSourceItems" color="neutral" size="sm" :content="false" />
				<template #hint>
					<UTooltip text="Reset">
						<UButton :icon="icons.reset" color="neutral" variant="ghost" size="xs" />
					</UTooltip>
				</template>
			</UFormField>
		</div>
	</USidebar>
</template>

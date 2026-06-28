<script setup lang="ts">
const appConfig = useAppConfig()

async function handleWindowDrag(event: MouseEvent) {
	if (!isTauri) return

	const target = event.target as HTMLElement
	if (
		target.closest('button') ||
		target.closest('[role="button"]') ||
		target.closest('input') ||
		target.closest('select')
	) {
		return
	}

	if (event.button !== 0) return

	try {
		const windows = await useTauriWindowGetAllWindows()

		windows.forEach((window) => {
			if (window.label === 'main') window.startDragging()
		})
	} catch (error) {
		console.error(error)
	}
}
</script>

<template>
	<div
		class="sticky top-0 z-50 flex h-(--ui-header-height) items-center justify-between border-b bg-default pl-2"
		@mousedown="handleWindowDrag"
	>
		<section class="flex h-full items-center gap-0.5">
			<span class="text-sm">{{ appConfig.app.name }}</span>
		</section>

		<LayoutWindowControlButtons v-if="isTauri" />
	</div>
</template>

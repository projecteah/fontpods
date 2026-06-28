<script setup lang="ts">
// variant, orientation props

const appConfig = useAppConfig()
</script>

<template>
	<div class="group/font-item-card flex flex-col rounded-2xl bg-muted/50 p-1">
		<div class="rounded-xl bg-default p-2">
			<span class="text-3xl">The quick brown fox jumps over the lazy dog.</span>
		</div>
		<div class="flex items-center justify-between gap-2 py-1 pl-2 text-sm text-muted">
			<div class="flex gap-2">
				<span class="font-medium">Noto Sans</span>
				<span class="text-dimmed">7 styles</span>
			</div>
			<UTooltip
				text="Favorite"
				class="opacity-0 transition-opacity group-hover/font-item-card:opacity-100"
			>
				<UButton :icon="appConfig.ui.icons.star" color="neutral" variant="ghost" size="xs" />
			</UTooltip>
		</div>
	</div>
</template>

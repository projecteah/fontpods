<script setup lang="ts">
const props = defineProps<{
	font: FontData
}>()

const appConfig = useAppConfig()
const fontStore = useFontStore()
const fontListStore = useFontListStore()

const isFavorited = computed(() => fontStore.isFavorite(props.font.postscriptName))

const styleCount = computed(
	() => fontStore.fonts.filter((f) => f.family === props.font.family).length,
)

const previewStyle = computed(() => ({
	fontFamily: `"${props.font.family}"`,
	fontSize: `${fontListStore.fontSize}px`,
}))
</script>

<template>
	<div class="group/font-item-card flex w-full flex-col rounded-2xl bg-muted/50 p-1">
		<div class="h-full rounded-xl bg-default p-2">
			<span :style="previewStyle">{{ fontListStore.previewText || props.font.fullName }}</span>
		</div>
		<div class="flex items-center justify-between gap-2 py-1 pl-2 text-sm text-muted">
			<div class="flex gap-2">
				<span class="font-medium">{{ font.fullName }}</span>
				<span class="text-dimmed">{{ $t('font.styles', { count: styleCount }) }}</span>
			</div>
			<UTooltip
				:text="$t('font.favorite')"
				:class="
					!isFavorited && 'opacity-0 transition-opacity group-hover/font-item-card:opacity-100'
				"
			>
				<UButton
					:icon="isFavorited ? appConfig.ui.icons.starFill : appConfig.ui.icons.star"
					color="neutral"
					variant="ghost"
					size="xs"
					@click="fontStore.toggleFavorite(font.postscriptName)"
				/>
			</UTooltip>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const appConfig = useAppConfig()
const { requestPermission, loading } = useFont()

const localFontDocsUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/Local_Font_Access_API'

const props = withDefaults(
	defineProps<{
		state?: FontEmptyState
	}>(),
	{
		state: 'permission',
	},
)

const config = computed(() => {
	switch (props.state) {
		case 'unsupported':
			return {
				icon: appConfig.ui.icons.caution,
				title: $t('font.empty.unsupported.title'),
				description: $t('font.empty.unsupported.description'),
				actions: [
					{
						label: $t('font.empty.unsupported.action'),
						to: localFontDocsUrl,
						target: '_blank',
						color: 'neutral',
						variant: 'subtle',
					},
				] as ButtonProps[],
			}
		case 'permission':
			return {
				icon: appConfig.ui.icons.text,
				title: $t('font.empty.permission.title'),
				description: $t('font.empty.permission.description'),
				actions: [
					{
						label: $t('font.empty.permission.grant'),
						color: 'primary',
						loading: loading.value,
						onClick: requestPermission,
					},
				] as ButtonProps[],
			}
		case 'empty':
			return {
				icon: appConfig.ui.icons.text,
				title: $t('font.empty.empty.title'),
				description: $t('font.empty.empty.description'),
				actions: [],
			}
	}
})
</script>

<template>
	<div class="flex size-full items-center justify-center">
		<UEmpty
			variant="naked"
			:icon="config.icon"
			:title="config.title"
			:description="config.description"
			:actions="config.actions"
		/>
	</div>
</template>

<template>
	<div class="flex size-full items-center justify-center">
		<UEmpty
			variant="naked"
			icon="i-ph-text-t"
			title="Grant permission to list fonts"
			description="You're all caught up."
			:actions="[
				{
					label: 'Grant Permission',
					color: 'primary',
				},
				{
					label: 'Refresh',
					color: 'neutral',
					variant: 'subtle',
				},
			]"
		/>
	</div>
</template>

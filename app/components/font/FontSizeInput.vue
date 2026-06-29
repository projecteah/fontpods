<script setup lang="ts">
defineProps<{
	modelValue: number
	min?: number
	max?: number
}>()

const emit = defineEmits<{
	'update:modelValue': [value: number]
}>()

const items = [8, 12, 14, 20, 24, 32, 40, 64, 96]
</script>

<template>
	<UInputMenu
		:model-value="modelValue"
		:items="items"
		:min="min ?? 8"
		:max="max ?? 100"
		type="number"
		:content="{ hideWhenEmpty: true }"
		@update:model-value="emit('update:modelValue', Number($event))"
	/>
</template>

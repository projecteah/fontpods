<script setup lang="ts">
const items = ref([8, 12, 14, 20, 24, 32, 40, 64, 96, 120])
</script>

<template>
	<UInputMenu
		:items="items"
		:min="8"
		:max="120"
		type="number"
		mode="autocomplete"
		:content="{ hideWhenEmpty: true }"
	/>
</template>

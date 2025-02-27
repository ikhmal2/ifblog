<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue"
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
	return queryCollection('content').path(route.path).first()
})

if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
	<MainLayout>
		<ContentRenderer v-if="page" :value="page" />
	</MainLayout>
</template>

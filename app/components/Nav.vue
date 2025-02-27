<template>
	<header class="flex justify-between items-center px-8 py-4">
		<a href="/">
			<span class="logo">Ikhmal Fahmi</span>
		</a>
		<div id="site-header-actions">
			<Icon name="material-symbols:dark-mode" size="2rem" mode="svg" />
		</div>
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
	position: sticky;
	z-index: 2;
	top: 0;
	left: 0;
	background-color: linear-gradient(to top, transparent 0, var(--top-color) 100%);
	width: 100dvw;
}
</style>
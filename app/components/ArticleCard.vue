<template>
	<UCard class="lg:w-1/2 w-full my-4" :ui="ui">
		<template #header>
			<a href="/blog/whimsical-animations/">
				<h5>A Million Little Secrets</h5>
			</a>
			<p class="text-IFsecondary">Deconstructing the “Whimsical Animations” landing page</p>
		</template>
		<p class="e1la1cd6">I spent the past few weeks packing as many easter eggs as I could into my latest project,
			and in this blog post, I want to dig into some of the more interesting details! If you’re interested in
			animations/interactions, you’ll want to check this one out; I share a bunch of my favourite secrets and
			tricks. 😄</p>
		<template #footer>
			<button class="bg-IFcta p-4 rounded-lg max-w-min hover:bg-lime-400">
				<a class="text-nowrap text-gray-700" href=" /blog/whimsical-animations/">
					Read more
				</a>
			</button>
		</template>
	</UCard>
</template>

<script setup lang="ts">
const ui = {
	background: 'bg-IFprimary dark:bg-IFprimary',
	divide: 'divide-y-0',
	header: {
		padding: 'py-0 pt-4',
	},
	footer: {
		padding: 'py-0 pb-4'
	}
}
</script>
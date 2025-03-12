<template>
  <UCard class="my-4 w-full lg:w-1/2" :ui="ui">
    <template #header>
      <a href="#">
        <h5>A Million Little Secrets</h5>
      </a>
      <p class="text-IFsecondary">
        Deconstructing the “Whimsical Animations” landing page
      </p>
    </template>
    <p class="e1la1cd6">
      I spent the past few weeks packing as many easter eggs as I could into my
      latest project, and in this blog post, I want to dig into some of the more
      interesting details! If you’re interested in animations/interactions,
      you’ll want to check this one out; I share a bunch of my favourite secrets
      and tricks. 😄
    </p>
    <template #footer>
      <button class="max-w-min rounded-lg bg-IFcta p-4 hover:bg-lime-400">
        <a class="text-nowrap text-gray-700" href="#"> Read more </a>
      </button>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const ui = {
  background: "bg-IFprimary dark:bg-IFprimary",
  divide: "divide-y-0",
  header: {
    padding: "py-0 pt-4",
  },
  footer: {
    padding: "py-0 pb-4",
  },
};
</script>

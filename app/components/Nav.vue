<template>
  <header class="container mx-auto flex items-center justify-between py-4">
    <a href="/">
      <span class="logo">Ikhmal Fahmi</span>
    </a>
    <div id="site-header-actions">
      <Icon name="material-symbols:dark-mode" size="2rem" mode="svg" />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100dvw;
  backdrop-filter: blur(16px);
}
</style>

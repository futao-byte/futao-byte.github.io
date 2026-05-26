<template>
  <DefaultTheme.Layout>
    <template #home-hero-before>
      <div class="hero-glow"></div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<style>
.hero-glow {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00f3ff, #ff2bd6, transparent);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>

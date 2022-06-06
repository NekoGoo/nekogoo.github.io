<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';

// import Layout from './views/layouts/AppDefaultLayout.vue';
import AppDefaultLayout from './views/layouts/AppDefaultLayout.vue';
</script>

<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
<!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
<template>
  <!-- <Layout /> -->
  <!-- <component :is="$route.meta.layout || 'div'"> -->
  <component :is="$route.meta.layout || AppDefaultLayout">
    <router-view />
  </component>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

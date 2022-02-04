<script setup lang="ts">
// import HelloWorldVuex from '../../components/HelloWorldVuex.vue';
import NavFooter from './NavFooter.vue';
import NavHeader from './NavHeader.vue';
</script>

<template>
  <NavHeader />

  <!-- <HelloWorldVuex msg="Hello Vue 3 + TypeScript + Vite" /> -->

  <router-view />

  <NavFooter />
</template>

<!-- <style lang="scss" scoped>
@import '../../styles/index.scss';
@import '../../styles/main.scss';
</style> -->

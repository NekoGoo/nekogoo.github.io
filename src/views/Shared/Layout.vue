<script setup lang="ts">
import NavFooter from './NavFooter.vue';
import NavHeader from './NavHeader.vue';
</script>

<template>
  <NavHeader />

  <router-view />

  <NavFooter />
</template>

<!-- <style lang="scss" scoped>
@import '../../styles/index.scss';
@import '../../styles/main.scss';
</style> -->

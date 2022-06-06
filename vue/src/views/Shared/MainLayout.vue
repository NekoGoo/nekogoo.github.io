<script setup lang="ts">
import NavFooter from './NavFooter.vue';
import NavHeader from './NavHeader.vue';
</script>

<template>
  <NavHeader />

  <router-view />

  <NavFooter />
</template>

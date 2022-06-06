<script setup lang="ts">
import cocBackground from '../../assets/images/coc/interface/background.jpg';
import GameHome from '../Game/Home.vue';
// import HelloWorldVuex from '../../components/HelloWorldVuex.vue';
import NavFooter from '../Game/Shared/NavFooter.vue';
import NavHeader from '../Game/Shared/NavHeader.vue';
import NavSidebar from '../Game/Shared/NavSidebar.vue';

// --- Background Styles ---
document.body.style.backgroundColor = '#ebd7a5';
const app = document.getElementById('app');
if (app) {
  app.style.backgroundImage = `url(${cocBackground})`;
  app.style.backgroundRepeat = 'no-repeat';
}
</script>

<template>
  <NavHeader />
  <NavSidebar />

  <!-- <HelloWorldVuex msg="Hello Vue 3 + TypeScript + Vite" /> -->

  <!-- <router-view /> -->
  <GameHome />

  <NavFooter />
</template>

<style scoped lang="scss">
// @import '../../styles/coc.scss';
</style>

<script setup lang="ts">
// import HelloWorldVuex from '../../components/HelloWorldVuex.vue';
import NavFooter from "../Shared/NavFooter.vue";
import NavHeader from "../Shared/NavHeader.vue";
// --- Background Styles ---
document.body.style.backgroundColor = "#cff";
const app = document.getElementById("app");
if (app) {
  app.style.backgroundImage = `none`;
}
</script>

<template>
  <NavHeader />

  <!-- <HelloWorldVuex msg="Hello Vue 3 + TypeScript + Vite" /> -->

  <router-view />

  <NavFooter />
</template>

<style scoped lang="scss">
@import "../../styles/font-faces/CandyShop.scss";
@import "../../styles/main.scss";
// @import '../../styles/index.scss';
</style>

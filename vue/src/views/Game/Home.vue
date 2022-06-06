<script setup lang="ts">
import { onMounted } from 'vue';

// lifecycle hooks: https://vuejs.org/guide/essentials/lifecycle.html
onMounted(() => {
  console.log(`life cycle hook from game home`);
});
</script>

<template>
  <main>
    <div id="maintext">The game is loading. Please be patient. If it doesn't load, make sure JavaScript is enabled then refresh.</div>
    <div id="tooltip">Tooltip Text</div>
  </main>
</template>

<style scoped lang="scss"></style>

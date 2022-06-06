<script setup lang="ts">
import { mainMenu } from '../../../erpge/systems/main';
</script>

<!-- https://getbootstrap.com/docs/5.3/examples/headers -->
<!-- https://getbootstrap.com/docs/5.3/components/navbar -->
<!-- https://getbootstrap.com/docs/5.3/utilities/spacing -->
<template>
  <header>
    <div id="topbuttonset">
      <div class="buttonrow">
        <div id="buttonMain" class="button" @click="mainMenu">Main Menu</div>
        <div id="buttonData" class="button buttonbuffer">Data</div>
        <div id="buttonLevel" class="button">Level Up</div>
        <div id="buttonStats" class="button">Stats</div>
        <div id="buttonPerks" class="button">Perks</div>
        <div id="buttonAppearance" class="button">Appearance</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>

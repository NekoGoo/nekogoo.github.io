<!-- https://vuejsexamples.com/dark-mode-switcher-piece-of-vuejs-scss-code-from-eruca-project -->
<!-- Vue 3 can define actual TypeScript variables & functions -->
<!-- https://v3.vuejs.org/api/sfc-script-setup.html -->
<script setup lang="ts">
// let modesrc = '/assets/sun.png';
import modesrc_light from '../../assets/images/ui/sun.png';
import modesrc_dark from '../../assets/images/ui/moon.png';

let mode = 'Light';
let modesrc = modesrc_light;
let modestyle = false;

function switchMode(mode: string): void {
  if (mode == 'Light') {
    mode = 'Dark';
    modesrc = modesrc_dark;
    modestyle = true;
  } else {
    mode = 'Light';
    modesrc = modesrc_light;
    modestyle = false;
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <div class="mode-container mt-2">
            <span @click="switchMode(mode)" ref="ModeInfo" class="mode-info" :class="{ 'dark-mode': modestyle }">
              <img :src="modesrc" />
              <strong>{{ mode }}</strong>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
// Toggle Light / Dark Mode
// From Scratch
$lightColor: #feaf41;
$DarkColor: #c0c0c0;
$lightColorShadow: #fedb41;
$DarkColorShadow: #2b2b2b;
.mode-container {
  animation: DarkTheShadow 0.7s ease-in-out;
  span {
    cursor: pointer;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 26px;
    box-shadow: 0 0 5px $lightColorShadow;
    font-size: 20px;
    font-weight: bold;
    color: $lightColor;
    position: relative;
  }
  img {
    width: 30px;
    position: relative;
    animation: LightTheMode 0.7s ease-in-out;
    animation-direction: alternate;
    right: 0;
  }
  strong {
    position: relative;
    left: 0;
    animation: LightTheModeText 0.7s ease-in-out;
    animation-direction: alternate;
    outline: unset;
  }
  .dark-mode {
    box-shadow: 0 0 5px $DarkColor;
    color: $DarkColor;
    animation: LightTheShadow 0.7s ease-in-out;
    img {
      position: relative;
      animation: DarkTheMode 0.7s ease-in-out;
      animation-direction: alternate;
      right: -45px;
    }
    strong {
      left: -35px;
      position: relative;
      animation: DarkTheModeText 0.7s ease-in-out;
      animation-direction: alternate;
    }
  }
}
@keyframes DarkTheMode {
  from {
    right: 0px;
  }
  to {
    right: -45px;
  }
}
@keyframes DarkTheShadow {
  from {
    box-shadow: 0 0 5px $lightColorShadow;
  }
  to {
    box-shadow: 0 0 5px $DarkColor;
  }
}
@keyframes LightTheShadow {
  from {
    box-shadow: 0 0 5px $DarkColor;
  }
  to {
    box-shadow: 0 0 5px $lightColorShadow;
  }
}
@keyframes DarkTheModeText {
  from {
    color: $lightColor;
    left: 0px;
  }
  to {
    color: $DarkColor;
    left: -35px;
  }
}
@keyframes LightTheMode {
  from {
    right: -45px;
  }
  to {
    right: 0;
  }
}
@keyframes LightTheModeText {
  from {
    color: $DarkColor;
    left: -35px;
  }
  to {
    color: $lightColor;
    left: 0px;
  }
}
</style>

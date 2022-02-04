<script setup lang="ts">
// import ModeSwitch from '../../components/ui/ModeSwitch.vue';
</script>

<template>
  <header class="p-2 mb-4 border-bottom nav-main-bg">
    <nav class="container d-flex flex-wrap">
      <ul class="nav justify-content-lg-start col-12 col-lg-auto me-lg-auto">
        <li class="nav-item">
          <router-link router-link to="/" class="nav-link px-2 candy-shop nekogoo-header">NekoGoo</router-link>
        </li>
      </ul>
      <ul class="nav justify-content-center col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link router-link to="/" class="nav-link ml-5 px-2 link-secondary">Home</router-link>
        </li>
        <!-- <li class="nav-item"><a class="nav-link px-2 link-dark">Blog</a></li> -->
        <li class="nav-item">
          <router-link router-link to="/about" class="nav-link ml-5 px-2 link-dark">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import Menu from './components/menu.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
  // Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
@font-face {
  font-family: "PT Sans Narrow";
  src: local("PT Sans Narrow"),
    url(./fonts/PTSansNarrow-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./fonts/Roboto-Thin.ttf) format("truetype");
}
</style>

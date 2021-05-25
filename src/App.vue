<template>
  <div class="flex flex-wrap content-start ml-32">
    <div class="w-3/6 bg-gray-200 h-half-screen">
      <Menu></Menu>
    </div>
    <div class="w-3/6 h-half-screen" style="background-color:#e0ccb4;"></div>
    <div class="w-3/6 h-half-screen bg-gray-300">
    
    </div>
    <div class="w-3/6 bg-blue-200 h-half-screen"></div>
  </div>
</template>

<script setup>
import Menu from './components/menu.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

.h-half-screen {
  height:50vh;
}

</style>

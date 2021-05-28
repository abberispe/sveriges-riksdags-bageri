<template>
<div>
  <div class="container mx-auto">
    <ul class="flex justify-around">
      <li>
        <router-link to="/">Hem</router-link>
      </li>
      <li>
        <router-link to="/products">Produkter</router-link>
      </li>
      <li>
        <router-link to="/about">Om Oss</router-link>
      </li>
    </ul>
  </div>
  <router-view/>
</div>
</template>

<script setup>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>

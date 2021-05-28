<template>
  <div class="container mx-auto">
      <div class="grid md:grid-rows-4 md:grid-flow-col grid-col-1 gap-2.5 justify-center">
          <cake v-for="cake in products" :key="cake.id" :title="cake.title" :desc="cake.previewDescription" :url="cake.image"></cake>
      </div>
  </div>
</template>

<script>

import Cake from "../components/Cake.vue"

export default {
    components: {
        Cake
    },
    computed: {
        products () {
            return this.$store.state.products
        }
    },
    mounted () {
        this.$store.dispatch('getProducts')
        
    }
    
}
</script>

<style>

</style>
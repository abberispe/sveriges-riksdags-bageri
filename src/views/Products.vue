<template>
  <div class="container mx-auto">
      <div class="m-6">
          <h1 class="text-2xl">Klassiker från hela världen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates consequuntur nobis dolorem sint, minima cupiditate autem eligendi necessitatibus et doloremque quibusdam accusamus velit iusto odio veritatis rerum natus amet incidunt?</p>
      </div>
      
      <div class="grid md:grid-rows-4 md:grid-flow-col grid-col-1 gap-2.5 justify-center">
          <cake v-for="cake in products" :key="cake.id" :id="cake.id" :price="cake.price" :title="cake.title" :desc="cake.previewDescription" :url="cake.image"></cake>
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
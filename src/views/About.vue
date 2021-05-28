<template>
  <div class="container mx-auto">

      <h1 class="text-center font-serif text-2xl">Vi som jobbar här</h1>

      <div class="flex md:flex-row flex-col justify-evenly gap-2.5" >
          <staff-card v-for="worker in workers" :key="worker.id" :name="worker.name" :mail="worker.email" :tel="worker.phone" :role="worker.role"/>
      </div>
  </div>
</template>

<script>

import StaffCard from "../components/StaffCard.vue"

export default {
    components: {
        StaffCard
    },
    computed: {
        workers () {
            return this.$store.state.workers
        }
    },
    mounted () {
        this.$store.dispatch("getWorkers")
    }
}
</script>

<style>

</style>
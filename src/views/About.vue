<template>
<div  class="body w-screen h-screen">

    <div class="container mx-auto h-screen flex flex-col justify-center gap-8">

      <h1 class="text-center text-white font-serif text-4xl">Vi som jobbar här</h1>

      <p class="text-white text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas accusantium vel vero? Autem eius at, aperiam officia quisquam fuga. Eos consequatur unde odio quia quod? Voluptates ad fuga labore.</p>

      <div class="flex md:flex-row flex-col justify-evenly gap-2.5" >
          <staff-card v-for="worker in workers" :key="worker.id" :name="worker.name" :mail="worker.email" :tel="worker.phone" :avatar="worker.avatar" :role="worker.role"/>
      </div>
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

<style scoped>

.body { 
  background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        /* bottom, image */
        url('https://www.seattlemag.com/sites/default/files/field/image/1-lead_65.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
}

</style>
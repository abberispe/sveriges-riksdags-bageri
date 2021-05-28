<template>
  <div class="container mx-auto">

      <h1 class="text-center font-serif text-2xl">Vi som jobbar här</h1>

      <div class="flex md:flex-row flex-col justify-evenly gap-2.5" >
          <staff-card name="Florence Stokes" mail="Horace50@gmail.com" tel="(832) 502-2080 x73152" role="baker"/>
          <staff-card name="Florence Stokes" mail="Horace50@gmail.com" tel="(832) 502-2080 x73152" role="baker"/>
          <staff-card name="Florence Stokes" mail="Horace50@gmail.com" tel="(832) 502-2080 x73152" role="baker"/>
          <staff-card name="Florence Stokes" mail="Horace50@gmail.com" tel="(832) 502-2080 x73152" role="baker"/>
          <staff-card name="Florence Stokes" mail="Horace50@gmail.com" tel="(832) 502-2080 x73152" role="baker"/>
      </div>

  </div>
</template>

<script>

import StaffCard from "../components/StaffCard.vue"

export default {
    components: {
        StaffCard
    }
}
</script>

<style>

</style>
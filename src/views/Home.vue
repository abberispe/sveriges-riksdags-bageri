<template>
  <div class="flex flex-cols">
    <div class="h-screen w-48 left-0 bg-blue-900 flex flex-col">
      <div>
        <img
          src="../images/Palme.jpg"
          class="object-cover w-full h-48 filter brightness-50"
        >
      </div>
      <div>
        <img
          src="../images/Per.png"
          class="object-cover w-full h-48 filter brightness-50"
        >
      </div>
      <div>
        <img
          src="../images/Carl.jpg"
          class="object-cover w-full h-48 filter brightness-50"
        >
      </div>
    </div>
    <div class="flex flex-wrap content-start">
      <div class="w-3/6 bg-gray-200 h-half-screen">
        <div
          class="w-100 h-12 bg-blue-900 grid grid-cols-4 text-center text-white text-xl"
          style="font-family: 'Roboto';"
        >
          <div class="mt-2">
            <router-link to="/home">Hem</router-link>
          </div>
          <div class="mt-2">
            <router-link to="/cart">Din varukorg</router-link>
          </div>
          <div class="mt-2">
            <router-link to="/about">Om oss</router-link>
          </div>
          <div class="mt-2">
            <router-link to="/products">Produkter</router-link>
          </div>
        </div>
      </div>
      <div
        class="w-3/6 h-half-screen text-white flex justify-center items-center flex-col"
        style="background-color:#e0ccb4;"
      >
        <p
          class="text-center text-5xl"
          style="font-family: 'PT Sans Narrow';"
        >
          Sveriges riksdags bageri
        </p>
        <p
          class="text-center text-lg"
          style="font-family: 'Roboto';"
        >
          KVALITET SEDAN 1914
        </p>
      </div>
      <div class="w-3/6 h-half-screen bg-blue-600">
        <img
          src="../images/Bageri.png"
          class="object-cover w-full h-half-screen"
        >
      </div>
      <div class="w-3/6 bg-blue-200 h-half-screen"></div>
    </div>
  </div>

</template>

<script>
import Menu from '../components/menu.vue'
</script>

<style>
.h-half-screen {
  height: 50vh;
}
</style>
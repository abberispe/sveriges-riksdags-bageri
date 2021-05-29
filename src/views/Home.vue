<template>
    <div class="flex flex-wrap content-start">
      <div
        class="w-3/6 h-half-screen text-white flex justify-center items-center flex-col"
        style="background-color:#e0ccb4;"
      >
        <p
          class="text-center text-6xl"
          style="font-family: 'PT Sans Narrow';"
        >
          Sveriges riksdags bageri
        </p>
        <p
          class="text-center text-2xl"
          style="font-family: 'Roboto';"
        >
          KVALITET SEDAN 1914
        </p>
      </div>
      
      <div class="w-3/6 bg-gray-200 h-half-screen flex flex-wrap content-start">
        <div class="w-3/6 bg-gray-400 h-half flex justify-center items-center">
          <router-link to="/home">
            <a class="text-white text-4xl hover:text-gray-300" style="font-family: 'Raleway';" href="#">Hem</a>
          </router-link>
        </div>
        <div class="w-3/6 bg-gray-500 h-half flex justify-center items-center">
          <router-link to="/products">
            <a class="text-white text-4xl hover:text-gray-300" style="font-family: 'Raleway';" href="#">Produkter</a>
          </router-link>
        </div>
        <div class="w-3/6 bg-gray-600 h-half flex justify-center items-center">
          <router-link to="/cart">
            <a class="text-white text-4xl hover:text-gray-300" style="font-family: 'Raleway';" href="#">Din varukorg</a>
          </router-link>
        </div>
        <div class="w-3/6 bg-gray-700 h-half flex justify-center items-center">
          <router-link to="/about">
            <a class="text-white text-4xl hover:text-gray-300" style="font-family: 'Raleway';" href="#">Om oss</a>
          </router-link>
        </div>
      </div>
      <div class="w-3/6 bg-gray-200 h-half-screen flex flex-wrap content-start">
        <div class="w-3/6 bg-gray-400 h-half flex justify-center items-center">
          <img
          src="../images/politicians/Palme.jpg"
          class="object-cover w-full h-full filter brightness-50"
        >
        </div>
        <div class="w-3/6 bg-gray-500 h-half flex justify-center items-center">
          <img
          src="../images/politicians/Per.jpg"
          class="object-cover w-full h-full filter brightness-50"
        >
        </div>
        <div class="w-3/6 bg-gray-600 h-half flex justify-center items-center">
          <img
          src="../images/politicians/Carl.jpg"
          class="object-cover w-full h-full filter brightness-50"
        >
        </div>
        <div class="w-3/6 bg-gray-700 h-half flex justify-center items-center">
          <img
          src="../images/politicians/Palme.jpg"
          class="object-cover w-full h-full filter brightness-50"
        >
        </div>
      </div>
      <div class="w-3/6 bg-blue-200 h-half-screen">
          <div class="flex flex-col justify-center items-center">
                <div class="px-1/2 w-1/2 mt-24">
                    <div class="mt-4">
                        <input placeholder="Användarnamn" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
                    </div>
                    <div class="mt-4">
                        <input placeholder="Lösenord" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                    </div>
                    <div class="mt-8">
                        <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" style="font-family: 'Raleway';">Logga in</button>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" class="text-xs text-gray-500 uppercase" style="font-family: 'Raleway';">Registrera här</a>
                        <span class="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
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

.h-half {
  height: 50%;
}
</style>
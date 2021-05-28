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
    </div>
    <div class="flex flex-wrap content-start">
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
      <div class="w-3/6 bg-gray-200 h-half-screen flex flex-wrap content-start">
        <div class="w-3/6 bg-gray-400 h-half-screen flex justify-center items-center">
          <p class="text-white text-5xl" style="font-family: 'Roboto';">Hem</p>
        </div>
        <div class="w-3/6 bg-gray-500 h-half-screen flex justify-center items-center">
          <p class="text-white text-5xl" style="font-family: 'Roboto';">Produkter</p>
        </div>
        <div class="w-3/6 bg-gray-600 h-half-screen flex justify-center items-center">
          <p class="text-white text-5xl" style="font-family: 'Roboto';">Din varukorg</p>
        </div>
        <div class="w-3/6 bg-gray-700 h-half-screen flex justify-center items-center">
          <p class="text-white text-5xl" style="font-family: 'Roboto';">Om oss</p>
        </div>
      </div>
      <div class="w-3/6 h-half-screen bg-blue-600">
        <img
          src="../images/Bageri.png"
          class="object-cover w-full h-full"
        >
      </div>
      <div class="w-3/6 bg-blue-200 h-half-screen">
          <div class="flex flex-col justify-center items-center">
                <div class="px-auto w-1/2">
                    <div class="mt-4">
                        <input placeholder="Användarnamn" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
                    </div>
                    <div class="mt-4">
                        <input placeholder="Lösenord" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                    </div>
                    <div class="mt-8">
                        <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Logga in</button>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" class="text-xs text-gray-500 uppercase">Registrera här</a>
                        <span class="border-b w-1/5 md:w-1/4"></span>
                    </div>
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
  height: 50%;
}
</style>
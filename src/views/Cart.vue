<template>
  <div class="body w-screen h-screen flex flex-cols justify-center items-center">
      <div class="w-1/2 h-2/3 bg-white rounded-xl">
        <div class="w-full h-12 mt-2 ml-2 rounded-xl">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </router-link>
        </div>
        <div class="h-4/5 w-full overflow-auto">
            <div class="flex items-center px-4 mt-4">
                <table class='mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300'>
                    <tbody class="divide-y divide-gray-200">
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="Chokladtårta" imageurl="../images/cake.jpg"></ProductRow>
                        <ProductRow productname="aaa" imageurl="../images/cake.jpg"></ProductRow>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="h-16 w-full">
            <button class="font-bold py-2 px-4 rounded bg-green-500 text-white hover:bg-green-700 float-right mt-4 mr-4">Beställ</button>
        </div>
      </div>
  </div>
</template>

<script>

import ProductRow from '../components/ProductRow.vue'


export default {
    components: {
        ProductRow
    }
}

</script>

<style>

.body { 
  background: url(../images/riksdagshuset.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
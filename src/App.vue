<template>
  <div> 
    <div v-if="currentRouteName != 'Home' && currentRouteName != 'Cart'" class="flex gap-3 items-baseline border-b-2 border-blue-200" >
      <p class="text-left text-3xl m-2" style="font-family: 'PT Sans Narrow';">
          Sveriges riksdags bageri
      </p>
      <router-link  to="/">
        <p :class="{'underline': currentRouteName === 'Home'}" class="text-gray-600">Hem</p>
      </router-link>
      <router-link  to="/products">
        <p :class="{'underline': currentRouteName === 'Products'}" class="text-gray-600">Produkter</p>
      </router-link>
      <router-link to="/about">
        <p :class="{'underline': currentRouteName === 'About'}" class="text-gray-600">Om Oss</p>
      </router-link>

       <router-link to="/cart">
        <p :class="{'underline': currentRouteName === 'Cart'}" class="text-gray-600 text-left">Varukorg</p>
      </router-link>
    </div>
    <router-view />
  </div>
</template>


<script>
  // Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
  export default {

    computed: {
      currentRouteName() {
          return this.$route.name;
      }
    }
   
  }
</script>

<style>
@font-face {
  font-family: "PT Sans Narrow";
  src: local("PT Sans Narrow"),
    url(./fonts/PTSansNarrow-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./fonts/Roboto-Thin.ttf) format("truetype");
}
@font-face {
  font-family: "Raleway";
  src: local("Raleway"), url(./fonts/Raleway-Regular.ttf) format("truetype");
}
</style>

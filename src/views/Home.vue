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
          <router-link to="/">
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
          src="../images/politicians/Ola.jpg"
          class="object-cover w-full h-full filter brightness-50"
        >
        </div>
      </div>
      <div class="w-3/6 bg-blue-200 h-half-screen flex flex-col justify-center items-center">
          
            <div v-if="$store.getters.isLoggedIn">
                <p class="text-white text-4xl" style="font-family: 'Raleway';" href="#">God dag, {{$store.state.user.name}}</p>
            </div>
            <div v-else class="px-1/2 w-1/2 mt-24">
              <div v-if="loginForm">
                <div class="mt-4">
                    <input placeholder="Användarnamn" v-model="email" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
                    <span v-if="wrongPassOrEm" class="text-red-500"> * Fel Lösenord eller Email</span>
                </div>
                <div class="mt-4">
                    <input placeholder="Lösenord" v-model="password" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                </div>
                <div class="mt-8">
                    <button @click="login" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" style="font-family: 'Raleway';">Logga in</button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <button @click="loginForm = false" class="text-xs text-gray-500 uppercase" style="font-family: 'Raleway';">Registrera här</button>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
              </div>

              <div v-else>
                <div class="mt-4">
                    <input placeholder="Namn" v-model="newUser.name" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
                </div>
                <div class="mt-4">
                    <input placeholder="Email" v-model="newUser.email" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
                    <span v-if="sameEmail" class="text-red-500"> * Email upptagen</span>
                </div>
                <div class="mt-4">
                    <input placeholder="Avatar" v-model="newUser.avatar" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text">
                </div>
                <div class="mt-4">
                    <input placeholder="Lösenord" v-model="newUser.password" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                </div>
                
                <div class="mt-8">
                    <button @click="signUp" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" style="font-family: 'Raleway';">Registrera</button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <button @click="loginForm = true" class="text-xs text-gray-500 uppercase" style="font-family: 'Raleway';">Logga in här</button>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
              
              </div>    
    
                
            </div>
      </div>
    </div>
</template>

<script>
import Menu from '../components/menu.vue'

export default {
  data () {
    return {
      email: "",
      password: "",
      loginForm: true,
      newUser: {
        name: "",
        email: "",
        avatar: "",
        password: ""
      },
      wrongPassOrEm: false,
      sameEmail: false,
    }
  },
  methods: {

    login() {
      console.log(this.email, this.password)
      this.$store.dispatch("login", [this.email, this.password]).then(status => {
        if (status) {
          console.log("success")
         
        } else {
          console.log("wrong password or email")
           this.wrongPassOrEm = true
        }
      }).then(() => {
        console.log(this.$store.state.user)
      })
    } ,
    signUp () {
            this.$store.dispatch("createAccount", this.newUser).then(status => {
                if (status) {
                    console.log("account created")
                } else {
                    console.log("same email")
                    this.sameEmail = true
                }
            })
        }
  }
}


</script>

<style>
.h-half-screen {
  height: 50vh;
}

.h-half {
  height: 50%;
}
</style>
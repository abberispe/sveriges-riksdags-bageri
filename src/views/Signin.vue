<template>
  <div class="w-screen bg-blue-200 h-screen flex justify-center">
       <div class="w-3/6 bg-blue-200 h-half-screen flex flex-col justify-center items-center">
          <h1 class="text-white text-2xl">Logga in / Skapa ett konto för att visa varukorgen</h1>
            <div class="px-1/2 w-1/2 mt-24">
              <div v-if="loginForm">
                <div class="mt-4">
                    <input placeholder="Användarnamn" v-model="email" class="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
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
            }

        }
        
    },
    methods: {
        login() {
            this.$store.dispatch("login", [this.email, this.password]).then(status => {
                if (status) {
                    console.log("success")
                    this.$router.push(this.$route.query.redirect || '/')
                } else {
                    console.log("wrong password or email")
                }
            })
        },
        signUp () {
            this.$store.dispatch("createAccount", this.newUser).then(status => {
                if (status) {
                    console.log("account created")
                } else {
                    console.log("same email")
                }
            })
        }
    }

}
</script>


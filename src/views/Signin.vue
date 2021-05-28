<template>
  <div>
      <input class="border" placeholder="email" v-model="email">
      <input class="border" v-model="password" placeholder="password" type="password">
      <button class="border" @click="login">Logga in</button>
      <p>{{email}} {{password}}</p>

      <h1>Sign up</h1>
      <input class="border" placeholder="name" v-model="newUser.name">
      <input class="border" v-model="newUser.avatar" placeholder="avatar">
      <input class="border" v-model="newUser.email" placeholder="email">
      <input class="border" v-model="newUser.password" placeholder="password">
      <button class="border" @click="signUp">Skapa konto</button>

  </div>
</template>

<script>
export default {
    data () {
        return {
            email: "",
            password: "",

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


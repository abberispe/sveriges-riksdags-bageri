<template>
  <div>
      <input class="border" v-model="email">
      <input class="border" v-model="password" type="password">
      <button class="border" @click="login">Logga in</button>
      <p>{{email}} {{password}}</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            email: "",
            password: ""
        }
        
    },
    methods: {
        login() {
            this.$store.dispatch("login", [this.email, this.password])
        }
    }

}
</script>


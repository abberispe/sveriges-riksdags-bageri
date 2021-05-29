<template>
  <div>
     {{$store.state.cart}}
  </div>
</template>

<script>
export default {

    mounted () {
        this.$store.dispatch("getCart")
    }

}
</script>

<style>

</style>
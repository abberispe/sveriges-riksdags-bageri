<template>
  <div class="body w-screen h-screen flex flex-cols justify-center items-center">
      <div class="w-1/2 h-2/3 bg-white rounded-xl">
        <div class="w-full h-12 mt-2 ml-2 mr-2 rounded-xl">
            <div class="flex items-center">
                
                <svg @click="$router.go(-1)" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
               
                <div class="bg-white">
                    <nav class="flex flex-col sm:flex-row">
                        <button @click="view = true" :class="{'text-blue-300': view === true, 'border-b-2': view === true}" class="text-gray-600 py-4 px-6 block hover:text-blue-300  focus:outline-none font-medium border-blue-300 ">Varukorg</button>
                        <button @click="view = false" :class="{ 'text-blue-300': view === false , 'border-b-2': view === false}" class="text-gray-600 py-4 px-6 block hover:text-blue-300 border-blue-300  focus:outline-none">Beställningar</button>
                    </nav>
                </div>
            </div>
        </div>
        <div class="h-4/5 w-full overflow-auto">
            <div class="flex items-center px-4 mt-4">
                <table class='mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300'>
                    <tbody class="divide-y divide-gray-200">
                        <div v-if="view">
                            <product-row v-for="item in $store.state.cart" :key="item.id" :id="item.id" :productname="item.title" :imageurl="item.image" :amount="item.quantity"></product-row>
                        </div>
                        <div v-else>
                            <tr v-for="order in $store.state.orders" :key="order.id">{{order.timestamp}} | Totalt: {{order.totalPrice}} kr</tr>
                        
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="view === true" class="h-16 w-full">
            <button @click="placeOrder" class="font-bold py-2 px-4 rounded bg-green-500 text-white hover:bg-green-700 float-right mt-4 mr-4">Beställ</button>
        </div>
      </div>
  </div>
</template>

<script>

import ProductRow from '../components/ProductRow.vue'


export default {
    components: {
        ProductRow
    },
    data () {
        return {
            view: true
        }
    },
    methods: {
        placeOrder() {
            this.$store.dispatch("placeOrder")
            this.$store.dispatch("getPreviousOrders")
            
        }
    },
    mounted () {
        this.$store.dispatch("getPreviousOrders")
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
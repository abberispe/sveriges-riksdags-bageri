<template>
    <tr>
        <td class="w-1/3">
            <div class="flex items-center space-x-3">
                <div class="inline-flex w-10 h-10">
                    <img class='w-10 h-10 object-cover rounded-full' :src="imageurl">
                </div>
                <div>
                    <p>
                        {{productname}}
                    </p>
                </div>
            </div>
        </td>
        <td class="w-1/3">
            <NumberInput v-model:quantity="amount" @update:quantity="updateCart($event)"></NumberInput>
        </td>
        <td class="w-1/3 text-center">
            <a @click="deleteProduct" class="text-red-600 hover:underline">Remove</a>
        </td>
    </tr>
</template>

<script>
import NumberInput from '../components/NumberInput.vue'
export default {
    components: {
        NumberInput
    },
    props: {
        id: Number,
        productname: String,
        imageurl: String,
        amount: Number
    },

    data () {
        return {
            
        }
    },

    methods: {
        updateCart (e) {
            this.$store.commit("UPDATE_ITEM", [this.id, e])
        },
        deleteProduct() {
            this.$store.commit("DELETE_ITEM", this.id)
        }
    }
}
</script>

<style>

</style>
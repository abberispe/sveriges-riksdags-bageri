<template>
    <tr>
        <td class="w-1/3">
            <div class="flex items-center space-x-3">
                <div class="inline-flex w-10 h-10">
                    <img class='w-10 h-10 object-cover rounded-full' src="../images/cake.jpg">
                </div>
                <div>
                    <p>
                        {{productname}}
                    </p>
                </div>
            </div>
        </td>
        <td class="w-1/3">
            <NumberInput></NumberInput>
        </td>
        <td class="w-1/3 text-center">
            <a href="#" class="text-red-600 hover:underline">Remove</a>
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
        productname: String,
        imageurl: String,
        amount: Number
    }
}
</script>

<style>

</style>
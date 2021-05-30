<template>
  <div class="inline-flex">
    <div class="select-none border py-2 px-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-l" @click="decrease">
      -
    </div>

    <input class="border text-center outline-none" type="tel" :value="quantity" @input="$emit('update:quantity', Number($event.target.value))"/>

    <div class="select-none border py-2 px-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-r" @click="increase">
      +
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      quantity: Number
    },
    data() {
      return {
        number: this.quantity,
      };
    },
    methods: {
      increase() {
        this.number++;
        this.$emit('update:quantity', this.number)
      },
      decrease() {
        if (this.number > 1) {
          this.number--;
          this.$emit('update:quantity', this.number)
        }
      },
    },
  };
</script>
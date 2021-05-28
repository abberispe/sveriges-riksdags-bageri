<template>
    
    <div @mouseenter="showInfo = true" @mouseleave="showInfo = false" class="bg-cover bg-center" :style="{width: '340px', height: '400px', backgroundImage: `url(${url})`}">
        
            <div v-if="showInfo" class="bg-black text-white opacity-40 flex flex-col h-full justify-center">
                <h1 class="text-center font-serif text-lg">
                    {{title}}
                </h1>
                <p class="text-center font-serif">
                    {{desc}}
                </p>
                <button class=" mt-2 h-10 w-10 self-center transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        desc: String,
        title: String,
        url: String,
        price: Number
    },
    data () {
        return {
            showInfo: false,
            
        }
    }, 
}
</script>

<style>
</style>
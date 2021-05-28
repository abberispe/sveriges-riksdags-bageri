<template>
  <div class="rounded shadow-lg w-auto flex" style="background-color: #e0ccb4">
        <img class="rounded-full" src="https://cdn.fakercloud.com/avatars/ganserene_128.jpg">
        <div class="m-2">
            <a class="font-serif tracking-wide" :href="mail">{{name}}</a>
            <p class="font-serif">{{role}}</p>
            <p class="text-sm">{{tel}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        name: String, 
        role: String,
        tel: String,
        mail: String
    }

}
</script>

<style>

</style>
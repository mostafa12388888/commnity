<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import DishoverView from './views/DishoverView.vue'
</script>

<template>
    <div>
        <!-- <dishover-view/>
        <fresh-meals/>
        <quick-delivery/>
        <start-today/> -->

    </div>
    <RouterView />
</template>

<style scoped>
button{
    cursor: pointer;
}
</style>

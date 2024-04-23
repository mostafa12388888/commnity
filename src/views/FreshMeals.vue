<script>
import community from '../components/community.vue';

export default {
    components: {
        community,
    }
}
</script>

<template>
    <div>

        <router-link to="/quick-delivery">skip</router-link>
        <div>
            <img src="/public/amico.png" alt="">
            <h1> Fresh Meals</h1>
            <p>Discover fresh, healthy meals delivered straight to your door.</p>
        </div>
        <community />
    </div>
</template>
<style>
</style>
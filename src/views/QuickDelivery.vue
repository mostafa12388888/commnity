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

        <router-link to="/start-today">skip</router-link>
        <div>
            <img src="/public/pana.png" alt="">
            <h1> Quick Delivery</h1>
            <p>Get your meals delivered quickly and conveniently</p>
        </div>
        <community />
    </div>
</template>
<style></style>
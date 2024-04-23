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

        <router-link to="/home">Start</router-link>
        <div>
            <img src="/public/panas.png" alt="">
            <h1> Quick Delivery</h1>
            <p>Start your culinary journey with us today!</p>
        </div>
        <community />
    </div>
</template>
<style></style>
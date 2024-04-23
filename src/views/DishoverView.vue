<script>
export default {
    created() {
        // Using setTimeout in the created hook to navigate to "/fresh-meal" after 5000 milliseconds (5 seconds)
        setTimeout(() => {
            // this.navigateToFreshMeal();
            this.$router.push("/fresh-meal");
        }, 5000);
    },
    
}
</script>

<template>
    <div>
        <img src="/public/Vector.png" alt="">
        <h1>Dishover</h1>
    </div>
</template>
<style scoped>

</style>
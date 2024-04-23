
<script>
</script>
<template>


    <div>

        <router-link to="/fresh-meal"><button class="circuit"
                :class="{ active: $route.path ==='/fresh-meal'  }"></button></router-link>
        <router-link to="/quick-delivery"><button class="circuit"
                :class="{ active: $route.path === '/quick-delivery' }"></button></router-link>
        <router-link to="/start-today"><button class="circuit" :class="{ active: $route.path ==='/start-today'
                }"></button></router-link>
    </div>

</template>

<style scoped>
.circuit {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    border: none;
}
.active{
    background: #F67939;
}
a:hover{
    background: none;
}
</style>

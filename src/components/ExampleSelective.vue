<template>

    <h1 v-if="age < 18">Eres menor de edad</h1>
    <h1 v-else>Eres mayor de edad</h1>

</template>

<script lang="ts" setup>

    let age = 18

</script>

<style scoped>

h1{
    color: blue;
    border-bottom: 2px solid black;
    text-align: center;
}

</style>
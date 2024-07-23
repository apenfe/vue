<template>

    <p v-bind:style="{
        backgroundColor: bg,
        color: c
    }">El mensaje se ha enviado satisfactoriamente</p>

    <button v-on:click="handleClick()">Cambiar tema</button>

</template>

<script lang="ts" setup>
  
    import {ref} from 'vue';

    let c = ref("white");
    let bg = ref("blue");

    function handleClick(){
        c.value = 'white';
        bg.value = 'black';
    }

</script>

<style>

</style>
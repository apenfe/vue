<template>

    <h3>{{ counter }}</h3>

    <button @click="addCounter()">Incrementar</button>

</template>

<script lang="ts">

    import { defineComponent } from 'vue';
   // import MiComponente1 from ...

    export default defineComponent({
        name: "CounterOption",
       // components: {MiComponente1, MiComponete2},
        data(){
            let counter = 0;
            return {counter}
        },
        methods: {
            addCounter(){
                this.counter++;
            }
        },
    });

</script>

<style>

</style>
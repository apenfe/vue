<template>

    <h3>{{counter}}</h3>

    <button @click="addCounter()">Incrementar</button>
    

</template>

<script lang="ts">

    import { defineComponent, Ref, ref } from 'vue';

    export default defineComponent({
       name: "CounterComposition",
       setup() {

           let counter:Ref = ref(0);

           const addCounter = ():void => {
                counter.value++;
           }

           return {counter, addCounter}
       }
    });

</script>

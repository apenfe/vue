<template>

    <p v-bind:class="{ // se especifica el vindeo, el atributo que se desea bindear
        'danger': hasError  // luego se especifica el elemento y el dato relacionado
    }">El mensaje se ha enviado satisfactoriamente</p>

</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ClassBind',
        setup() {
            let hasError = true;
            return{hasError}
        }

    })

</script>

<style>

    .danger{
        color: red;
        font-size: 30px;
    }

</style>
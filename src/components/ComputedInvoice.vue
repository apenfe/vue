<template>
    <div>

        <label v-font-size>Subtotal:</label>
        <input type="number" v-model="subtotal"/>

        <h3 v-custom-size="10">Total impuestos a pagar: {{ totalVat }}, {{vat}} % </h3>
        <h3 v-custom-size-argumento:sm>Precio final: {{ total }} €</h3>

        <h3 v-custom-font.xxl.blue>DIRECTIVA CON MODIFICADORES</h3>

    </div>

</template>

<script lang="ts" setup>

    import {Ref, ref, computed} from 'vue';

    const vat = 21;
    let subtotal:Ref<number> = ref(0);

    const totalVat = computed(()=>{
        return (vat * subtotal.value) /100
    });

    const total = computed(()=>{
        return (subtotal.value + totalVat.value)
    });

</script>

<style scoped>

</style>
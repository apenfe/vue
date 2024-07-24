<template>

    <form>
        <input type="text" v-model="inputText"/>
        <input type="checkbox" v-model="agree"/> Acepto términos y condiciones.
        <select  v-model="country">
            <option value="spain">Spain</option>
            <option value="uk">UK</option>
            <option value="france">France</option>
        </select>
    </form>

    <h3>{{ inputText }}</h3>

</template>

<script lang="ts" setup>

    import {Ref, ref} from 'vue';

    let inputText:Ref<string> = ref('');
    let agree:Ref<boolean> = ref(true);
    let country:Ref<string> = ref('spain');

</script>

<style scoped>

</style>
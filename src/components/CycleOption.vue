<template>
    <div>Hola mundo</div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CycleOption',

        created() {
            console.log("created");
        },
        mounted() {
            console.log("mounted");
        },
        updated() {
            console.log("updated");
        },
        unmounted() {
            console.log("unmounted");
        },

    });

</script>

<style scoped>

</style>
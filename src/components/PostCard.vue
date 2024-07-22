<template>

    <div class="post-card">

        <h3>Titulo</h3>
        <p>Hola en este articulo hablo sobre mi viaje por el mundo...</p>

        <PostButton></PostButton>

    </div>
    
</template>

<script lang="ts" setup>

    import PostButton from './PostButton.vue';

</script>

<style scoped>

.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}

</style>
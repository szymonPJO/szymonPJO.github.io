<script lang="ts" setup>
    import Brain from "./brain.vue";
</script>

<template>
    <div class="logo">
        <Brain />
        <h1 class="welcome">
            <span>Hej, Szymon Ostrowski tutaj 🛠</span>
        </h1>
        <h2 class="descripton">
            Elekotrnika, stm32, avr, esp32
        </h2>
        <!-- awd -->
    </div>
</template>

<style>
    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
    }
    .welcome {
        display: flex;
        align-items: center;
        font-size: 2.2em;
        font-weight: bold;
    }
    .descripton {
        margin: 1em 0;
    }

</style>
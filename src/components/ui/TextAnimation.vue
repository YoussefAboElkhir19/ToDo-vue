<template>

    <GradientText text="To Do List" :colors="['#ffaa40', '#9c40ff', '#ffaa40']" :animation-speed="20"
        :show-border="false" class-name=" text-3xl font-bold your-custom-class" />
</template>

<script setup lang="ts">
import GradientText from "./GradientText.vue";
</script>
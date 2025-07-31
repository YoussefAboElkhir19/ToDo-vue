<template>
    <SplitText text="Vue Challange !!!" class-name="text-3xl font-semibold text-center text-blue-600 mb-4" :delay="100"
        :duration="0.6" ease="power3.out" split-type="chars" :from="{ opacity: 0, y: 40 }" :to="{ opacity: 1, y: 0 }"
        :threshold="0.1" root-margin="-100px" text-align="center" @animation-complete="handleAnimationComplete" />
</template>

<script setup lang="ts">
import SplitText from "./SplitText.vue";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};
</script>
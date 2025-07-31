<template>
  <div>
    <h2>Counter Display Component</h2>
    <p>The current count is: {{ number }}</p>
  </div>
</template>

<script>
export default {
  name: 'CounterDisplay',
  props: ['number'],
  mounted() {
    console.log("CounterDisplay Mounted");
  },
  unmounted() {
    console.log("CounterDisplay Removed from DOM");
  }
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>

<!-- End To Do List  -->
<template>
  <div class="app">


    <!-- <p>Count is: {{ count }}</p>
    <button @click="increaseCount">Increase</button>

    <CounterDisplay :number="count" /> -->
    <ToDo />


  </div>
</template>

<script>
// import CounterDisplay from './components/CounterDisplay.vue';
import ToDo from './components/ToDo.vue';


export default {
  name: 'App',
  // component name
  components: {
    // CounterDisplay,
    ToDo

  },
  // state 

  // state 
  // data() {
  //   return {
  //     count: 0
  //   };
  // },
  // // funtion
  // methods: {
  //   increaseCount() {
  //     this.count++;
  //   }
  // },
  // created() {
  //   console.log("App Created");
  // },
  // mounted() {
  //   console.log("App Mounted");
  // }
};
</script>

<style scoped>
.app {
  text-align: center;
  padding: 2rem;
}
</style>

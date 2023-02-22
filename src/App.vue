<template>
  <div id="app"> 
    <!-- <Preloader /> -->
    <rick-and-morty /> 
    <X />
    <!-- <dolar-graph /> -->
  </div>
</template>

<script>
//  import DolarGraph from './components/DolarGraph.vue'
// import Preloader from './utils/preloader/Preloader.vue';
import RickAndMorty from './components/RickAndMorty.vue'
import X from './components/X.vue'

export default {
  name: 'App',
  components: {
    // Preloader,
   RickAndMorty,
   X
    //  DolarGraph
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

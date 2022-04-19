<template>
  <div id="app">
    <rick-and-morty /> 
    <dolar-graph />
  </div>
</template>

<script>
import DolarGraph from './components/DolarGraph.vue'
import RickAndMorty from './components/RickAndMorty.vue'

export default {
  name: 'App',
  components: {
    RickAndMorty,
    DolarGraph

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

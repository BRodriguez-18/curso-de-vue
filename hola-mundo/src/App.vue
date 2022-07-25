<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld v-bind:msg="mensaje"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      mensaje: 'hola brian 33'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f00b63;
  margin-top: 60px;
}
</style>

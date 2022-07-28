<template>
<div>
  <h1>hola mundo</h1>
  <button class="btn green" @click="saludar">click <i class="material-icons">save</i></button>
</div>
</template>

<script>
import M from 'materialize-css'


export default {
  name: 'App',
  mounted(){
    this.axios.get("https://prueba.com")
    .then(()=>{

    });
  },
  methods:{
    saludar(){
      M.toast({html: 'hola mundo'});
    }
  }
}
</script>


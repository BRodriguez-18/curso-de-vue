<template>
  <div class="container">
    <div class="row">
      <div class="col m12 card-panel">
        <form @submit.prevent="agregarUsuario">
          <div class="row">
            <div class="col m4">
              <label>nombre</label>
              <input type="text" v-model="nombre">
            </div>
            <div class="col m4">
              <label>apellidos</label>
              <input type="text" v-model="apellidos">
            </div>
          </div>
      
          <div class="row">
            <div class="col m4">
              <label>edad</label>
              <input type="number" v-model="edad">
            </div>
            <div class="col m4">
              <label>Estado civil</label>
              <select v-model="estado_civil">
                <option value="">Seleccione</option>
                <option value="C">Casado</option>
                <option value="S">Soltero</option>
                <option value="V">Viudo</option>
                <option value="D">Divorciado</option>
              </select>
            </div>
            <div class="col m4">
              <label>Correo</label>
              <input type="email" v-model="correo">
            </div>
          </div>

          <div class="row">
            <div class="col m4 card-panel">
              <label>Pasatiempo</label>
              <input type="text" v-model="pasatiempo">
              <button type="button" class="btn indigo darken-3">agregar pasatiempo<i class="material-icons right">send</i></button>
              <br>
              <ul>
                <li v-for="pasatiempo in pasatiempos" v-bind:key="pasatiempo">{{pasatiempo}}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col m4">
              <label><input type="checkbox" v-model="suscribirse"><span> suscribirse al boletin de noticias</span> </label>
            </div>
          </div>
          <div class="row">
            <button type="submit" class="btn indigo darken-4">Agregar usuario <i class="material-icons right">add_circle</i></button>
          </div>
        </form>    
      </div>
    </div>
    <div class="row">
      <div class="col m12">
        <table class="table bordered striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Estado Civil</th>
              <th>Correo</th>
              <th>Pasatiempos</th>
              <th>Suscrito</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tbody>
              <tr v-for="usuario in usuarios" v-bind:key="usuario">
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.apellidos}}</td>
                <td>{{usuario.edad}}</td>
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.estado_civil}}</td>
                <td>{{usuario.correo}}</td>
                <td>
                  <ul>
                    <li v-for="pasatiempo in usuario.pasatiempos" v-bind:key="pasatiempo">{{pasatiempo.id}} - {{pasatiempo.descripcion}}</li>
                  </ul>
                </td>
                <td><labeL><input type="checkbox" disabled v-model="usuario.suscrito"><span></span></label></td>
                <td><a href="#!"><i class="material-icons">create</i></a></td>
                <td><a href="#!"><i class="material-icons">delete</i></a></td>
              </tr>
            </tbody>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'


export default {
  name: 'App',
  data(){
    return{
      nombre: '',
      apellidos:'',
      edad:0,
      estado_civil:'',
      correo:'',
      suscribirse:false,
      pasatiempo:'',
      pasatiempos:[],
      usuarios:[],
      select_instances:[]

    }
  },
  
  mounted(){ 
    var elems = document.querySelectorAll('select');
    this.select_instances = M.FormSelect.init(elems, null);
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


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
              <select class="browser-default" id="select_estado_civil" v-model="estado_civil">
                <option value="">Seleccione</option>
                <option v-for="estado in estados_civiles" v-bind:key="estado" v-bind:value="estado.id">{{estado.descripcion}}</option>
              </select>
            </div>
            <div class="col m4">
              <label>Correo</label>
              <input type="email" v-model="correo">
            </div>
          </div>

          <div class="row">
              <form @submit.prevent="agregarPasatiempo">
                <div class="col m4 card-panel">
                  <label>Pasatiempo</label>
                  <input type="text" v-model="pasatiempo">
                  <button type="submit" class="btn indigo darken-3">agregar pasatiempo<i class="material-icons right">send</i></button>    
                  <br>
                  <ul>
                    <li v-for="(pasatiempo, index) in pasatiempos" v-bind:key="pasatiempo">
                    {{pasatiempo.id}}-{{pasatiempo.descripcion}} 
                    <a href="#!" @click="pasatiempos.splice(index, 1)"><i class="material-icons">close</i></a>
                    </li>
                  </ul>
                </div> 
              </form>           
          </div>

          <div class="row">
            <div class="col m4">
              <label><input type="checkbox" v-model="suscrito"><span> suscribirse al boletin de noticias</span> </label>
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
            
              <tr v-for="usuario in usuarios" v-bind:key="usuario">
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.apellidos}}</td>
                <td>{{usuario.edad}}</td>
                <td>{{usuario.estado_civil_descripcion}}</td>
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
      suscrito:false,
      pasatiempo:'',
      pasatiempos:[],
      usuarios:[],
      select_instances:[],
      estados_civiles: [
        {
          id:'S',
          descripcion:'Soltero'
        },
        {
          id:'C',
          descripcion:'Casado'
        },
        {
          id:'D',
          descripcion:'Divorciado'
        },
        {
          id:'V',
          descripcion:'Viudo'
        }
      ]

    }
  },
  
  mounted(){ 
    var elems = document.querySelectorAll('select');
    this.select_instances = M.FormSelect.init(elems, null);
  },
  methods:{
    agregarUsuario(){
  
      var index_estado_civil = this.estados_civiles.findIndex(x=>x.id == this.estado_civil)      
      if(index_estado_civil == -1){
        M.toast({html: 'seleciona un estado civil'});
        return;
      }
      var data = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        edad: this.edad,
        estado_civil: this.estado_civil,
        estado_civil_descripcion:this.estados_civiles[index_estado_civil].descripcion,
        correo: this.correo,
        suscrito: this.suscrito,
        pasatiempos: this.pasatiempos,
      };
      this.usuarios.push(data);
      this.nombre= '';
      this.apellidos='';
      this.edad=0;
      this.estado_civil='';
      this.correo='';
      this.suscrito=false;
      this.pasatiempo='';
      this.pasatiempos=[];
    },
    agregarPasatiempo(){
      var total = this.pasatiempos.length;
      var ultimo = 0;
      if(total > 0){
        ultimo = this.pasatiempos[total - 1].id;
      }
      var data={
        id: ultimo + 1,
        descripcion: this.pasatiempo
        
      };
      this.pasatiempos.push(data);
      this.pasatiempo='';
    },
    eliminarRegistro(){

    }

  }
}
</script>


const app = {
    data(){
        return{
            usuario:'bambino',
            correo:'',
            clave:'',
            nombre: 'brian'
        }
    },
    methods:{
        llamarSaludoDesdeHijo(){
            this.$refs.menuComponent.saludarDesdeHijo(this.nombre);
            this.$refs.menuComponent.miUsuario = this.nombre;
        }
    }
}

const _app = Vue.createApp(app);
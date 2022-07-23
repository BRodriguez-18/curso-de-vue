_app.component('menu-component',{
    template: `<nav class="indigo darken-4">
                <div class="nav-wrapper">            
                    <a href="#" class="brand-logo">logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="callapsible.html">{{usuario}}</a></li>
                    </ul>
                </div>
    </nav>
    <input type="text" v-model="miUsuario">`,
    props:{
        usuario: String
    },
    data(){
        return{
            miUsuario: this.usuario
        }
    }
})
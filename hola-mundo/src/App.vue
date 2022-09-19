<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
      <li><router-link to="/Estudiantes">Estudiantes</router-link></li>
      <li><router-link name="Login">Login</router-link></li>
      </ul>
    </div>
    
  </nav>

  
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App'
  }
</script>


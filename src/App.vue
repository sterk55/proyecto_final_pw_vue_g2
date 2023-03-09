<template>
  <div id="idApp">
  

  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand text-light" aria-current="page" to="/">RentaCar</router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/cliente">Cliente</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/empleado">Empleado</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/reporte">Reporte</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<script>
  import NavbarVue from './components/Navbar.vue';
  export default {
    components: {
    NavbarVue
  }
  }
  </script>
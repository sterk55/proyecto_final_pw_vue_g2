<template>
  <div>
    <navar-empleado></navar-empleado>
    <div id="divpag">
      <fieldset>
        <legend>Buscar Cliente</legend>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idCedula">Apellido: </span>
          <input
            type="text"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="cedula"
          />
        </div>
      </fieldset>
      <div>
        <button @click="buscar" class="btn btn-outline-info">BUSCAR</button>
      </div>
      <div v-if="mostrarT" class="alert alert-primary" role="alert">
        {{ texto }}
      </div>
      <div v-if="mostrarB">
        <table class="table">
          <thead class="table-dark">
            <tr>

              <th scope="col">id</th>
              <th scope="col">Cédula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha Nacimiento</th>
              <th scope="col">Género</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{{ id }}</th>
              <td class="table-info">{{ ci }}</td>
              <td class="table-info">{{ nombre }}</td>
              <td class="table-info">{{ apellido }}</td>
              <td class="table-info">{{ fechaNac }}</td>
              <td class="table-info">{{ genero }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {buscarEmplApe, buscarEmpl } from "../helpers/empleado.js";
import NavarEmpleado from "../components/NavarEmpleado.vue";
export default {
  components: {

    NavarEmpleado,
  },
  data() {
    return {
      id: null,
      nombre: null,
      cedula: null,
      fechaNac: null,
      apellido: null,
      genero: null,
      mostrarB: false,
      mostrarT: false,
      ci: null,
      texo: null,
    };
  },
  methods: {
    async buscar() {
      console.log(this.apellido);
      const data = await buscarEmpl(this.cedula);
      if (data == "") {
        this.texto = "No hay resultados diponible para su busqueda";
        this.mostrarT = true;
        this.mostrarB = false;
      } else {
        this.id = data.id;
        this.nombre = data.nombre;
        this.ci = data.cedula;
        this.fechaNac = data.fechaNacimiento;
        this.apellido = data.apellido;
        this.genero = data.genero;
        this.mostrarB = true;
        this.mostrarT= false;
      }
    },
  },
};
</script>

<style>
</style>
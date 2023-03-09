<template>
  <div>
    <navar-cliente></navar-cliente>
  <fieldset>
    <legend>Registrarse</legend>

    <form>
      <div class="input-group mb-3">
        <span class="input-group-text" id="cedula">Cédula: </span>
        <input type="text" class="form-control" v-model="cedula" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="cedula">Nombre: </span>
        <input type="text" class="form-control" v-model="nombre" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="cedula">Apellido: </span>
        <input type="text" class="form-control" v-model="apellido" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="cedula">Fecha de nacimiento:</span>
        <input type="date" class="form-control" v-model="nacimiento" required />
      </div>
      <div id="gene" class="input-group mb-3">
        <span class="input-group-text" id="cedula">Género: </span>
      </div>
      <table>
        <tr>
          <td>
            <input
              type="radio"
              name="genero"
              id="F"
              value="Femenino"
              v-model="genero"
              required
            />
            <label for="F">Femenino</label>
          </td>
          <td>
            <input
              type="radio"
              name="genero"
              id="M"
              value="Masculino"
              v-model="genero"
              required
            />
            <label for="M">Masculino</label>
          </td>
        </tr>
      </table>

      <div>
        <button class="btn btn-outline-info" type="button" @click="registrar">
          REGISTRAR
        </button>
      </div>
    </form>
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
  </fieldset>
  </div>

</template>

<script>

import NavarCliente from '../components/NavarCliente.vue';
import { registrarCliente } from "../helpers/cliente.js";
export default {
  components: {
    NavarCliente
    
   
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      nacimiento: null,
      genero: null,
      mensaje: "",
    };
  },
  methods: {
    async registrar() {
      const cliente = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.nacimiento,
        genero: this.genero,
        tipoRegistro: "C",
      };
      if (
        this.cedula == null ||
        this.nombre == null ||
        this.apellido == null ||
        this.nacimiento == null ||
        this.genero == null
      ) {
        this.mensaje = "Llene todos los Parametros";
        
      }else{
        const response = await registrarCliente(cliente);
      this.cedula= null,
      this.nombre= null,
      this.apellido= null,
      this.nacimiento= null,
      this.genero= null,
      this.mensaje= ""
      if (response == "Cliente ingresado correctamente") {
        this.mensaje = response;
      } else {
        this.mensaje = "No se ha podido registrar, intente de nuevo";
      }
      }
      
      
    },
  },
};
</script>

<style scope>
fieldset {
  height: fit-content;
  width: fit-content;
  margin: auto;
}
#gene {
  text-align: center;
  width: fit-content;
  margin: auto;
}
table,
td,
tr {
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
}
button {
  margin-top: 12px;
}
</style>
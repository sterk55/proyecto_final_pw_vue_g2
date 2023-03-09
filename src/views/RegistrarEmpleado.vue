<template>
  <div>
    <navar-empleado></navar-empleado>
    <div id="divpag">
      <fieldset>
        <legend>Registro Cliente</legend>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idCedula">Cédula: </span>
          <input
            type="text"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="cedula"
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idNombre">Nombre: </span>
          <input
            type="text"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="nombre"
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idCedula">Apellido: </span>
          <input
            type="text"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="apellido"
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idFechaN">Fecha Nacimiento:</span>
          <input
            type="date"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="fechaNac"
          />
        </div>
        <br>
        <div>
          <span class="input-group-text" id="idGenero">Género:</span>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="idFem"
              value="femenino"
              v-model="genero"
            />
            <label class="form-check-label" for="idFem">Femenino</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="idMas"
              value="masculino"
              v-model="genero"
            />
            <label class="form-check-label" for="idMas">Masculino</label>
          </div>
        </div>

        <div>
          <button @click="registrar" class="btn btn-outline-info">
            REGISTRAR
          </button>
        </div>
      </fieldset>
      <div v-if="mostrarR" class="alert alert-primary" role="alert">
        {{ texto }}
      </div>
    </div>
  </div>
</template>

<script>
import { registrarEmpl } from "../helpers/empleado.js";
import NavarEmpleado from "../components/NavarEmpleado.vue";
export default {
  components: {
    NavarEmpleado,
  },
  data() {
    return {
      nombre: null,
      cedula: null,
      fechaNac: null,
      apellido: null,
      genero: null,
      mostrarR: false,
      texto: null,
    };
  },
  methods: {
    async registrar() {
      const empl = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNac,
        genero: this.genero,
        tipoRegistro: "E",
      };
      if (
        this.cedula == null ||
        this.nombre == null ||
        this.apellido == null ||
        this.fechaNac == null ||
        this.genero == null
      ) {
        this.texto = "Llene todos los Parametros";
        this.mostrarR = true;
      } else {
        const data = await registrarEmpl(empl);
        this.texto = data;
        this.mostrarR = true;
        this.nombre = "";
        this.cedula = "";
        this.fechaNac = "";
        this.apellido = "";
        this.genero = "";
      }
    },
  },
};
</script>

<style>
#idGenero {
  
  text-align: center;
  width: fit-content;
  margin: auto;
}
</style>
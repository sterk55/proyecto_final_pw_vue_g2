<template>
  <div>
    <navar-empleado></navar-empleado>
  <fieldset>
    <legend>Buscar vehículo por placa</legend>
    <form action="">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inicio">Placa:</span>
        <input type="text" class="form-control" v-model="placa" required />
      </div>

      <button type="button" class="btn btn-outline-info" @click="consultar">
        BUSCAR
      </button>
    </form>
    <br />
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>
    <div v-if="mostrar">
      <table class="table">
        <tread class="table-dark">
          <tr>
            <th class="table-active">Placa</th>
            <th class="table-info">{{ auto.placa }}</th>
          </tr>
          <tr>
            <th class="table-active">Modelo</th>
            <th class="table-info">{{ auto.modelo }}</th>
          </tr>
          <tr>
            <th class="table-active">Marca</th>
            <th class="table-info">{{ auto.marca }}</th>
          </tr>
          <tr>
            <th class="table-active">Año de fabricación</th>
            <th class="table-info">{{ auto.anioFablicacion }}</th>
          </tr>
          <tr>
            <th class="table-active">País de fabricación</th>
            <th class="table-info">{{ auto.paisFabricacion }}</th>
          </tr>
          <tr>
            <th class="table-active">Cilindraje</th>
            <th class="table-info">{{ auto.cilindraje }}cc</th>
          </tr>
          <tr>
            <th class="table-active">Precio del vehículo</th>
            <th class="table-info">${{ auto.precioVehiculo }}.00</th>
          </tr>
          <tr>
            <th class="table-active">Valor por día</th>
            <th class="table-info">${{ auto.valorDia }}.00</th>
          </tr>
        </tread>
      </table>
    </div>
  </fieldset>
  </div>
  
</template>

<script>
import { obtenerVehiculoPlaca } from "../helpers/empleado.js";
import NavarEmpleado from"../components/NavarEmpleado.vue"
export default {
  components: {
    NavarEmpleado
   
  },
  data() {
    return {
      placa: null,
      auto: {},
      mostrar: false,
      mensaje: "",
    };
  },
  methods: {
    async consultar() {
      if (this.placa == null) {
        this.mensaje = "No hay resultados para la búsqueda ingresada";
        this.mostrar = false;
      } else {
        const response = await obtenerVehiculoPlaca(this.placa);
        this.auto = response;
        console.log(this.auto);
        if (this.auto == "") {
          this.mensaje = "No hay resultados para la búsqueda ingresada";
          this.mostrar = false;
        } else {
          this.mensaje = "";
          this.mostrar = true;
        }
        console.log(response);
        this.placa = "";
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
table {
  margin-top: 15px;
}
</style>
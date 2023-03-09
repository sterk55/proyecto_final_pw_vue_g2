<template>
  <div>
    <navar-reporte></navar-reporte>
  <fieldset>
    <legend>Reporte de reservas</legend>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inicio">Fecha inicio:</span>
      <input type="date" class="form-control" v-model="inicio" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="fin">Fecha fin:</span>
      <input type="date" class="form-control" v-model="fin" />
    </div>
    <button type="button" class="btn btn-outline-info" @click="consultar">
      BUSCAR
    </button>
    <br />
    <div v-if="mensaje" class="alert alert-info" role="alert">
      {{ mensaje }}
    </div>

    <div v-if="mostrar">
      <table class="table">
        <thead class="table-dark">
          <tr class="table-active">
            <th scope="col">NoReserva</th>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Valor total</th>
            <th scope="col">Estado</th>
            <th scope="col">Nombre completo</th>
            <th scope="col">Cedula</th>
            <th scope="col">Placa</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            
          </tr>
        </thead>
        <tbody class="table-info">
          <tr v-for="rescv in lista" v-bind:key="rescv">
            <td>{{ rescv.numero }}</td>
            <td>{{ rescv.fechaInicio }}</td>
            <td>{{ rescv.fechaFin }}</td>
            <td>{{ rescv.valorTotalPagar }}</td>
            <td>{{ rescv.disponible }}</td>
            <td>{{ rescv.nombreCliente}}{{rescv.apellidoCliente}}</td>
            <td>{{ rescv.cedulaCliente }}</td>
            <td>{{ rescv.placa }}</td>
            <td>{{ rescv.marca }}</td>
            <td>{{ rescv.modelo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </fieldset>
  </div>
  
</template>
 
<script>
import { obtenerReporte } from "../helpers/reportes.js";
import NavarReporte from '../components/NavarReporte.vue'
export default {
  components: {
    NavarReporte
   
  },
  data() {
    return {
      inicio: null,
      lista: [],
      mostrar: false,
      mensaje: "",
    };
  },
  methods: {
    async consultar() {
      const response = await obtenerReporte(this.inicio, this.fin);
      this.lista = response;
      console.log(this.lista);
      if (this.lista.length == 0) {
        this.mensaje = "No hay resultados para la búsqueda ingresada";
        this.mostrar = false;
      } else {
        this.mensaje = "";
        this.mostrar = true;
      }
      console.log(response);
      this.marca = "";
      this.modelo = "";
    },
  },
};
</script>

<style scope>
fieldset {
  margin: auto;
}

#table {
  width: fit-content;
  height: fit-content;
}
</style>
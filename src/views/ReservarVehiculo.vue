<template>
  <div>
    <navar-cliente></navar-cliente>
    <div id="divpag">
      <fieldset>
        <legend>Reservar vehículo</legend>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idPlaca"
            >Placa del vehículo:
          </span>
          <input
            type="text"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="placa"
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idCedula">Cédula:</span>
          <input
            type="text"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="cedula"
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idFechaI">Fecha inicio:</span>
          <input
            type="date"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="fechaInicio"
          />
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idFechaF">Fecha final:</span>
          <input
            type="date"
            class="form-control"
            aria-describedby="addon-wrapping"
            v-model="fechaFinal"
          />
        </div>
      </fieldset>
      <br />
      <button @click="buscar" class="btn btn-outline-info">BUSCAR</button>
      <div v-if="mostrarD" class="alert alert-primary" role="alert">
        {{ texto }}
      </div>

      <div v-if="mostrarT" class="input-group flex-nowrap">
        <span class="input-group-text" id="idTarjeta">Tarjeta de credito:</span>
        <input
          type="text"
          class="form-control"
          aria-describedby="addon-wrapping"
          v-model="tarjeta"
        />
      </div>
      <br />

      <button @click="reservar" class="btn btn-outline-info">RESERVAR</button>
      <div v-if="mostrarR" class="alert alert-primary" role="alert">
        {{ texto2 }}
      </div>
    </div>
  </div>
</template>

<script>
import NavarCliente from "../components/NavarCliente";
import { busquedaVehiculoFecha, reservarVehiculo } from "../helpers/cliente.js";
export default {
  components: {
    NavarCliente,
  },
  data() {
    return {
      placa: null,
      cedula: null,
      fechaInicio: null,
      fechaFinal: null,
      tarjeta: null,
      mostrarD: false,
      mostrarR: false,
      texto: null,
      texto2: null,
      mostrarT:null
    };
  },
  methods: {
    async buscar() {
      this.texto = await busquedaVehiculoFecha(
        this.placa,
        this.fechaInicio,
        this.fechaFinal
      );
      if(this.texto.includes('no está disponible')){
        this.mostrarD = true;
      
        this.mostrarR = false;
      }else{
        this.mostrarD = true;
        this.mostrarT=true;
        this.mostrarR = false;
      }
      
    },
    async reservar() {
      const reser = {
        placa: this.placa,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFinal,
        ciCliente: this.cedula,
        numeroTarjeta:this.tarjeta
      }
      this.texto2 = await reservarVehiculo(reser);
      this.mostrarR = true;
      this.mostrarD = false;
    },
  },
};
</script>

<style >
#divpag {
  height: fit-content;
  width: fit-content;
  margin: auto;
  text-align: center;
}
input {
  margin-right: 10px;
  margin-top: 10px;
}
span {
  margin-top: 10px;
}
button {
  margin: 10px;
}
</style>
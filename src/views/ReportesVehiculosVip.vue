<template>
  <div>
    <navar-reporte></navar-reporte>
    <fieldset>
      <legend>Vehiculos VIP</legend>
      <div v-if="mostrarB" @click="mostrar">
        <table class="table">
          <thead class="table-dark">
          <tr>
            <th scope="col">Placa</th>
            <th scope="col">Valor IVA</th>
            <th scope="col">Valor total </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="l in lista" v-bind:key="l">
            <th scope="row">{{l.placa}}</th>
            <td class="table-info">{{l.valorIva}}</td>
            <td class="table-info">{{l.valorTotal}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </fieldset>
  </div>

</template>

<script>
import{listaVehiculosVip} from "../helpers/reportes.js"
import NavarReporte from '../components/NavarReporte.vue'
export default {
  components: {
    NavarReporte

  },
  data(){
    return{
      lista:[],
      mostrarB:false,


    };


  },
  methods:{
    async mostrar(){
      this.lista= await listaVehiculosVip()
      console.log(lista);
      this.mostrarB=true;
    },
  },
  mounted(){
    this.mostrar()
  }

}
</script>

<style>

</style>
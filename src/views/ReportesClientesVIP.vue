<template>
  <div>
    <navar-reporte></navar-reporte>
  <fieldset>
    <legend>Clientes VIP</legend>
    <div v-if="mostrarB" @click="mostrar">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">Cédula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Valor IVA</th>
          <th scope="col">Valor total </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in lista" v-bind:key="l">
          <th scope="row">{{l.cedula}}</th>
          <td class="table-info">{{l.nombre}}</td>
          <td class="table-info">{{l.apellido}}</td>
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
   import{listaClientesVIP} from "../helpers/reportes.js"
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
    this.lista= await listaClientesVIP()
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
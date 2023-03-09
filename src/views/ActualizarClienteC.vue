<template>
  <h2>Actualizar Cliente</h2>
  <p>{{ idC }}</p>
  <div class="fromMine">
    <div class="form-group">
      <label class="form-label" for="cedula">Cédula</label>
      <input v-model="cedula" class="form-control" type="text" id="cedula" :placeholder="cedula">
      <button v-on:click="buscar" class="btnGo">Buscar</button>
      <label class="form-label" for="nombre">Nombre</label>
      <input v-model="nombre" class="form-control" type="text" id="nombre">

      <label class="form-label" for="apellido">Apellido</label>
      <input v-model="apellido" class="form-control" type="text" id="apellido">

      <label class="form-label" for="modelo">Fecha de Nacimiento</label>
      <input v-model="fechaNacimiento" type="date" class="form-control" :placeholder="fechaNacimiento">

      <label class="form-label" for="modelo">Género</label>
      <select class="form-select" aria-label=".form-select-lg example" name="model" id="modelo" v-model="generoSelecionado">
        <option selected>Seleccione</option>
        <option  value="masculino" >Masculino</option>
        <option  value="femenino" >Femenino</option>
      </select>
      <button v-on:click="actualizar" class="btnGo">Actualizar</button>
    </div>
  </div>
</template>


<script>
import {actualizarClienteFachada,buscarClienteCedulaFachada} from '@/helpers/cliente'
export default {
  props:{
    idC:null,
  },
  data(){
    return{
      idCliente:null,
      apellido:null,
      nombre:null,
      cedula:null,
      fechaNacimiento:null,
      tipoRegistro:null,
      genero:null,
      generoSelecionado:null,

    }
  },
  methods:{
    mostrar(){

      //const {apellido,nombre,cedula,fechaNacimiento,tipoRegistro, genero,}= await visualizarClienteIdFachada(this.idC);
      this.apellido=apellido
      this.nombre=nombre
      this.cedula=cedula
      this.fechaNacimiento=fechaNacimiento
      this.tipoRegistro=tipoRegistro
      this.genero=genero



    },
    async buscar(){
      const {id,cedula,nombre,apellido,fechaNacimiento,genero,tipoRegistro}=await buscarClienteCedulaFachada(this.cedula)
      this.idCliente=id
      this.nombre=nombre
      this.apellido=apellido
      this.fechaNacimiento=fechaNacimiento
      this.tipoRegistro=tipoRegistro
      this.genero=genero
      console.log('buscar id: '+this.idCliente)
    },
    async actualizar(){
      console.log('actualizar  '+this.idCliente)
      const myCliente={
        "nombre": this.nombre,
        "apellido": this.apellido,
        "cedula": this.cedula,
        "fechaNacimiento": this.fechaNacimiento,
        "genero": this.generoSelecionado,
        "tipoRegistro":this.tipoRegistro
      }
      console.log('actualizar '+this.idCliente)
      await actualizarClienteFachada(1,myCliente )
      window.alert("Actualizado con exito")
    }
  },
  mounted(){
    // this.mostrar();
  }
}
</script>

<style>
</style>
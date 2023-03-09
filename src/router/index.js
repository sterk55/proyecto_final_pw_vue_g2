import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {path:'/reserva',component:()=>import(/*webpackChunkName:"reserva"*/ '../views/ReservarVehiculo')},
  {path:'/registro/empleados',component:()=>import(/*webpackChunkName:"registroE"*/ '../views/RegistrarEmpleado')},
  {path:'/buscar/cliente',component:()=>import(/*webpackChunkName:"buscarC"*/ '../views/BuscarCliente')},
  {path:'/retiro/vehiculo',component:()=>import(/*webpackChunkName:"retiroV"*/ '../views/RetirarVehiculo')},
  {path:'/clienteVIP',component:()=>import(/*webpackChunkName:"clienteVIP"*/ '../views/ReportesClientesVIP')},
  {path:'/cliente',component:()=>import(/*webpackChunkName:"cliente"*/ '../components/NavarCliente')},
  {path:'/empleado',component:()=>import(/*webpackChunkName:"empleado"*/ '../components/NavarEmpleado')},
  {path:'/reporte',component:()=>import(/*webpackChunkName:"reporte"*/ '../components/NavarReporte')},
  {path:'/',component:()=>import(/*webpackChunkName:"inicio"*/ '../components/Inicio')},
  {path:'/registro/cliente',component:()=>import(/*webpackChunkName:"registroC"*/ '../views/RegistroComoCliente')},
  {path:'/buscar/vehiculo',component:()=>import(/*webpackChunkName:"buscarV"*/ '../views/BuscarVehiculo')},
  {path:'/registrar/vehiculo',component:()=>import(/*webpackChunkName:"buscarV"*/ '../views/RegistroVehiculo')},
  {path:'/buscar/vehiculo/placa',component:()=>import(/*webpackChunkName:"buscarV"*/ '../views/BuscarVehiculoPlaca')},
  {path:'/vehiculo/sinReserva',component:()=>import(/*webpackChunkName:"vehiculoSR"*/ '../views/VehiculoSinReserva')},
  {path:'/reservas',component:()=>import(/*webpackChunkName:"reservas"*/ '../views/ReporteReserva')},
  {path:'/empleados/actualizar/vehiculo',component:()=>import(/*webpackChunkName:"reservas"*/ '../views/ActualizarVehiculo.vue')},
  {path:'/clientes/actualizar',component:()=>import(/*webpackChunkName:"clientesActualizar"*/ '../views/ActualizarClienteC')},
  {path:'/vehiculosVIP',component:()=>import(/*webpackChunkName:"vehiculosVIP"*/ '../views/ReportesVehiculosVip')},

]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

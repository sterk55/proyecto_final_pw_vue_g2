<template>
  <div>
    <navar-empleado></navar-empleado>
    <buscar-vehiculo-copy></buscar-vehiculo-copy>
    <reservar-vehiculo-copy></reservar-vehiculo-copy>
    <retirar-vehiculo-copy></retirar-vehiculo-copy>
  </div>
</template>

<script>
import BuscarVehiculoCopy from "./BuscarVehiculoCopy.vue";
import ReservarVehiculoCopy from "./ReservarVehiculoCopy.vue";
import RetirarVehiculoCopy from "./RetirarVehiculoCopy.vue";
import NavarEmpleado from "../components/NavarEmpleado.vue";
export default {
  components: {
    BuscarVehiculoCopy,
    ReservarVehiculoCopy,
    RetirarVehiculoCopy,
    NavarEmpleado,
  },
};
</script>

<style>
</style>
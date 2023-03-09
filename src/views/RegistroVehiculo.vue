<template>
  <div>
    <navar-empleado></navar-empleado>
    <fieldset>
      <legend>Ingresar vehículo</legend>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inicio">Placa:</span>
        <input type="text" class="form-control" v-model="placa" />
      </div>

      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Marca:</label>
        <select
          class="form-select"
          id="inputGroupSelect01"
          @change="onChange($event)"
          v-model="marca"
        >
          <option value="Chevrolet">Chevrolet</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Ford">Ford</option>
          <option value="Honda">Honda</option>
          <option value="Hyundai">Hyundai</option>
          <option value="KIA">KIA</option>
          <option value="Mazda">Mazda</option>
          <option value="Nissan">Nissan</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
          <option value="Skoda">Skoda</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Toyota">Toyota</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>

        <label class="input-group-text" for="Select0" v-if="ninguno"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select0"
          v-model="modelo"
          v-if="ninguno"
        >
          <option selected>Primero elija una marca</option>
        </select>

        <label class="input-group-text" for="Select01" v-if="Chevroletsel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select01"
          v-model="modelo"
          v-if="Chevroletsel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Cruze">Cruze</option>
          <option value="Aveo">Aveo</option>
          <option value="Trax">Trax</option>
          <option value="Spark">Spark</option>
          <option value="Camaro">Camaro</option>
        </select>

        <label class="input-group-text" for="Select02" v-if="Ferrarisel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select02"
          v-model="modelo"
          v-if="Ferrarisel"
        >
          <option selected>Seleccione uno...</option>
          <option value="488">488</option>
          <option value="GTC4">GTC4</option>
          <option value="California">California</option>
          <option value="F12">F12</option>
          <option value="Portofino">Portofino</option>
        </select>

        <label class="input-group-text" for="Select03" v-if="Fordsel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select03"
          v-model="modelo"
          v-if="Fordsel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Fiesta">Fiesta</option>
          <option value="Focus">Focus</option>
          <option value="Galaxy">Galaxy</option>
          <option value="EcoSport">EcoSport</option>
          <option value="Mustang">Mustang</option>
        </select>

        <label class="input-group-text" for="Select04" v-if="Hondasel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select04"
          v-model="modelo"
          v-if="Hondasel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Accord">Accord</option>
          <option value="Jazz">Jazz</option>
          <option value="Civic">Civic</option>
          <option value="CR-V">CR-V</option>
          <option value="HR-V">HR-V</option>
        </select>

        <label class="input-group-text" for="Select05" v-if="Hyundaisel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select05"
          v-model="modelo"
          v-if="Hyundaisel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Santa Fe">Santa Fe</option>
          <option value="Veloster">Veloster</option>
          <option value="Elantra">Elantra</option>
          <option value="Grand Santa Fe">Grand Santa Fe</option>
          <option value="Tucson">Tucson</option>
        </select>

        <label class="input-group-text" for="Select06" v-if="KIAsel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select06"
          v-model="modelo"
          v-if="KIAsel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Picanto">Picanto</option>
          <option value="Rio">Rio</option>
          <option value="Sportage">Sportage</option>
          <option value="Carens">Carens</option>
          <option value="Sorento">Sorento</option>
        </select>

        <label class="input-group-text" for="Select07" v-if="Mazdasel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select07"
          v-model="modelo"
          v-if="Mazdasel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Mazda2">Mazda2</option>
          <option value="CX-5">CX-5</option>
          <option value="Mazda6">Mazda6</option>
          <option value="MX-5">MX-5</option>
          <option value="Mazda3">Mazda3</option>
        </select>

        <label class="input-group-text" for="Select08" v-if="Nissansel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select08"
          v-model="modelo"
          v-if="Nissansel"
        >
          <option selected>Seleccione uno...</option>
          <option value="X-TRAIL">X-TRAIL</option>
          <option value="NOTE">NOTE</option>
          <option value="Pathfinder">Pathfinder</option>
          <option value="Navara">Navara</option>
          <option value="Murano">Murano</option>
        </select>

        <label class="input-group-text" for="Select09" v-if="Peugeotsel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select09"
          v-model="modelo"
          v-if="Peugeotsel"
        >
          <option selected>Seleccione uno...</option>
          <option value="308">308</option>
          <option value="807">807</option>
          <option value="Bipper">Bipper</option>
          <option value="508">508</option>
          <option value="Partner">Partner</option>
        </select>

        <label class="input-group-text" for="Select10" v-if="Renaultsel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select10"
          v-model="modelo"
          v-if="Renaultsel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Fluence">Fluence</option>
          <option value="Latitude">Latitude</option>
          <option value="Clio">Clio</option>
          <option value="Scénic">Scénic</option>
          <option value="Laguna">Laguna</option>
        </select>

        <label class="input-group-text" for="Select11" v-if="Skodasel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select11"
          v-model="modelo"
          v-if="Skodasel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Octavia">Octavia</option>
          <option value="Fabia">Fabia</option>
          <option value="Yeti">Yeti</option>
          <option value="Spaceback">Spaceback</option>
          <option value="Scout">Scout</option>
        </select>

        <label class="input-group-text" for="Select12" v-if="Suzukisel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select12"
          v-model="modelo"
          v-if="Suzukisel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Grand Vitara">Grand Vitara</option>
          <option value="Swift">Swift</option>
          <option value="Jimny">Jimny</option>
          <option value="Celerio">Celerio</option>
          <option value="Vitara">Vitara</option>
        </select>

        <label class="input-group-text" for="Select13" v-if="Toyotasel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select13"
          v-model="modelo"
          v-if="Toyotasel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Land Cruiser">Land Cruiser</option>
          <option value="Yaris">Yaris</option>
          <option value="Verso">Verso</option>
          <option value="Prius">Prius</option>
          <option value="Rav4">Rav4</option>
        </select>

        <label class="input-group-text" for="Select14" v-if="Volkswagensel"
          >Modelo:</label
        >
        <select
          class="form-select"
          id="Select14"
          v-model="modelo"
          v-if="Volkswagensel"
        >
          <option selected>Seleccione uno...</option>
          <option value="Polo">Polo</option>
          <option value="Jetta">Jetta</option>
          <option value="Golf">Golf</option>
          <option value="California">California</option>
          <option value="Eos">Eos</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Año de fabricación:</span>
        <input type="text" class="form-control" v-model="anioFablicacion" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">País de fabricación:</span>
        <input type="text" class="form-control" v-model="paisFabricacion" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Cilindraje:</span>
        <input type="text" class="form-control" v-model="cilindraje" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Precio Vehículo:</span>
        <input type="text" class="form-control" v-model="precioVehiculo" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Valor por día:</span>
        <input type="text" class="form-control" v-model="valorDia" />
      </div>
      <button type="button" class="btn btn-outline-info" @click="registrar">
        REGISTRAR VEHÍCULO
      </button>
      <br />
      <br />
      <div v-if="mensaje" class="alert alert-info" role="alert">
        {{ mensaje }}
      </div>
    </fieldset>
  </div>
</template>

<script>
import NavarEmpleado from "../components/NavarEmpleado.vue";
import { registrarVehiculo } from "../helpers/empleado.js";
export default {
  components: {
    NavarEmpleado,
  },
  data() {
    return {
      placa: null,
      modelo: null,
      marca: null,
      anioFablicacion: null,
      paisFabricacion: null,
      cilindraje: null,
      precioVehiculo: null,
      valorDia: null,

      ninguno: true,
      Chevroletsel: false,
      Ferrarisel: false,
      Fordsel: false,
      Hondasel: false,
      Hyundaisel: false,
      KIAsel: false,
      Mazdasel: false,
      Nissansel: false,
      Peugeotsel: false,
      Renaultsel: false,
      Skodasel: false,
      Suzukisel: false,
      Toyotasel: false,
      Volkswagensel: false,
      mensaje: "",
    };
  },
  methods: {
    async registrar() {
      const vehiculo = {
        placa: this.placa,
        modelo: this.modelo,
        marca: this.marca,
        anioFablicacion: this.anioFablicacion,
        paisFabricacion: this.paisFabricacion,
        cilindraje: this.cilindraje,
        precioVehiculo: this.precioVehiculo,
        valorDia: this.valorDia,
        disponible: "D",
      };
      if (
        this.placa == null ||
        this.modelo == null ||
        this.marca == null ||
        this.anioFablicacion == null ||
        this.paisFabricacion == null ||
        this.cilindraje == null ||
        this.precioVehiculo == null ||
        this.valorDia == null
      ) {
        this.mensaje = "Llene todos los parametros";
      } else {
        const response = await registrarVehiculo(vehiculo);
        (this.placa = null),
          (this.modelo = null),
          (this.marca = null),
          (this.anioFablicacion = null),
          (this.paisFabricacion = null),
          (this.cilindraje = null),
          (this.precioVehiculo = null),
          (this.valorDia = null);

        if (response == "Vehiculo ingresado correctamente") {
          this.mensaje = response;
        } else {
          this.mensaje = "No se ha podido registrar, intente de nuevo";
        }
      }
    },

    onChange(event) {
      console.log(event.target.value);

      if (event.target.value == "Chevrolet") {
        (this.ninguno = false),
          (this.Chevroletsel = true),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Ferrari") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = true),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Ford") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = true),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Honda") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = true),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Hyundai") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = true),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "KIA") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = true),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Mazda") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = true),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Nissan") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = true),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Peugeot") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = true),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Renault") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = true),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Skoda") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = true),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Suzuki") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = true),
          (this.Toyotasel = false),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Toyota") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = true),
          (this.Volkswagensel = false);
      } else if (event.target.value == "Volkwagen") {
        (this.ninguno = false),
          (this.Chevroletsel = false),
          (this.Ferrarisel = false),
          (this.Fordsel = false),
          (this.Hondasel = false),
          (this.Hyundaisel = false),
          (this.KIAsel = false),
          (this.Mazdasel = false),
          (this.Nissansel = false),
          (this.Peugeotsel = false),
          (this.Renaultsel = false),
          (this.Skodasel = false),
          (this.Suzukisel = false),
          (this.Toyotasel = false),
          (this.Volkswagensel = true);
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
</style>
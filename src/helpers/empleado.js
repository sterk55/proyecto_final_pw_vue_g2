import axios from "axios";
export const registrarEmpl=async(empl)=>{
    return await registrarEmplAxios(empl)
} 
 
export const buscarEmpl=async(cedula)=>{
    return await buscarEmplAxios(cedula)
} 
export const buscarVehiculoReservado=async(numero)=>{
    return await buscarVehiculoReservadoAxios(numero)
} 
export const registrarRetiro=async(numero)=>{
    return await registrarRetiroAxios(numero)
} 
export const registrarVehiculo = async (body) => {
    //return await obtenerEmpleadoAPI(id);
    return await registrarVehiculoAxios(body);
}
export const obtenerVehiculoPlaca = async (placa) => {
    //return await obtenerEmpleadoAPI(id);
    return await obtenerVehiculoPlacaAxios(placa);
}
const registrarEmplAxios=async(empl)=>{
    const data = axios.post(`http://localhost:8085/API/Renta/V1/clientes`,empl).then(r=>r.data)
    console.log(data)
    return data
}
const buscarEmplAxios=async(cedula)=>{
    const data = axios.get(`http://localhost:8085/API/Renta/V1/clientes/${cedula}`).then(r=>r.data)
    console.log(data)
    return data
}
const buscarVehiculoReservadoAxios=async(numero)=>{
    const data=axios.get(`http://localhost:8085/API/Renta/V1/reservas/numeroR/${numero}`).then(r=>r.data)
    console.log(data)
    return data
}
const registrarRetiroAxios=async(numero)=>{
    const data=axios.put(`http://localhost:8085/API/Renta/V1/vehiculos/retiro?nReserva=${numero}`).then(r=>r.data).catch(r=>{return r})
    console.log(data)
    return data
}
//POST 
const registrarVehiculoAxios = async (body) => {
    const data = axios.post(`http://localhost:8085/API/Renta/V1/vehiculos`, body).then(r => r.data)
    console.log(data)
    return data
}
const obtenerVehiculoPlacaAxios = async (placa) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos/${placa}`).then(r => r.data)
    console.log(data)
    return data
}
//----------------------------------------------------------------
export const buscarVehiculoIdFachada=async(numero)=>{
    return await  buscarVehiculoPorId(numero)
}

export const obtenerPorApellidoFachada = async (apellido) => {
    return await obtenerPorApellido(apellido);
}

export const actualizarVehiculoFachada = (id, body) => {
    actualizarVehiculo(id, body);
}

export const borrarVehiculoPorIdFachada = (id) => {
    borrarVehiculoPorId(id);
}
export const buscarEmplApe=async(apellido)=>{
    return await buscarEmplApellAxios(apellido)
}

//Metodos de consumos CRUD
const obtenerPorApellido = async (apellido) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/clientes/${apellido}`).then(r => r.data)
    console.log(data)
    return data;
}


const actualizarVehiculo = (id, body) => {
    axios.put(`http://localhost:8085/API/Renta/V1/vehiculos/${id}`,body).then(r => r.data)
}


const borrarVehiculoPorId = (id) => {
    axios.delete(`http://localhost:8085/API/Renta/V1/vehiculos/${id}`).then(r => r.data)
}

const buscarVehiculoPorId = async (id) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos/id/${id}`).then(r => r.data)
    console.log(data)
    return data
}
const buscarEmplApellAxios=async(apellido)=>{
    const data = axios.get(`http://localhost:8085/API/Renta/V1/clientes/${apellido}`).then(r=>r.data)
    console.log(data)
    return data
}
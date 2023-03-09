import axios from "axios";
export const registrarCliente  = async (body) => {
    //return await obtenerEmpleadoAPI(id);
    return await registrarClienteAxios(body);
}
export const obtenerVehiculos = async (marca, modelo) => {
    //return await obtenerEmpleadoAPI(id);
    return await obtenerVehiculosAxios(marca, modelo);
}
export const busquedaVehiculoFecha = async (placa,fechaInicio,fechaFin) => {
    //return await obtenerEmpleadoAPI(id);
    return await busquedaVehiculoFechaAxios(placa,fechaInicio,fechaFin);
}
export const reservarVehiculo = async (reser) => {
    //return await obtenerEmpleadoAPI(id);
    return await reservarVehiculoAxios(reser);
}
//POST
const registrarClienteAxios = async (body) => {
    const data = axios.post(`http://localhost:8085/API/Renta/V1/clientes`, body).then(r => r.data)
    console.log(data)
    return data
}
//GET //lista de vehiculos disponibles segun marca y modelo
const obtenerVehiculosAxios = async (marca, modelo) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos?marca=${marca}&modelo=${modelo}`).then(r => r.data)
    console.log(data)
    return data
}
const busquedaVehiculoFechaAxios=async(placa,fechaInicio,fechaFin)=>{
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos/busqueda?placa=${placa}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`).then(r => r.data)
    console.log(data)
    return data
}
const reservarVehiculoAxios=async(reser)=>{
    const data = axios.post(`http://localhost:8085/API/Renta/V1/vehiculos/reserva`,reser).then(r => r.data)
    console.log(data)
    return data
}

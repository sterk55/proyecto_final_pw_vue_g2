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


export const actualizarClienteFachada = async (id, body) => {
    //return await obtenerEmpleadoAPI(id);
     await actualizarCliente(id,body);
}

export const buscarClienteCedulaFachada=async(cedula)=>{
    return await buscarClienteCedula(cedula)
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


const actualizarCliente=async(id, body)=>{
    console.log('actualiza fachada: id '+id)
     axios.put(`http://localhost:8085/API/Renta/V1/clientes/${id}`,body).then(r => r.data)
   
}
const buscarClienteCedula=async(cedula)=>{
    const data = axios.get(`http://localhost:8085/API/Renta/V1/clientes/${cedula}`).then(r=>r.data)
    console.log(data)
    return data
}


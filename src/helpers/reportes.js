import axios from "axios";
export const listaClientesVIP=async()=>{
    return await listaClientesVIPAxios()
}  
export const obtenerReporte = async (inicio,fin) => {
    return await obtenerReporteAxios(inicio,fin);
}
export const listaVehiculosVip = async() =>{
    return await listaVehiculosVipAxios()
}

//GET //lista de reservas segun fecha inicio-fin
const obtenerReporteAxios = async (inicio, fin) => {
    const data = axios.get(`http://localhost:8085/API/Renta/V1/reservas?fechaInicio=${inicio}&fechaFin=${fin}`).then(r => r.data)
    console.log(data)
    return data
}
const listaClientesVIPAxios=async(cedula)=>{
    const data = axios.get(`http://localhost:8085/API/Renta/V1/clientes/vip`).then(r=>r.data)
    console.log(data)
    return data
}
const listaVehiculosVipAxios = async()=>{
    const data = axios.get(`http://localhost:8085/API/Renta/V1/vehiculos/vip`).then(r=>r.data)
    console.log(data)
    return data
}
import { postData } from "../services/fetch.js";

const nombreCompleto = document.getElementById("nombreCompleto")
const correoElectronico = document.getElementById("correoElectronico")
const tipoConsulta = document.getElementById("opcion")
const mensaje = document.getElementById("mensaje")
const btnConsulta = document.getElementById("btnConsulta")
const alertaAgregada = document.getElementById("alertaAgregada")
const consultaAgregada = document.getElementById("consultaAgregada")

btnConsulta.addEventListener("click", async function (e) {
    e.preventDefault()
    const consulta = {
        nombreCompleto: nombreCompleto.value,
        correoElectronico: correoElectronico.value,
        tipoConsulta: tipoConsulta.value,
        mensaje: mensaje.value,
    }
    const peticionConsulta = await postData(consulta, "ticket")
    consultaAgregada.textContent = "La consulta se agregó con éxito"
    setTimeout(() => {
    consultaAgregada.textContent = ""
        
    }, 1500);

    console.log(peticionConsulta);
})
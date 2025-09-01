import { getData } from "../services/fetch.js"

const listaConsultas = document.getElementById("listaConsultas")


async function traerConsultas() {
    const consultas = await getData("ticket")
    consultas.forEach((consulta)=>{
    const nombreCompleto = document.createElement("p")
    const correo = document.createElement("p")
    const tipoConsulta = document.createElement("p")
    const mensaje = document.createElement("p")

    nombreCompleto.textContent = consulta.nombreCompleto
    correo.textContent = consulta.correoElectronico
    tipoConsulta.textContent = consulta.tipoConsulta
    mensaje.textContent = consulta.mensaje

    listaConsultas.setAttribute("class", "lista");
    

    listaConsultas.appendChild(nombreCompleto)
    listaConsultas.appendChild(correo)
    listaConsultas.appendChild(tipoConsulta)
    listaConsultas.appendChild(mensaje)
    })
}
traerConsultas()
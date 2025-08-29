import { postData } from "../services/fetch.js";

const nombreCompleto = document.getElementById("nombreCompleto")
const correoElectronico = document.getElementById("correoElectronico")
const tipoConsulta = document.getElementById("tipoConsulta")
const mensaje = document.getElementById("mensaje")
const btnConsulta = document.getElementById("btnConsulta")

btnConsulta.addEventListener("click", async function () {
    const consulta = {
        nombreCompleto: nombreCompleto.value,
        correoElectronico: correoElectronico.value,
        tipoConsulta: tipoConsulta.value,
        mensaje: mensaje.value,
    }

    const peticionConsulta = await postData(consulta, "ticket")
    console.log(peticionConsulta);
    
    const contenedor = document.createElement("div")
    const tabla = document.createElement("table")
    const consultas = document.createElement("p")


    contenedor.appendChild(tabla)
    tabla.appendChild(consultas)

    

})



const btnMostrar = document.getElementById("btnMostrar")
const listaConsultas = document.getElementById("listaConsultas")
const formularioConsultas = document.getElementById("formularioConsultas")
btnMostrar.addEventListener("click",function(){
    listaConsultas.style.display = "block"
    formularioConsultas.style.display = "none"
})



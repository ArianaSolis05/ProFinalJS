const btnMostrar = document.getElementById("btnMostrar")
const listaConsultas = document.getElementById("listaConsultas")
const formularioConsultas = document.getElementById("formularioConsultas")
btnMostrar.addEventListener("click",function(){
    listaConsultas.style.display = "block"
    formularioConsultas.style.display = "none"
})

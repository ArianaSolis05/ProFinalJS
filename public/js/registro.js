import { postData } from "../services/fetch.js";

const nombreCompleto = document.getElementById("nombreCompleto");
const correoUsuario = document.getElementById("correoUsuario");
const telUsuario = document.getElementById("telUsuario");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const nombreUsuario = document.getElementById("nombreUsuario");
const claveUsuario = document.getElementById("claveUsuario");
const btnGuardarInfo = document.getElementById("btnGuardarInfo");

btnGuardarInfo.addEventListener("click", async function () {
  const usuario = {
    nombreCompleto: nombreCompleto.value,
    correoUsuario: correoUsuario.value,
    telUsuario: telUsuario.value,
    fechaNacimiento: fechaNacimiento.value,
    nombreUsuario: nombreUsuario.value,
    claveUsuario: claveUsuario.value,
    
  };
  const peticion = await postData(usuario, "usuarios");
<<<<<<< HEAD
  window.location.href = "/pages/login.html";
=======
  
>>>>>>> 07ce6d9cf55a440b7ffda1bdbf4f10195f200c29
  console.log(peticion);
  
});

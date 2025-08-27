import { postData } from "../services/fetch.js";
const nombreCompleto = document.getElementById("nombreCompleto");
const correoUsuario = document.getElementById("correoUsuario");
const telUsuario = document.getElementById("telUsuario");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const nombreUsuario = document.getElementById("nombreUsuario");
const claveUsuario = document.getElementById("claveUsuario");
const nacionalidadUsuario = document.getElementById("nacionalidadUsuario");
const btnGuardarInfo = document.getElementById("btnGuardarInfo");

btnGuardarInfo.addEventListener("click", async function () {
  const usuario = {
    nombreCompleto: nombreCompleto.value,
    correoUsuario: correoUsuario.value,
    telUsuario: telUsuario.value,
    fechaNacimiento: fechaNacimiento.value,
    nombreUsuario: nombreUsuario.value,
    claveUsuario: claveUsuario.value,
    nacionalidadUsuario: nacionalidadUsuario.value,
  };
  const peticion = await postData(usuario, "usuarios");
  console.log(peticion);
});

import { getData } from "../services/fetch.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", async function () {
  let users = await getData("usuarios");
  const usuarioEncontrado = users.find(
    (user) =>
      user.correoUsuario === email.value && user.claveUsuario === password.value
  );
  console.log(usuarioEncontrado);

  if (!usuarioEncontrado) {
    alert("NO QUELE");
    return;
  }
  alert("SI QUELE");
});

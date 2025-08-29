import { getData } from "../services/fetch.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", async function () {
  let users = await getData("usuarios");
  const usuarioEncontradoProfesor = users.find(
    (user) =>
      user.correoUsuario === email.value &&
      user.claveUsuario === password.value &&
      user.tipoUsuario === "profesor"
  );
  const usuarioEncontradoEstudiante = users.find(
    (user) =>
      user.correoUsuario === email.value &&
      user.claveUsuario === password.value &&
      user.tipoUsuario === "estudiante"
  );
  if (!usuarioEncontradoProfesor && !usuarioEncontradoEstudiante) {
    alert("usuario no existe");
    return;
  }
  if (usuarioEncontradoProfesor) {
    alert("Profesor");
    window.location.href="pages/profesores.html"
    return;
  }
  if (usuarioEncontradoEstudiante) {
    window.location.href = "pages/consultas.html";
    return;
  }
});

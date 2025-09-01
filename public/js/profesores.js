import { getData, deleteConsulta, patchConsulta } from "../services/fetch.js";

const listaConsultas = document.getElementById("listaConsultas");

async function traerConsultas() {
  const consultas = await getData("ticket");
  consultas.forEach((consulta) => {
    const divConsulta = document.createElement("div");
    const nombreCompleto = document.createElement("p");
    const correo = document.createElement("p");
    const tipoConsulta = document.createElement("p");
    const mensaje = document.createElement("p");
    const botonEliminar = document.createElement("button");
    const botonEditar = document.createElement("button");
    const botonResponder = document.createElement("button");

    divConsulta.appendChild(nombreCompleto);
    divConsulta.appendChild(correo);
    divConsulta.appendChild(tipoConsulta);
    divConsulta.appendChild(mensaje);
    divConsulta.appendChild(botonEditar);
    divConsulta.appendChild(botonEliminar);
    divConsulta.appendChild(botonResponder);
    divConsulta.setAttribute("class","claseDiv")
    botonEliminar.textContent = "Eliminar";
    botonResponder.textContent = "Responder";
    botonEditar.textContent = "Editar";
    consulta.textContent = `Nombre: ${consulta.nombreCompleto}  Correo: ${consultas.correo} Tipo de consulta: ${consultas.tipoConsulta} Consulta emitida: ${consultas.mensaje}`;

    nombreCompleto.textContent = consulta.nombreCompleto;
    correo.textContent = consulta.correoElectronico;
    tipoConsulta.textContent = consulta.tipoConsulta;
    mensaje.textContent = consulta.mensaje;

    listaConsultas.setAttribute("class", "lista");

    listaConsultas.appendChild(divConsulta);

    botonEliminar.addEventListener("click", async function () {
      const eliminacionConsulta = await deleteConsulta("ticket/", consulta.id);
      console.log(eliminacionConsulta);

      listaConsultas.removeChild(consulta);
      listaConsultas.removeChild(botonEliminar);
      listaConsultas.removeChild(botonEditar);
    });

    botonResponder.addEventListener("click", function () {
      const respuesta = document.createElement("input");
      const respuestaEnviada = document.createElement("button");
      respuestaEnviada.textContent = "Enviar respuesta";

      divConsulta.appendChild(respuesta);
      divConsulta.appendChild(respuestaEnviada);

      respuestaEnviada.addEventListener("click", async function () {
        const respuestaConsulta = {
          respuesta: respuesta.value,
        };
        const actualizarInfo = await patchConsulta(
          "ticket/",
          respuestaConsulta,
          consulta.id
        );
        console.log(actualizarInfo);
      });
    });

    botonEditar.addEventListener("click", function () {
      const btnConfirmar = document.createElement("button");
      const tipoConsulta = document.createElement("input");
      const mensaje = document.createElement("input");
      btnConfirmar.textContent = "Confirmar edicion";

      divConsulta.appendChild(btnConfirmar);
      divConsulta.appendChild(tipoConsulta);
      divConsulta.appendChild(mensaje);
      btnConfirmar.addEventListener("click", async function () {
        const objConsulta = {
          tipoConsulta: tipoConsulta.value,
          mensaje: mensaje.value,
        };

        await patchConsulta("ticket/", objConsulta, consulta.id);
      });
    });
  });
}
traerConsultas();

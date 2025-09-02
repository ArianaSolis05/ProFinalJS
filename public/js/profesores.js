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
    const divBotones = document.createElement("div")
   

    divBotones.setAttribute("class","botones")
    
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
    

    botonEliminar.setAttribute("class", "inputConsulta")
    botonResponder.setAttribute("class", "inputConsulta")
    botonEditar.setAttribute("class", "inputConsulta")
    
    
    consulta.textContent = `Nombre: ${consulta.nombreCompleto}  Correo: ${consultas.correo} Tipo de consulta: ${consultas.tipoConsulta} Consulta emitida: ${consultas.mensaje}`;
    
    nombreCompleto.textContent = `Nombre: ${consulta.nombreCompleto}`;
    correo.textContent = `Correo: ${consulta.correoElectronico}`;
    tipoConsulta.textContent = `Tipo Consulta: ${consulta.tipoConsulta}`;
    mensaje.textContent = `Mensaje: ${consulta.mensaje}`;
    
    listaConsultas.setAttribute("class", "lista");
    
    divConsulta.appendChild(divBotones)
     divBotones.appendChild(botonEditar)
    divBotones.appendChild(botonEliminar)
    divBotones.appendChild(botonResponder)
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
      respuesta.placeholder = 'AGREGAR RESPUESTA'
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
        window.location.reload()
      });
    });

    botonEditar.addEventListener("click", function () {
      const btnConfirmar = document.createElement("button");
      const tipoConsulta = document.createElement("input");
      tipoConsulta.placeholder = "Agregar nuevo tipo"
      const mensaje = document.createElement("input");
      btnConfirmar.textContent = "Confirmar edicion";
      
      mensaje.textContent = 'Mensaje de consulta'
      tipoConsulta.placeholder = "Tipo de la consulta"
      mensaje.placeholder = "Mensaje"
      btnConfirmar.setAttribute("class","inputConsultas");
      tipoConsulta.setAttribute("class","inputConsultas");
      mensaje.setAttribute("class","inputConsultas");
      btnConfirmar.setAttribute("class","inputConsultas");


      divConsulta.appendChild(btnConfirmar);
      divConsulta.appendChild(tipoConsulta);
      divConsulta.appendChild(mensaje);
      btnConfirmar.addEventListener("click", async function () {
        const objConsulta = {
          tipoConsulta: tipoConsulta.value,
          mensaje: mensaje.value,
        };

        await patchConsulta("ticket/", objConsulta, consulta.id);
        window.location.reload()
      });
    });
  });
}

const retorno = document.getElementById("retorno")

retorno.textContent ="Volver a la página principal"
retorno.setAttribute("class", "retornar")

retorno.addEventListener("click", function () {
  

  window.location.href = "../pages/login.html"
})


traerConsultas();

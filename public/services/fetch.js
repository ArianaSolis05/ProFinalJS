async function postData(obj, endpoint) {
  try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}

async function getData(endpoint) {
  try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}`);
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}

async function deleteConsulta(endpoint, id) {
  try {
    const response = await fetch(
      `http://localhost:3001/${endpoint}` + id + "/",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const borrarConsulta = await response.json();

    return borrarConsulta;
  } catch (error) {
    console.log("Error al eliminar consulta");
  }
}

async function patchConsulta(endpoint, consulta, id) {
  try {
    const response = await fetch(
      `http://localhost:3001/${endpoint}` + id + "/",
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(consulta),
      }
    );

    const consultas = await response.json();

    return consultas;
  } catch (error) {
    console.log("Error al editar consulta");
  }
}

export { postData, getData, deleteConsulta, patchConsulta };

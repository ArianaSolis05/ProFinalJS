
async function postConsulta() {
  try {
    const peticionConsulta = await fetch(`http://localhost:3001/ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const respuestaConsulta = await peticionConsulta.json();
    console.log(respuestaConsulta);
    return respuestaConsulta;
  } catch (error) {
    console.error(error);
  }
}

async function getConsulta(endpoint) {
  try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}`);
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}

export{postConsulta, getConsulta}




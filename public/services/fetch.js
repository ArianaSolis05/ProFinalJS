async function postData(obj, endpoint) {
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
}

export { postData };

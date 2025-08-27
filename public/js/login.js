
const email = document.getElementById("email")
const password = document.getElementById("password")
const btnIngresar = document.getElementById("btnIngresar")

let users = []

btnIngresar.addEventListener("click", function () {

    const usuarios = {
        email: email.value,
        password: password.value,
    }
    console.log(usuarios);

    if (email === "" && password === "") {
        return true
    }else{
        alert("usuario incorrecto")
    }
    
});





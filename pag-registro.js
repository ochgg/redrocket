// Boton Aceptar del formulario de registerButton.
const registerButton = document.getElementById("btn-register");

let users = [];

registerButton.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const ciudad = document.getElementById("ciudad").value;
    const pais = document.getElementById("pais").value;
    const edad = document.getElementById("edad").value;
    const estudios = document.getElementById("estudios").value; 
    const idiomas = document.getElementById("idiomas").value;
    const linkedin = document.getElementById("linkedin").value;
    const hobbies = document.getElementById("hobbies").value;
    
    
    const user = {
        name: name,
        email: email,
        password: password,    
        ciudad: ciudad,
        pais: pais,
        edad: edad,
        estudios: estudios,
        idiomas: idiomas,
        linkedin: linkedin,
        hobbies: hobbies
    };

    users.push(user);
// localStorage guarda los datos en local
    localStorage.setItem("users",JSON.stringify(users));

    console.log(users);
});

// Boton Cancelar del formulario de registerButton.
function cancelar() {
    window.location.href="Aqui va link de la pagina de inicio o login";
}


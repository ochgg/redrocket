const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmarPasswordInput = document.querySelector('#confirmarpassword');
const ciudadInput = document.querySelector('#ciudad');
const paisInput = document.querySelector('#pais');
const edadInput = document.querySelector('#edad');
const estudiosInput = document.querySelector('#estudios');
const idiomasInput = document.querySelector('#idiomas');
const linkedinInput = document.querySelector('#linkedin');
const hobbiesInput = document.querySelector('#hobbies');
const mensaje = document.querySelector('#mensaje');
const success = document.querySelector('.mensaje-exitoso');
const error = document.querySelector('.error');

const regexEmail = /^\S+@\S+\.\S+$/; 
const regexLinkedIn = /^(https?:\/\/)?([\w\d]+\.)?linkedin\.com\/.+$/; 

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmarPassword = confirmarPasswordInput.value;
  const ciudad = ciudadInput.value;
  const pais = paisInput.value;
  const edad = edadInput.value;
  const estudios = estudiosInput.value;
  const idiomas = idiomasInput.value;
  const linkedin = linkedinInput.value;
  const hobbies = hobbiesInput.value;

  // Validaciones
  if (password !== confirmarPassword) {
    error.innerHTML = 'Las contraseñas no coinciden';
    success.style.display = 'none';
    error.style.display = 'block';
    return;
}

if (password.length < 6 || password.length > 12) {
    error.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres';
    success.style.display = 'none';
    error.style.display = 'block';
    return;
}

if (!regexEmail.test(email)) {
    error.innerHTML = 'Ingrese un correo electrónico válido';
    success.style.display = 'none';
    error.style.display = 'block';
    return;
}

if (linkedin && !regexLinkedIn.test(linkedin)) {
    error.innerHTML = 'Ingrese una URL de LinkedIn válida';
    success.style.display = 'none';
    error.style.display = 'block';
    return;
}

if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    error.innerHTML = 'Solo se admiten letras en este campo';
    success.style.display = 'none';
    error.style.display = 'block';
    return;
}


try {
  const response = await fetch('/api/registrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, email, password, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies })
  });
  
  if (response.ok) {
    success.innerHTML = 'El registro se ha completado exitosamente';
    error.style.display = 'none';
    success.style.display = 'block';
    setTimeout(function () {
      console.log("Redirigiendo a la pagina de inicio de sesion");
      // window.location.href = window.location.origin + "/login.html";
      window.location.href = "login.html";
    }, 2000);
  } else {
    const responseData = await response.json();
    error.innerHTML = responseData.message;
    success.style.display = 'none';
    error.style.display = 'block';
  }

} catch (error) {
  error.innerHTML = 'Ha ocurrido un error y no se pudo completar el registro';
  success.style.display = 'none';
  error.style.display = 'block';
}
});
// try {
//   const responseData = await fetch('/api/registrar', {
//     // fetch('/api/registrar', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ nombre, email, password, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies })
//   }).then(response => response.json());
  

//   // const responseData = await response.json();
  
//   if (response.ok) {
//     success.innerHTML = responseData.message;
//     error.style.display = 'none';
//     success.style.display = 'block';
// } else {
//     error.innerHTML = responseData.message;
//     success.style.display = 'none';
//     error.style.display = 'block';

// // Redirigir a la página deseada después de un breve retraso (por ejemplo, 2 segundos)
// }

// setTimeout(function () {
//   console.log("Redirigiendo a la pagina de inicio de sesion");
//     window.location.href = "login.html";
// }, 3000);

// } catch (error) {
// error.innerHTML = 'Ha ocurrido un error y no se pudo completar el registro';
// success.style.display = 'none';
// error.style.display = 'block';
// }
// });


  

  // .then(function(data) {
  //   mensaje.textContent = `Se ha registrado el usuario exitosamente.`;
  //   nombreInput.value = '';
  //   emailInput.value = '';
  //   passwordInput.value = '';
  //   ciudadInput.value = '';
  //   paisInput.value = '';
  //   edadInput.value = '';
  //   estudiosInput.value = '';
  //   idiomasInput.value = '';
  //   linkedinInput.value = '';
  //   hobbiesInput.value = '';
  // })
//   .catch(function(error) {
//     console.log(error);
//     mensaje.textContent = 'Ha ocurrido un error al registrar los datos.';
//   });
// });







// Crear un objeto FormData que incluye la imagen
// const formData = new FormData();
// formData.append('imagen', archivoDeImagen);

// // Enviar la solicitud POST al endpoint de carga de imágenes
// fetch('/api/cargar-imagen', {
//   method: 'POST',
//   body: formData
// })
// .then(response => response.json())
// .then(data => {
//   // Aquí puedes manejar la respuesta de la carga de la imagen
// })
// .catch(error => {
//   console.error('Error al cargar la imagen:', error);
// });

// caja ayuda con un click
// $(document).ready(function() {
//   // Selector del botón "Abrir chat"
//   var openChatBtn = $(".open-chat-btn");
  
//   // Selector de la caja de chat
//   var chatbox = $(".chatbox");
  
//   // Función que se ejecuta cuando se hace clic en el botón "Abrir chat"
//   openChatBtn.click(function() {
//     // Si la caja de chat está oculta, se despliega hacia arriba
//     if (chatbox.hasClass("d-none")) {
//       chatbox.removeClass("d-none");
//       chatbox.animate({ bottom: "60px" });
//     } else { // Si la caja de chat está visible, se oculta hacia abajo
//       chatbox.animate({ bottom: "-300px" }, function() {
//         chatbox.addClass("d-none");
//       });
//     }
//   });
// });

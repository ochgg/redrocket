const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const ciudadInput = document.querySelector('#ciudad');
const paisInput = document.querySelector('#pais');
const edadInput = document.querySelector('#edad');
const estudiosInput = document.querySelector('#estudios');
const idiomasInput = document.querySelector('#idiomas');
const linkedinInput = document.querySelector('#linkedin');
const hobbiesInput = document.querySelector('#hobbies');
const mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const ciudad = ciudadInput.value;
  const pais = paisInput.value;
  const edad = edadInput.value;
  const estudios = estudiosInput.value;
  const idiomas = idiomasInput.value;
  const linkedin = linkedinInput.value;
  const hobbies = hobbiesInput.value;

  fetch('/api/registrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, email, password, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies })
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al registrar los datos');
    }
  })
  .then(function(data) {
    mensaje.textContent = `Se ha registrado el usuario exitosamente.`;
    nombreInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    ciudadInput.value = '';
    paisInput.value = '';
    edadInput.value = '';
    estudiosInput.value = '';
    idiomasInput.value = '';
    linkedinInput.value = '';
    hobbiesInput.value = '';
  })
  .catch(function(error) {
    console.log(error);
    mensaje.textContent = 'Ha ocurrido un error al registrar los datos.';
  });
});

// Crear un objeto FormData que incluye la imagen
const formData = new FormData();
formData.append('imagen', archivoDeImagen);

// Enviar la solicitud POST al endpoint de carga de imágenes
fetch('/api/cargar-imagen', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  // Aquí puedes manejar la respuesta de la carga de la imagen
})
.catch(error => {
  console.error('Error al cargar la imagen:', error);
});

// caja ayuda con un click
$(document).ready(function() {
  // Selector del botón "Abrir chat"
  var openChatBtn = $(".open-chat-btn");
  
  // Selector de la caja de chat
  var chatbox = $(".chatbox");
  
  // Función que se ejecuta cuando se hace clic en el botón "Abrir chat"
  openChatBtn.click(function() {
    // Si la caja de chat está oculta, se despliega hacia arriba
    if (chatbox.hasClass("d-none")) {
      chatbox.removeClass("d-none");
      chatbox.animate({ bottom: "60px" });
    } else { // Si la caja de chat está visible, se oculta hacia abajo
      chatbox.animate({ bottom: "-300px" }, function() {
        chatbox.addClass("d-none");
      });
    }
  });
});


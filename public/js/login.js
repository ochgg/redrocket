// const form = document.getElementById ('formulario');


// const enviarFormulario = (event) => {
//     event.preventDefault ();
//     console.log (
//     event.target.email.value, 
//     event.target.password.value,
//    );
    
// }
// form.addEventListener('submit', enviarFormulario);

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que se envíe el formulario

  const correo = document.querySelector('#correo').value;
  const contrasena = document.querySelector('#contrasena').value;

  // Realizar la lógica para enviar los datos del formulario al servidor
});


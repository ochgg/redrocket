// const form = document.getElementById ('formulario');


// const enviarFormulario = (event) => {
//     event.preventDefault ();
//     console.log (
//     event.target.email.value, 
//     event.target.password.value,
//    );
    
// }
// form.addEventListener('submit', enviarFormulario);

// const formulario = document.querySelector('#formulario');
// formulario.addEventListener('submit', (event) => {
//   event.preventDefault(); // Evita que se envíe el formulario

//   const correo = document.querySelector('#correo').value;
//   const contrasena = document.querySelector('#contrasena').value;

//   // Realizar la lógica para enviar los datos del formulario al servidor
// });

const contactForm = document.getElementById("formulario");
const userDiv = document.getElementById("form3Example3");
const passwordDiv = document.getElementById("form3Example4");
const errorContainer = document.getElementById("error");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!errorContainer.classList.contains("hidden")) {
    !errorContainer.classList.add("hidden");
  }
  const email = userDiv.value;
  const password = passwordDiv.value;
  const response = await fetch("http://localhost:4000/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();
  if (result.error) {
    errorContainer.text = result.error;
    errorContainer.classList.remove("hidden");
  } else {
    const userId = result.id;
    localStorage.setItem('id_usuario', userId);
    window.location.href = `./profile.html?id=${userId}`;
  }
});
//     const userId = parseInt(localStorage.getItem('id_usuario'));
//     localStorage.setItem(userId, result.id)
//     window.location.href = `./profile.html?id=${userId}`;

//     // window.location.href = "./home.html";
//   }
// });


// const contactForm = document.getElementById("formulario");
// const userDiv = document.getElementById("form3Example3");
// const passwordDiv = document.getElementById("form3Example4");
// const errorContainer = document.getElementById("error");

// contactForm.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   if (!errorContainer.classList.contains("hidden")) {
//     !errorContainer.classList.add("hidden");
//   }
//   const email = userDiv.value;
//   const password = passwordDiv.value;
//   const response = await fetch("http://localhost:4000/auth", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   const result = response.json();
//   if (result.error) {
//     errorContainer.text = response.error;
//     errorContainer.classList.remove("hidden");
//   } else {
//     const userId = parseInt(localStorage.getItem('id_usuario'));
//     localStorage.setItem(userId, result.id)
//     window.location.href = "./home.html";
//   }
// });
// const result = await response.json();
//   if (result.error) {
//     errorContainer.textContent = result.error;
//     errorContainer.classList.remove("hidden");
//   } else {
//     localStorage.setItem("userId", result.id);
//     localStorage.setItem("token", result.token);
//     window.location.href = "./home.html";
//   }
// });
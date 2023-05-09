let numero2=0;
let contar2 = document.getElementById("caja3");
let likeButton2 = document.getElementById("likeButton2");
let rojo = document.getElementById("corazon");

likeButton2.addEventListener("click", ()=>{numero2++;

    contar2.textContent = numero2;
    rojo.style.fill = "red";
    });

function darLike2() {
    return new Promise(function(resolve, reject) {

      setTimeout(function() {
       
        resolve("Función ejecutada correctamente");
      }, 2000);
    });
  }
  document.getElementById("likeButton2").addEventListener("click", function() {
    darLike2()
    .then(function(resultado) {
      console.log(resultado);
    }).catch(function(mensajeError) {
        console.log (mensajeError);
    })
    
  });
  function obtenerUsuarioRandom() {
    /* Obtiene un usuario aleatorio de la API de Randomuser. */
    return fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => data.results[0])
      .catch(error => {
        console.log("Error al obtener el usuario aleatorio:");
      });
  }
  
  function mostrarUsuarioEnRedSocial(usuario) {
    /* Muestra la información del usuario en la sección de usuario de una red social ficticia. */
    if (usuario) {
      const nombre = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
      console.log("Nombre:", nombre);
      console.log("Género:", usuario.gender);
      console.log("Fecha de nacimiento:", usuario.dob.date);
      console.log("País:", usuario.location.country);
      console.log("Email:", usuario.email);
      console.log("Teléfono:", usuario.phone);
      console.log("Foto de perfil:", usuario.picture.large);
    } else {
      console.log("No se ha obtenido información del usuario.");
    }
  }
  
  // Obtener un usuario aleatorio
  obtenerUsuarioRandom()
    .then(usuarioRandom => {
      // Mostrar el usuario en la sección de usuario de la red social
      console.log("Información del usuario en la red social:");
      mostrarUsuarioEnRedSocial(usuarioRandom);
    });

    function obtenerUsuarioRandom() {
        /* Obtiene un usuario aleatorio de la API de Randomuser. */
        return fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(data => data.results[0])
          .catch(error => {
            console.error("Error al obtener el usuario aleatorio:", error);
            return null;
          });
      }
  
      function mostrarUsuarioEnHTML(usuario) {
        /* Muestra la información del usuario en el DOM del HTML. Hago una variable con la información que me da la API y le pido que la ponga en párrafos en mi DIV */
        const usuarioInfoDiv = document.getElementById('usuarioInfo');
        if (usuario) {
          const nombre = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
          const genero = usuario.gender;
          const fechaNacimiento = usuario.dob.date;  //no vale poner cualquier cosa, hay palabras que marca la página para cada dato
          const pais = usuario.location.country;
          const email = usuario.email;
          const telefono = usuario.phone;
          const fotoPerfil = usuario.picture.large;
  
          // Actualiza el contenido del div con la información del usuario innerHTML me permite mostrar el contenido obtenido en mi DIV
          usuarioInfoDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Género:</strong> ${genero}</p>
            <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Foto de perfil:</strong> <img src="${fotoPerfil}" alt="Foto de perfil"></p>
          `;
        } else {
          usuarioInfoDiv.innerHTML = '<p>No se ha obtenido información del usuario.</p>'; //si hay error le pido que me muestre esto en mi DIV
        }
      }
  
      // Obtener un usuario aleatorio
      obtenerUsuarioRandom()
        .then(usuarioRandom => {
          // Mostrar el usuario en el DOM del HTML
          mostrarUsuarioEnHTML(usuarioRandom);
        });

        document.getElementById('btnGenerarUsuario').addEventListener('click', () => {
            obtenerUsuarioRandom()
              .then(usuarioRandom => {
                mostrarUsuarioEnHTML(usuarioRandom);
              });
          }); 

          function mostrarFecha() {
            var now = moment(new Date());
            console.log(now);
    
            var utc = moment(new Date()).utc();
            console.log(utc.format('DD MM YYYY hh:mm:ss'));
            
            document.getElementById("fecha").innerHTML = utc.format('DD MM YYYY hh:mm:ss');
          }

          function actualizarReloj() {
            var fecha = new Date();
            var horas = fecha.getHours();
            var minutos = fecha.getMinutes();
            var segundos = fecha.getSeconds();
    
            if (horas < 10) {
              horas = "0" + horas;
            }
    
            if (minutos < 10) {
              minutos = "0" + minutos;
            }
    
            if (segundos < 10) {
              segundos = "0" + segundos;
            }
    
            var horaActual = horas + ":" + minutos + ":" + segundos;
    
            document.getElementById("reloj").innerHTML = horaActual;
          }
    
          function iniciarReloj() {
            setInterval(actualizarReloj, 1000);
          }

      const form = document.querySelector('#post-form');
const container = document.querySelector('#post-container');
let posts = [];

// Función para mostrar los posts en el contenedor
function displayPosts() {
  // Vaciar el contenedor antes de mostrar los posts
  container.innerHTML = '';
  
  // Recorrer la lista de publicaciones
  for (const post of posts) {
    // Crear un nuevo div para la publicación
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.id = post.id;

    // Agregar el título y el contenido de la publicación al nuevo div
    const postTitle = document.createElement('h2');
    postTitle.innerText = post.title;
    newPost.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.innerText = post.content;
    newPost.appendChild(postContent);

    // Agregar un botón de likes
    const likeButton = document.createElement('button');
    likeButton.innerText = 'Like';
    newPost.appendChild(likeButton);

    const likeCount = document.createElement('span');
    likeCount.innerText = post.likes ? post.likes : 0;
    newPost.appendChild(likeCount);

    likeButton.addEventListener('click', () => {
      post.likes = post.likes ? post.likes + 1 : 1;
      likeCount.innerText = post.likes;
      savePosts();
    });

    // Agregar un botón de eliminar
const deleteButton = document.createElement('button');
deleteButton.innerText = 'Eliminar';
newPost.appendChild(deleteButton);

// Agregar un controlador de eventos para el botón de eliminar
deleteButton.addEventListener('click', () => {
  // Obtener el índice de la publicación correspondiente
  const index = posts.findIndex((post) => post.id === newPost.id);

  // Si se encontró la publicación, eliminarla del arreglo
  if (index !== -1) {
    posts.splice(index, 1);

    // Actualizar el almacenamiento local
    savePosts();

    // Volver a mostrar los posts actualizados
    displayPosts();
  }
});



    // Agregar el nuevo div al contenedor
    container.appendChild(newPost);
  }
}

// Función para guardar los posts en el almacenamiento local
function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Función para cargar los posts desde el almacenamiento local
function loadPosts() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  // Si hay publicaciones almacenadas
  if (storedPosts && storedPosts.length > 0) {
    posts = storedPosts;
  }

  // Mostrar los posts en el contenedor
  displayPosts();
}

// Cargar los posts almacenados al iniciar la página
loadPosts();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.querySelector('#post-title').value;
  const content = document.querySelector('#post-content').value;

  try {
    const response = await fetch('/api/publicar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });

    const data = await response.json();

    // Agregar la nueva publicación a la lista
    posts.push(data);

    // Guardar la lista actualizada en el almacenamiento local
    savePosts();

    // Mostrar los posts en el contenedor
    displayPosts();

    // Limpiar los campos del formulario
    document.querySelector('#post-content').value = '';
    document.querySelector('#post-title').value = '';
  } catch (error) {
    console.error('Error:', error);
  }
});


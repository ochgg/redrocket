const boton = document.querySelector('#bton')
const div = document.querySelector('.perfil')
boton.addEventListener('click', () => {
    const confirmacion = confirm('¿Estas seguro de eliminar tu cuenta?')
    if (confirmacion) {
        deleteAccount(() => {
                div.remove();
                boton.remove();
                setTimeout(() => {
                    window.location.href = 'http://localhost:4000/login.html';
                }, 1000);
            });
        }
    else {
        alert("Cancelado")
    }
});

function deleteAccount (callback) {
    setTimeout (() => {
        callback ();
    },1000);
}

const boton2 = document.querySelector('#bton2')
boton2.addEventListener('click', () => {
    const confirmacion = confirm('¿Quieres editar tu perfil?')
    if (confirmacion) {
        deleteAccount(() => {                
                setTimeout(() => {
                    window.location.href = '/redrocket/public/registro.html';
                }, 1000);
            });
        }
    else {
        alert("Cancelado")
    }
});

function deleteAccount (callback) {
    setTimeout (() => {
        callback ();
    },1000);
}

// Obtener un usuario aleatorio

  
 
                  



      const urlParams = new URLSearchParams(window.location.search);
      const id_usuario = urlParams.get('id_usuario');
      fetch(`/api/usuarios/${id_usuario}`)
        .then(response => response.json())
        .then(data => {
          const datos = document.getElementById('datos');
          datos.innerHTML = `
            <p><img class="notificaciones" src="img/usuario.png" alt="Nombre">Nombre: ${data.nombre}</p>
            <p><img class="notificaciones" src="img/email.png" alt="Certi">Email: ${data.email}</p>
            <p><img class="notificaciones" src="img/marcador-de-posicion.png" alt="">Ciudad: ${data.ciudad}</p>
            <p>Pais: ${data.pais}</p>
            <p><img class="notificaciones Calendar" src="img/calendario.png" alt="Calendario">Edad: ${data.edad}</p>
            <p><img class="notificaciones" src="img/certificado.png" alt="Certi">Estudios: ${data.estudios}</p>
            <p><img class="notificaciones" src="img/idioma.png" alt="Certi">Idiomas: ${data.idiomas}</p>
            <p><img class="notificaciones" src="img/linkedin.png" alt="Certi">Linkedin: ${data.linkedin}</p>
            <p><img class="notificaciones" src="img/hobbies.png" alt="Certi">Hobbies: ${data.hobbies}</p>

          `;
        })
        .catch(error => console.error(error));
    

   

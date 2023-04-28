const boton = document.querySelector('#bton')
const div = document.querySelector('.perfil')
boton.addEventListener('click', () => {
    const confirmacion = confirm('¿Estas seguro de eliminar tu cuenta?')
    if (confirmacion) {
        deleteAccount(() => {
                div.remove();
                boton.remove();
                setTimeout(() => {
                    window.location.href = '/registro-copia/pag-registro.html';
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




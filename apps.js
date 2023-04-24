// /* Mediante un evento se controla el desplazamiento para ocultar la caja */
// window.addEventListener("scroll", function () {
//     var chatbox = document.querySelector(".chatbox");
//     if (chatbox) {
//       if (
//         window.scrollY > document.documentElement.clientHeight &&
//         !chatbox.classList.contains("closed")
//       ) {
//         chatbox.classList.add("closed");
//       } else if (
//         window.scrollY < document.documentElement.clientHeight &&
//         chatbox.classList.contains("closed")
//       ) {
//         chatbox.classList.remove("closed");
//       }
//     }
//   });

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


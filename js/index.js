let nombre = "";
const chatContainer = document.getElementById("chat-container");
const messagesDiv = document.getElementById("chat-messages");
const nameInput = document.getElementById("user-name-input");
const sendNameBtn = document.getElementById("send-name-btn");
const optionsGrid = document.getElementById("options-grid");

// Función para abrir el chat
document.getElementById("trigger-chat").onclick = () => {
  chatContainer.style.display = "block";
  if (messagesDiv.innerHTML === "") {
    addMessage(
      "¡Hola! Soy tu asistente de Seguridad Pro. ¿Cómo te llamas?",
      "bot",
    );
  }
};

function cerrarChat() {
  chatContainer.style.display = "none";
}

function addMessage(texto, tipo) {
  const div = document.createElement("div");
  div.className = `msg ${tipo}`;
  div.innerText = texto;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Al recibir el nombre del cliente
function iniciarChat() {
  nombre = nameInput.value.trim();
  if (nombre !== "") {
    addMessage(nombre, "user");
    // Escondemos el input para dar paso a los botones
    nameInput.style.display = "none";
    sendNameBtn.style.display = "none";

    setTimeout(() => {
      addMessage(
        `¡Un placer, ${nombre}! 😊 ¿En qué puedo ayudarte hoy?`,
        "bot",
      );
      optionsGrid.style.display = "flex";
    }, 700);
  }
}

function responder(tipo) {
  if (tipo === "precios") {
    addMessage("¿Qué precios tienen?", "user");
    setTimeout(
      () =>
        addMessage(
          `${nombre}, nuestras cámaras 4K inician desde $120. ¡Son las mejores del mercado!`,
          "bot",
        ),
      700,
    );
  } else if (tipo === "instala") {
    addMessage("¿Hacen instalaciones?", "user");
    setTimeout(
      () =>
        addMessage(
          "Sí, realizamos instalaciones profesionales y dejamos la app lista en tu celular.",
          "bot",
        ),
      700,
    );
  } else if (tipo === "wpp") {
    addMessage("Quiero hablar con un asesor", "user");
    setTimeout(() => {
      addMessage("Redirigiendo a WhatsApp...", "bot");
      window.open(
        `https://api.whatsapp.com/send?phone=573194709052&text=Hola, soy ${nombre} y vi su página web. Necesito asesoría.`,
        "_blank",
      );
    }, 1000);
  }
}

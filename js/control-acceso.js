const modal = document.getElementById("modalCotizacion");
const botones = document.querySelectorAll(".btn-buy");
const tachita = document.querySelector(".close");
const form = document.getElementById("formCotizar");

// Variable para guardar el nombre del producto seleccionado
let productoSeleccionado = "";

// Lógica para abrir el modal y detectar el producto
botones.forEach((boton) => {
  boton.onclick = function (e) {
    e.preventDefault();

    // Buscamos el título (h3) dentro de la tarjeta del producto donde se hizo clic
    const card = this.closest(".product-card");
    productoSeleccionado = card.querySelector("h3").innerText;

    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("open");
    }, 10);
  };
});

// Lógica para cerrar el modal
tachita.onclick = function () {
  modal.classList.remove("open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
};

// --- FUNCIÓN DE ENVÍO A WHATSAPP ---
form.onsubmit = function (e) {
  e.preventDefault();

  const miTelefono = "573194709052";

  // 2. Captura los valores del formulario
  const nombreCliente = form.querySelector('input[type="text"]').value;
  const metodoPago = form.querySelector("select").value;
  const requiereInstala =
    form.querySelector('input[name="instala"]:checked').value === "si"
      ? "SÍ, INCLUIR SERVICIO TÉCNICO"
      : "NO, SOLO EL EQUIPO";

  // 3. Crear el mensaje con formato para WhatsApp
 const mensajeWpp = 
`*NUEVA SOLICITUD DE COTIZACIÓN*

*Producto:* ${productoSeleccionado}
*Cliente:* ${nombreCliente}
*Pago:* ${metodoPago.toUpperCase()}
*Instalación:* ${requiereInstala}

_Enviado desde el catálogo web._`;

const urlFinal = `https://api.whatsapp.com/send?phone=3194709052&text=${encodeURIComponent(mensajeWpp)}`;

window.open(urlFinal, "_blank");

  // Limpiar y cerrar
  form.reset();
  tachita.onclick();
};

// Cerrar si hacen clic fuera del modal
window.onclick = function (event) {
  if (event.target == modal) {
    tachita.onclick();
  }
};

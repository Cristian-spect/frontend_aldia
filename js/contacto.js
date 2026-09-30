// ═══════════════════════════════════════════════
// contacto.js – Validaciones del formulario
// ═══════════════════════════════════════════════

document.getElementById("form-contacto").addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar envío real del formulario
  let valido = true;

  const nombre  = document.getElementById("nombre");
  const correo  = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  // Limpiar errores y estilos previos
  ["err-nombre", "err-correo", "err-mensaje"].forEach(id => {
    document.getElementById(id).textContent = "";
  });
  [nombre, correo, mensaje].forEach(el => el.classList.remove("error-field"));

  // ── Validación: nombre obligatorio ───────────────────────────────────────
  if (nombre.value.trim() === "") {
    document.getElementById("err-nombre").textContent = "El nombre es obligatorio.";
    nombre.classList.add("error-field");
    valido = false;
  }

  // ── Validación: correo con formato válido ─────────────────────────────────
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(correo.value.trim())) {
    document.getElementById("err-correo").textContent = "Ingresa un correo electrónico válido.";
    correo.classList.add("error-field");
    valido = false;
  }

  // ── Validación: mensaje obligatorio ───────────────────────────────────────
  if (mensaje.value.trim() === "") {
    document.getElementById("err-mensaje").textContent = "El mensaje no puede estar vacío.";
    mensaje.classList.add("error-field");
    valido = false;
  }

  // ── Envío exitoso ─────────────────────────────────────────────────────────
  if (valido) {
    document.getElementById("form-contacto").reset();
    const conf = document.getElementById("confirmacion");
    conf.classList.remove("hidden");
    // Ocultar confirmación después de 4 segundos
    setTimeout(() => conf.classList.add("hidden"), 4000);
  }
});

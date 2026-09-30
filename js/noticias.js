// ═══════════════════════════════════════════════
// noticias.js – Listado con filtro y búsqueda
// ═══════════════════════════════════════════════

let catActual = "todas"; // Categoría activa en el filtro

document.addEventListener("DOMContentLoaded", () => {
  // Render inicial: mostrar todas las noticias
  renderNoticias();

  // ── Filtros por categoría ─────────────────────────────────────────────────
  document.querySelectorAll(".filtro").forEach(btn => {
    btn.addEventListener("click", () => {
      // Quitar clase activo del botón anterior
      document.querySelector(".filtro.activo").classList.remove("activo");
      // Activar el botón pulsado
      btn.classList.add("activo");
      catActual = btn.dataset.cat;
      renderNoticias();
    });
  });

  // ── Búsqueda en tiempo real ───────────────────────────────────────────────
  document.getElementById("buscador").addEventListener("input", renderNoticias);
});

// Filtra y renderiza las noticias según categoría y texto de búsqueda
function renderNoticias() {
  const query = document.getElementById("buscador").value.toLowerCase().trim();

  const filtradas = NOTICIAS.filter(n => {
    const coincideCategoria = catActual === "todas" || n.categoria === catActual;
    const coincideBusqueda  = n.titulo.toLowerCase().includes(query) ||
                              n.descripcion.toLowerCase().includes(query);
    return coincideCategoria && coincideBusqueda;
  });

  const grid       = document.getElementById("grid-noticias");
  const sinResult  = document.getElementById("sin-resultados");

  if (filtradas.length === 0) {
    grid.innerHTML = "";
    sinResult.classList.remove("hidden");
  } else {
    grid.innerHTML = filtradas.map(crearCard).join("");
    sinResult.classList.add("hidden");
  }
}

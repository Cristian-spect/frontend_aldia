// ═══════════════════════════════════════════════
// detalle.js – Vista de detalle de una noticia
// Lee el query param ?id=X de la URL
// ═══════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const id      = parseInt(params.get("id"));
  const noticia = NOTICIAS.find(n => n.id === id);
  const cont    = document.getElementById("detalle-container");

  // Si el id no corresponde a ninguna noticia, mostrar error
  if (!noticia) {
    cont.innerHTML = `
      <p>Noticia no encontrada.</p>
      <a href="noticias.html" class="btn-primary" style="margin-top:1rem;display:inline-block">
        Volver al listado
      </a>`;
    return;
  }

  const esFav = esFavorito(id);

  // Noticias relacionadas (misma categoría, distinto id, máx 2)
  const relacionadas = NOTICIAS
    .filter(n => n.categoria === noticia.categoria && n.id !== id)
    .slice(0, 2);

  cont.innerHTML = `
    <a href="noticias.html" class="volver">← Volver al listado</a>
    <span class="card-cat cat-${noticia.categoria}">${noticia.categoria}</span>
    <h1>${noticia.titulo}</h1>
    <p class="meta">Publicado el ${noticia.fecha} · Por Redacción Al Día</p>
    <img src="${noticia.imagen}" alt="${noticia.titulo}">
    <p class="cuerpo">${noticia.cuerpo}</p>
    <div class="acciones">
      <button class="btn-primary" id="btn-fav">
        ${esFav ? "✓ En favoritos" : "♥ Agregar a favoritos"}
      </button>
      <a href="contacto.html" class="btn-secondary">Ir a contacto</a>
    </div>
    ${relacionadas.length > 0 ? `
      <p class="relacionadas-titulo">RELACIONADAS</p>
      ${relacionadas.map(r => `
        <p><a href="detalle.html?id=${r.id}" class="card-link">${r.titulo}</a></p>
      `).join("")}
    ` : ""}
  `;

  // Botón de favorito
  document.getElementById("btn-fav").addEventListener("click", () => {
    toggleFavorito(noticia);
    location.reload(); // Recargar para actualizar el estado del botón
  });
});

// ── Helpers de localStorage ───────────────────────────────────────────────────
function getFavoritos() {
  return JSON.parse(localStorage.getItem("favs") || "[]");
}

function esFavorito(id) {
  return getFavoritos().some(f => f.id === id);
}

function toggleFavorito(noticia) {
  let favs = getFavoritos();
  if (esFavorito(noticia.id)) {
    // Quitar de favoritos
    favs = favs.filter(f => f.id !== noticia.id);
  } else {
    // Agregar a favoritos
    favs.push(noticia);
  }
  localStorage.setItem("favs", JSON.stringify(favs));
}

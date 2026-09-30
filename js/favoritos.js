// ═══════════════════════════════════════════════
// favoritos.js – Lista de favoritos guardados
// Lee desde localStorage y renderiza los ítems
// ═══════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  const favs   = JSON.parse(localStorage.getItem("favs") || "[]");
  const lista  = document.getElementById("lista-favoritos");
  const msgVac = document.getElementById("msg-vacio");

  // Si no hay favoritos, mostrar mensaje de estado vacío
  if (favs.length === 0) {
    msgVac.classList.remove("hidden");
    return;
  }

  // Renderizar cada favorito como ítem de lista
  favs.forEach(n => {
    const item = document.createElement("div");
    item.className = "fav-item";
    item.innerHTML = `
      <img class="fav-thumb" src="${n.imagen}" alt="${n.titulo}" loading="lazy">
      <div class="fav-info">
        <h3><a href="detalle.html?id=${n.id}">${n.titulo}</a></h3>
        <small>${n.categoria} · guardado el ${n.fecha}</small>
      </div>
      <button class="btn-quitar" data-id="${n.id}">Quitar</button>
    `;
    lista.appendChild(item);
  });

  // Delegación de eventos: clic en cualquier botón "Quitar"
  lista.addEventListener("click", e => {
    if (e.target.classList.contains("btn-quitar")) {
      const id   = parseInt(e.target.dataset.id);
      let   favs = JSON.parse(localStorage.getItem("favs") || "[]");
      favs = favs.filter(f => f.id !== id);
      localStorage.setItem("favs", JSON.stringify(favs));
      location.reload(); // Actualizar la lista
    }
  });
});

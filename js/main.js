// ═══════════════════════════════════════════════
// main.js – Lógica de index.html (Home)
// Renderiza las 3 primeras noticias como destacadas
// ═══════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid-destacadas");
  // Tomar las 3 primeras noticias del arreglo NOTICIAS (definido en data.js)
  const destacadas = NOTICIAS.slice(0, 3);
  destacadas.forEach(n => {
    grid.innerHTML += crearCard(n);
  });
});

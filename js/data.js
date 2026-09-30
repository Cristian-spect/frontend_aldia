// ═══════════════════════════════════════════════
// data.js – JSON local con las noticias
// Accesible globalmente por todos los scripts
// ═══════════════════════════════════════════════

const NOTICIAS = [
  {
    id: 1,
    categoria: "educacion",
    titulo: "Becas de inglés abren convocatoria en octubre",
    descripcion: "Aplican estudiantes de últimos semestres de universidades públicas.",
    imagen: "https://picsum.photos/seed/ed1/640/360",
    fecha: "2026-09-10",
    cuerpo: "El programa cubre matrícula, materiales y una beca de manutención mensual. La convocatoria estará abierta del 1 al 31 de octubre a través del portal oficial del Ministerio de Educación. Se requiere un promedio mínimo de 3.8 y carta de motivación en inglés. Las clases iniciarán en enero de 2027 en modalidad virtual con sesiones en vivo los fines de semana."
  },
  {
    id: 2,
    categoria: "tecnologia",
    titulo: "Nueva app local conecta pequeños negocios con domicilios",
    descripcion: "La plataforma promete tiempos de entrega menores a 30 minutos.",
    imagen: "https://picsum.photos/seed/tec2/640/360",
    fecha: "2026-09-03",
    cuerpo: "Durante la fase de prueba se vincularon 85 comercios, entre panaderías, farmacias y tiendas de barrio, que reportaron un incremento del 20% en pedidos durante los fines de semana. El sistema asigna domiciliarios por zona geográfica y permite rastrear el pedido en tiempo real. Los desarrolladores anunciaron que la app estará disponible para todo público a partir del próximo mes, con versión web y móvil para Android e iOS."
  },
  {
    id: 3,
    categoria: "turismo",
    titulo: "Cinco rutas poco conocidas para el puente festivo",
    descripcion: "Destinos cercanos, económicos y con poca afluencia de turistas.",
    imagen: "https://picsum.photos/seed/tur3/640/360",
    fecha: "2026-09-08",
    cuerpo: "El puente de octubre trae opciones para escapar sin gastar mucho. Las rutas seleccionadas incluyen el páramo de Guerrero, el cañón del Chicamocha por sendero, la laguna de La Cocha, el desierto de La Tatacoa y el pueblo de Barichara. Cada destino está a menos de cinco horas de las principales ciudades y cuenta con opciones de alojamiento por menos de 80.000 pesos la noche."
  },
  {
    id: 4,
    categoria: "comercial",
    titulo: "Mercados locales lanzan feria de fin de mes",
    descripcion: "Descuentos de hasta 30% en más de 60 negocios.",
    imagen: "https://picsum.photos/seed/com4/640/360",
    fecha: "2026-09-12",
    cuerpo: "La iniciativa busca dinamizar el comercio en los últimos días del mes, cuando el flujo de clientes suele bajar. Participan tiendas de ropa, restaurantes, papelerías y servicios de belleza. Los descuentos se aplican presentando una tarjeta digital gratuita disponible en la app del distrito. La feria se realizará el último fin de semana de cada mes durante el resto del año."
  },
  {
    id: 5,
    categoria: "turismo",
    titulo: "Reabre el sendero de la laguna tras mantenimiento",
    descripcion: "Ingreso gratuito los primeros quince días.",
    imagen: "https://picsum.photos/seed/tur5/640/360",
    fecha: "2026-09-01",
    cuerpo: "El sendero estuvo cerrado tres meses por trabajos de adecuación del camino y señalización ecológica. Las mejoras incluyen zonas de descanso con techo, miradores y puntos de hidratación. La capacidad máxima es de 200 visitantes simultáneos y se requiere reserva previa en línea. Guías locales ofrecen recorridos temáticos sobre flora y fauna nativa los sábados y domingos."
  },
  {
    id: 6,
    categoria: "educacion",
    titulo: "Taller gratuito de robótica para jóvenes",
    descripcion: "Cupos limitados, inscripción por la app.",
    imagen: "https://picsum.photos/seed/ed6/640/360",
    fecha: "2026-09-07",
    cuerpo: "El taller tiene una duración de 8 horas distribuidas en dos sábados y es completamente gratuito gracias a una alianza entre la alcaldía y tres universidades locales. Los participantes construirán un robot seguidor de línea con piezas reutilizadas. Se requieren conocimientos básicos de matemáticas y el rango de edad es de 12 a 17 años. Los cupos disponibles son 40 por sede."
  },
  {
    id: 7,
    categoria: "tecnologia",
    titulo: "Bogotá estrena red de carga para bicicletas eléctricas",
    descripcion: "Diez puntos gratuitos en el centro de la ciudad.",
    imagen: "https://picsum.photos/seed/tec7/640/360",
    fecha: "2026-09-05",
    cuerpo: "La red de carga cubre las principales ciclovías del centro histórico y los nodos de transporte intermodal. Cada punto permite cargar hasta cuatro bicicletas simultáneamente y la carga completa toma entre 45 y 90 minutos. El proyecto piloto tiene financiación del Ministerio de Transporte y busca reducir la dependencia del combustible en el último kilómetro."
  },
  {
    id: 8,
    categoria: "comercial",
    titulo: "Emprendedores locales acceden a créditos blandos",
    descripcion: "Tasas desde el 0.5% mensual para negocios menores de dos años.",
    imagen: "https://picsum.photos/seed/com8/640/360",
    fecha: "2026-09-11",
    cuerpo: "El programa de créditos blandos cubre capital de trabajo, compra de equipos y adecuación de locales. Los montos van desde 2 hasta 50 millones de pesos con plazos de hasta 36 meses. Para aplicar se requiere el RUT, estados financieros básicos y un plan de negocio de máximo dos páginas. Las inscripciones se abren el lunes 15 de septiembre en las alcaldías locales."
  }
];

// ── Función global para crear una tarjeta HTML ────────────────────────────────
function crearCard(noticia) {
  return `
    <div class="card">
      <img src="${noticia.imagen}" alt="${noticia.titulo}" loading="lazy">
      <div class="card-body">
        <span class="card-cat cat-${noticia.categoria}">${noticia.categoria}</span>
        <p class="card-title">${noticia.titulo}</p>
        <p class="card-desc">${noticia.descripcion}</p>
        <a href="detalle.html?id=${noticia.id}" class="card-link">Ver más →</a>
      </div>
    </div>
  `;
}

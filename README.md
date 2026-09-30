# Al Día – Plataforma Web de Noticias

Proyecto académico del módulo de **Desarrollo de Front-end**  
Politécnico Grancolombiano · Grupo B02 – Grupo 10  
Tutor: John Olarte Ramos

## Integrantes
- Juan Nicolás Torres Moreno
- Brayan Agudelo
- Cristian Camilo Tobón Gallán

## Estructura del proyecto

```
al-dia/
├── index.html         ← Página de inicio (Home)
├── noticias.html      ← Listado con filtros y búsqueda
├── detalle.html       ← Vista de detalle de noticia
├── favoritos.html     ← Favoritos del usuario
├── contacto.html      ← Formulario de contacto
├── nosotros.html      ← Información del equipo
├── css/
│   └── styles.css     ← Estilos globales
└── js/
    ├── data.js        ← JSON local + función crearCard()
    ├── main.js        ← Home: cards destacadas
    ├── noticias.js    ← Filtros + búsqueda en tiempo real
    ├── detalle.js     ← Detalle + gestión de favoritos
    ├── favoritos.js   ← Lista de favoritos (localStorage)
    └── contacto.js    ← Validaciones del formulario
```

## Cómo ejecutar

No requiere servidor. Simplemente abre `index.html` en cualquier navegador moderno.

```bash
# Opción 1: abrir directo
open index.html

# Opción 2: con Live Server en VS Code
# Clic derecho en index.html → "Open with Live Server"
```

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Grid, Flexbox, responsive)
- JavaScript ES6+ (vanilla, sin dependencias)
- localStorage para favoritos
- JSON local para datos

## Funcionalidades

- Visualización dinámica de noticias desde JSON
- Filtrado por categoría (Educación, Tecnología, Turismo, Comercial)
- Búsqueda en tiempo real
- Vista de detalle con texto completo
- Agregar/quitar favoritos (persiste entre sesiones)
- Formulario de contacto con validaciones
- Diseño responsive (mobile-first)

# Al Día – Plataforma Web de Noticias (Angular)

Proyecto académico del módulo **Desarrollo de Front-end**
Politécnico Grancolombiano · Grupo B02 – Grupo 10
Tutor: John Olarte Ramos

**Sitio desplegado:** https://stellular-biscochitos-05085a.netlify.app/

## Integrantes

- Juan Nicolás Torres Moreno
- Brayan Agudelo
- Cristian Camilo Tobón Gallán
- Cristian Camilo Anzola

## Descripción

"Al Día" es un periódico digital con noticias de educación, tecnología, turismo y comercio.
Esta versión (Entrega 3) migra el prototipo de HTML, CSS y JavaScript de la Entrega 2 a **Angular 20 con TypeScript**,
usando componentes, data binding, servicios y Angular Router.

## Funcionalidades

- Inicio con noticias destacadas, estadísticas y llamada a la acción.
- Listado de noticias con filtro por categoría y búsqueda en tiempo real.
- Detalle de noticia (`/detalle/:id`) con noticias relacionadas.
- Favoritos que se guardan en `localStorage` y persisten entre sesiones.
- Formulario de contacto con Reactive Forms y validaciones.
- Página "Nosotros" y página 404 para rutas inexistentes.
- Diseño responsive y accesibilidad básica (`aria-*`, `alt`, `lang="es"`).

## Tecnologías

- Angular 20 (componentes standalone, signals, control flow `@if` / `@for`)
- TypeScript 5.9
- HTML5 y CSS3 (Grid, Flexbox)
- Angular Router con carga diferida (lazy loading)
- Reactive Forms
- Netlify (despliegue)

## Estructura del proyecto

```
src/
├── index.html                     ← Página base donde se monta la app
├── main.ts                        ← Arranque de la aplicación y del Router
├── styles.css                     ← Estilos globales
└── app/
    ├── app.component.ts / .html   ← Componente raíz: navbar, footer y <router-outlet>
    ├── app.routes.ts              ← Definición de rutas
    ├── core/
    │   ├── noticias.ts            ← Interfaz Noticia y datos locales
    │   └── favoritos.service.ts   ← Servicio de favoritos (localStorage)
    ├── shared/
    │   └── noticia-card.component.ts  ← Tarjeta de noticia reutilizable
    └── pages/
        ├── inicio.component.*     ← Home
        ├── noticias.component.*   ← Listado con filtros y búsqueda
        ├── detalle.component.*    ← Detalle de noticia + favoritos
        ├── favoritos.component.*  ← Lista de favoritos
        ├── contacto.component.*   ← Formulario de contacto
        ├── nosotros.component.*   ← Información del equipo
        └── no-encontrada.component.ts ← Página 404
scripts/
└── check-models.mjs               ← Pruebas de datos, favoritos y formulario
```

## Data binding usado

| Tipo | Ejemplo | Dónde |
|---|---|---|
| Interpolación | `{{ noticia().titulo }}` | Tarjeta, Detalle |
| Property binding | `[src]="n.imagen"`, `[class.activo]="..."` | Tarjeta, Noticias |
| Event binding | `(click)="favoritos.toggle(n)"` | Detalle, Favoritos, Noticias |
| Two-way (valor + evento) | `[value]="busqueda()"` + `(input)="busqueda.set(...)"` | Buscador |
| Formularios reactivos | `[formGroup]`, `formControlName` | Contacto |
| Input de componente | `<app-noticia-card [noticia]="n" />` | Inicio, Noticias |

## Cómo ejecutar el proyecto

Requisitos: **Node.js 22.12 o superior** (se recomienda la versión LTS). No hace falta instalar Angular CLI de forma global.

```bash
# 1. Clonar el repositorio
git clone <URL-del-repositorio>
cd <carpeta-del-repositorio>

# 2. Instalar dependencias
npm ci

# 3. Iniciar el servidor de desarrollo
npm start
```

Abrir http://localhost:4200 en el navegador.

> No abras `src/index.html` directamente: Angular necesita compilarse primero.

## Compilar para producción

```bash
npm run build
```

Los archivos quedan en `dist/aldia/browser/`, que es la carpeta que se publica en Netlify.

## Pruebas

```bash
npm test
```

Verifica los datos de noticias, el servicio de favoritos (guardar, quitar, persistencia, datos corruptos) y las validaciones del formulario de contacto.

## Despliegue en Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist/aldia/browser`

## Historial del proyecto

- **Entrega 1:** propuesta y mockups en Figma.
- **Entrega 2:** prototipo funcional en HTML, CSS y JavaScript.
- **Entrega 3:** migración a Angular, documentación y despliegue.

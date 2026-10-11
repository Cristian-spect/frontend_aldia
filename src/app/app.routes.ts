/**
 * Rutas de la aplicación Al Día.
 *
 * Cada página se carga de forma diferida (lazy loading) con `loadComponent`,
 * de modo que el navegador solo descarga el código de la vista que se visita.
 * También se redirigen las URL antiguas de la versión HTML (Entrega 2),
 * por ejemplo `noticias.html`, a sus nuevas rutas en Angular.
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  // ── Páginas principales ──
  {
    path: '',
    title: 'Al Día – Plataforma de Noticias',
    loadComponent: () => import('./pages/inicio.component').then(m => m.InicioComponent),
  },
  {
    path: 'noticias',
    title: 'Noticias',
    loadComponent: () => import('./pages/noticias.component').then(m => m.NoticiasComponent),
  },
  {
    // Detalle con parámetro de ruta: /detalle/3
    path: 'detalle/:id',
    title: 'Detalle',
    loadComponent: () => import('./pages/detalle.component').then(m => m.DetalleComponent),
  },
  {
    // Detalle con query param heredado de la versión HTML: /detalle?id=3
    path: 'detalle',
    title: 'Detalle',
    loadComponent: () => import('./pages/detalle.component').then(m => m.DetalleComponent),
  },
  {
    path: 'favoritos',
    title: 'Favoritos',
    loadComponent: () => import('./pages/favoritos.component').then(m => m.FavoritosComponent),
  },
  {
    path: 'contacto',
    title: 'Contacto',
    loadComponent: () => import('./pages/contacto.component').then(m => m.ContactoComponent),
  },
  {
    path: 'nosotros',
    title: 'Nosotros',
    loadComponent: () => import('./pages/nosotros.component').then(m => m.NosotrosComponent),
  },

  // ── Compatibilidad con las URL de la Entrega 2 ──
  { path: 'index.html', redirectTo: '', pathMatch: 'full' },
  { path: 'noticias.html', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'detalle.html', redirectTo: 'detalle', pathMatch: 'full' },
  { path: 'favoritos.html', redirectTo: 'favoritos', pathMatch: 'full' },
  { path: 'contacto.html', redirectTo: 'contacto', pathMatch: 'full' },
  { path: 'nosotros.html', redirectTo: 'nosotros', pathMatch: 'full' },

  // ── Cualquier otra ruta: página 404 ──
  {
    path: '**',
    title: 'Página no encontrada – Al Día',
    loadComponent: () => import('./pages/no-encontrada.component').then(m => m.NoEncontradaComponent),
  },
];

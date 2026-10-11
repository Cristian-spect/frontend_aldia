import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Noticia } from '../core/noticias';

/**
 * Tarjeta reutilizable de noticia.
 *
 * Reemplaza la función `crearCard()` de la Entrega 2. Recibe la noticia desde
 * el componente padre mediante un input (`<app-noticia-card [noticia]="n" />`)
 * y la muestra con property binding (`[src]`, `[alt]`, `[class]`) e
 * interpolación (`{{ }}`). Se usa en las páginas Inicio y Noticias.
 */
@Component({
  selector: 'app-noticia-card',
  imports: [RouterLink],
  template: `
    <article class="card">
      <img [src]="noticia().imagen" [alt]="noticia().titulo" loading="lazy">
      <div class="card-body">
        <!-- La clase cambia según la categoría para darle su color -->
        <span [class]="'card-cat cat-' + noticia().categoria">{{ noticia().categoria }}</span>
        <h2 class="card-title">{{ noticia().titulo }}</h2>
        <p class="card-desc">{{ noticia().descripcion }}</p>
        <a [routerLink]="['/detalle', noticia().id]" class="card-link">Ver más →</a>
      </div>
    </article>
  `,
})
export class NoticiaCardComponent {
  /** Noticia a mostrar (obligatoria). */
  readonly noticia = input.required<Noticia>();
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Página 404: se muestra cuando la URL no coincide con ninguna ruta. */
@Component({
  selector: 'app-no-encontrada',
  imports: [RouterLink],
  template: `
    <section class="detalle">
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe.</p>
      <a routerLink="/" class="btn-primary">Volver al inicio</a>
    </section>
  `,
})
export class NoEncontradaComponent {}

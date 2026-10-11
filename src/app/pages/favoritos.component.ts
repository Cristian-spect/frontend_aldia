import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritosService } from '../core/favoritos.service';

/**
 * Página de Favoritos.
 *
 * Muestra las noticias guardadas desde el servicio FavoritosService y permite
 * quitarlas. Si la lista está vacía, la plantilla muestra un mensaje que
 * invita a explorar noticias (bloque `@empty`).
 */
@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.component.html',
})
export class FavoritosComponent {
  /** Servicio compartido de favoritos (público para usarlo desde la plantilla). */
  readonly favoritos = inject(FavoritosService);
}

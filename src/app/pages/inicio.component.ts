import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoticiaCardComponent } from '../shared/noticia-card.component';
import { NOTICIAS } from '../core/noticias';

/**
 * Página de Inicio (Home).
 *
 * Muestra el hero, las tres primeras noticias como destacadas (usando el
 * componente reutilizable NoticiaCardComponent), estadísticas y una
 * llamada a la acción hacia Contacto.
 */
@Component({
  selector: 'app-inicio',
  imports: [RouterLink, NoticiaCardComponent],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  /** Noticias destacadas: las tres primeras del listado. */
  readonly destacadas = NOTICIAS.slice(0, 3);
}

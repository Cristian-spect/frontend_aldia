import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NOTICIAS } from '../core/noticias';
import { FavoritosService } from '../core/favoritos.service';

/**
 * Página de Detalle de una noticia.
 *
 * Obtiene el id desde la URL (`/detalle/3` o `/detalle?id=3`) usando
 * ActivatedRoute, busca la noticia y calcula hasta dos noticias relacionadas
 * de la misma categoría. Permite agregar o quitar la noticia de favoritos.
 */
@Component({
  selector: 'app-detalle',
  imports: [RouterLink],
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
  /** Servicio de favoritos (público para usarlo desde la plantilla). */
  readonly favoritos = inject(FavoritosService);
  private readonly route = inject(ActivatedRoute);

  /** Parámetros de ruta (/detalle/:id) convertidos a señal. */
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  /** Query params (?id=) convertidos a señal, por compatibilidad con la Entrega 2. */
  private readonly query = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  /** Noticia actual; se recalcula sola cuando cambia el id en la URL. */
  readonly noticia = computed(() =>
    NOTICIAS.find(n => n.id === Number(this.params().get('id') ?? this.query().get('id'))),
  );

  /** Hasta dos noticias de la misma categoría, sin incluir la actual. */
  readonly relacionadas = computed(() =>
    NOTICIAS.filter(
      n => n.categoria === this.noticia()?.categoria && n.id !== this.noticia()?.id,
    ).slice(0, 2),
  );
}

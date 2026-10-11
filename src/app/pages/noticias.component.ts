import { Component, computed, signal } from '@angular/core';
import { NoticiaCardComponent } from '../shared/noticia-card.component';
import { NOTICIAS } from '../core/noticias';

/**
 * Página de listado de Noticias.
 *
 * Permite filtrar por categoría y buscar por texto en tiempo real.
 * El estado (categoría y búsqueda) se guarda en señales, y `filtradas`
 * se recalcula automáticamente cada vez que alguna cambia.
 */
@Component({
  selector: 'app-noticias',
  imports: [NoticiaCardComponent],
  templateUrl: './noticias.component.html',
})
export class NoticiasComponent {
  /** Categoría seleccionada ('todas' muestra todo). */
  readonly categoria = signal('todas');

  /** Texto escrito en el buscador. */
  readonly busqueda = signal('');

  /** Botones de filtro: id interno y nombre visible. */
  readonly categorias = [
    { id: 'todas', nombre: 'Todas' },
    { id: 'educacion', nombre: 'Educación' },
    { id: 'tecnologia', nombre: 'Tecnología' },
    { id: 'turismo', nombre: 'Turismo' },
    { id: 'comercial', nombre: 'Comercial' },
  ];

  /** Noticias que cumplen la categoría y contienen el texto buscado (título o descripción). */
  readonly filtradas = computed(() => {
    const q = this.busqueda().trim().toLowerCase();
    return NOTICIAS.filter(n =>
      (this.categoria() === 'todas' || this.categoria() === n.categoria) &&
      (n.titulo.toLowerCase().includes(q) || n.descripcion.toLowerCase().includes(q)),
    );
  });
}

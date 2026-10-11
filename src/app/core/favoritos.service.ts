import { Injectable, signal } from '@angular/core';
import { NOTICIAS, Noticia } from './noticias';

/**
 * Servicio de favoritos.
 *
 * Centraliza la lista de noticias guardadas por el usuario y la persiste en
 * `localStorage` (clave `favs`), igual que en la Entrega 2. Al ser
 * `providedIn: 'root'`, existe una única instancia compartida por todos los
 * componentes: si el usuario agrega un favorito en Detalle, la página
 * Favoritos lo ve de inmediato gracias a la señal (`signal`).
 */
@Injectable({ providedIn: 'root' })
export class FavoritosService {
  /** Lista reactiva de noticias favoritas. */
  readonly favoritos = signal<Noticia[]>(this.leer());

  /** Mensaje de error si el navegador no permite guardar (p. ej. almacenamiento lleno). */
  readonly error = signal('');

  /**
   * Lee los favoritos guardados en localStorage.
   * Solo conserva los ids válidos y vuelve a tomar los datos desde NOTICIAS,
   * así se ignoran datos corruptos, duplicados o noticias que ya no existen.
   */
  private leer(): Noticia[] {
    try {
      const datos: unknown = JSON.parse(localStorage.getItem('favs') || '[]');
      if (!Array.isArray(datos)) return [];
      const ids = new Set(
        datos.filter(x => x && typeof x.id === 'number').map(x => x.id),
      );
      return NOTICIAS.filter(n => ids.has(n.id));
    } catch {
      // JSON inválido o localStorage no disponible: se empieza con la lista vacía.
      return [];
    }
  }

  /** Indica si una noticia ya está en favoritos. */
  contiene(id: number): boolean {
    return this.favoritos().some(n => n.id === id);
  }

  /** Agrega la noticia si no está; la quita si ya estaba. */
  toggle(noticia: Noticia): void {
    this.guardar(
      this.contiene(noticia.id)
        ? this.favoritos().filter(n => n.id !== noticia.id)
        : [...this.favoritos(), noticia],
    );
  }

  /** Quita una noticia de favoritos por su id. */
  quitar(id: number): void {
    this.guardar(this.favoritos().filter(n => n.id !== id));
  }

  /**
   * Guarda la lista en localStorage y, solo si funcionó, actualiza la señal.
   * Así la interfaz nunca muestra un estado que no quedó guardado.
   */
  private guardar(noticias: Noticia[]): void {
    this.error.set('');
    try {
      localStorage.setItem('favs', JSON.stringify(noticias));
      this.favoritos.set(noticias);
    } catch {
      this.error.set('No se pudieron guardar los favoritos. Revisa el almacenamiento del navegador.');
    }
  }
}

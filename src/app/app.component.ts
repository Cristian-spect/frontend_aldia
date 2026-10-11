import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/**
 * Componente raíz de la aplicación.
 *
 * Contiene la estructura común a todas las páginas: barra de navegación,
 * pie de página y el `<router-outlet>`, donde Angular Router inserta la
 * página correspondiente a la URL actual. En la versión HTML (Entrega 2)
 * el header y el footer estaban copiados en cada archivo; aquí se definen una sola vez.
 */
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}

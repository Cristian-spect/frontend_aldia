/**
 * Punto de entrada de la aplicación.
 *
 * Arranca el componente raíz (AppComponent) y registra el Router con:
 * - restauración del scroll al navegar (vuelve arriba en cada página);
 * - desplazamiento a anclas (#como-funciona en el Inicio).
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
  ],
}).catch(console.error);

import { Component, OnDestroy, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/** Validador personalizado: el campo no puede estar vacío ni tener solo espacios. */
const noVacio = (c: AbstractControl) =>
  String(c.value ?? '').trim() ? null : { vacio: true };

/**
 * Página de Contacto.
 *
 * Usa Reactive Forms: el formulario se define en TypeScript (`FormGroup`) y se
 * enlaza a la plantilla con `[formGroup]` y `formControlName`. Reemplaza las
 * validaciones manuales de `contacto.js` de la Entrega 2.
 */
@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent implements OnDestroy {
  /** Modelo del formulario con sus validaciones. */
  readonly form = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [noVacio] }),
    correo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
    }),
    mensaje: new FormControl('', { nonNullable: true, validators: [noVacio] }),
  });

  /** Controla la visibilidad del mensaje de confirmación. */
  readonly confirmacion = signal(false);

  /** Temporizador que oculta la confirmación después de 4 segundos. */
  private timer?: ReturnType<typeof setTimeout>;

  /** Devuelve true si el campo es inválido y el usuario ya interactuó con él. */
  error(campo: 'nombre' | 'correo' | 'mensaje'): boolean {
    const c = this.form.controls[campo];
    return c.invalid && c.touched;
  }

  /** Se ejecuta al enviar el formulario (ngSubmit). */
  enviar(): void {
    this.confirmacion.set(false);
    // Quita espacios al inicio y al final del correo antes de validarlo.
    this.form.controls.correo.setValue(this.form.controls.correo.value.trim());
    // Marca todos los campos como tocados para que se muestren los errores.
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    // Demostración local: el proyecto no tiene un backend de envío.
    this.form.reset();
    this.confirmacion.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.confirmacion.set(false), 4000);
  }

  /** Limpia el temporizador al salir de la página. */
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}

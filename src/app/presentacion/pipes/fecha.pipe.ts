import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe Fecha
 * Ejemplo de salida:
 * 11/01/2026 18:45
 */
@Pipe({
  name: 'fecha',
  standalone: true
})
export class FechaPipe implements PipeTransform {

  /**
   * Método que Angular ejecuta cuando se usa el pipe en el HTML.
   * @param value Fecha a transformar (Date o string)
   * @returns Fecha formateada como string
   */
  transform(value: Date | string): string {

    // Validación simple para evitar errores si la fecha viene vacía
    if (!value) {
      return '';
    }

    // Se asegura que el valor sea un objeto Date
    const fecha = new Date(value);

    // Se retorna la fecha en formato local chileno
    return fecha.toLocaleDateString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

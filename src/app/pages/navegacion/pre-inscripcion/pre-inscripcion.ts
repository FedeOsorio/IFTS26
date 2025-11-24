/**
 * Componente PreInscripcion - Página de información sobre pre-inscripción
 * 
 * Desarrollé esta página para centralizar toda la información que necesitan
 * los aspirantes para pre-inscribirse en las carreras del IFTS N°26.
 * 
 * Información incluida:
 * - Fechas de inscripción
 * - Requisitos y documentación necesaria
 * - Procedimiento de inscripción
 * - Ubicación y horarios de atención
 * - Video o presentación embebida (opcional)
 * 
 * Los datos se cargan desde un archivo JSON externo (pre-inscripcion.json)
 * para facilitar actualizaciones sin modificar código.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

// Importo los datos de pre-inscripción desde archivo JSON
import dataPreInscripcion from '../../../../assets/data/pre-inscripcion.json';

@Component({
  selector: 'app-pre-inscripcion',
  imports: [FontAwesomeModule, PageBannerComponent],
  templateUrl: './pre-inscripcion.html',
  styleUrl: './pre-inscripcion.scss'
})
export class PreInscripcion {
  /**
   * Inyecto DomSanitizer para sanitizar URLs de videos embebidos
   * 
   * Angular bloquea por seguridad las URLs externas en iframes. Necesito
   * DomSanitizer para marcar explícitamente las URLs de videos (YouTube,
   * Vimeo, etc.) como seguras para embebido.
   */
  private sanitizer = inject(DomSanitizer);

  /**
   * Datos de pre-inscripción cargados desde JSON
   * 
   * Cargo los datos desde un archivo JSON externo para que las coordinaciones
   * puedan actualizar fechas, requisitos y procedimientos sin necesidad de
   * modificar el código TypeScript.
   */
  data = dataPreInscripcion;

  /**
   * Iconos de FontAwesome para elementos visuales
   */
  iconoCalendario = faCalendarCheck;  // Icono para fechas de inscripción
  iconoUbicacion = faLocationDot;     // Icono para ubicación del instituto

  /**
   * Sanitiza URL de video para permitir embebido seguro
   * 
   * Utilizo este método para marcar URLs de videos (YouTube, Google Drive, etc.)
   * como seguras para embebido en iframes. Angular requiere esta sanitización
   * explícita por razones de seguridad.
   * 
   * @param url - URL del video o presentación a embeber
   * @returns URL marcada como segura para iframe
   */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

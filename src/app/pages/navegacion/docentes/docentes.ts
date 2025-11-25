/**
 * Componente Docentes - Página de información para docentes
 * 
 * Desarrollé esta página para centralizar recursos y documentos importantes para
 * el cuerpo docente del instituto. Utiliza un sistema de acordeón para organizar
 * el contenido en secciones expandibles:
 * - Planillas de asistencia
 * - Programa y material de cátedra
 * - Planillas de notas
 * - Enlaces útiles (Google Drive, Drive de notas)
 * 
 * Los datos se cargan desde un archivo JSON externo (docentes.json) para facilitar
 * la actualización del contenido sin modificar código. Implementé DomSanitizer para
 * permitir la carga segura de PDFs embebidos y enlaces externos.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faExternalLinkAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

// Importo los datos de docentes desde archivo JSON
import docentesData from '../../../../assets/data/docentes.json';

@Component({
  selector: 'app-docentes',
  imports: [FontAwesomeModule, PageBannerComponent],
  templateUrl: './docentes.html',
  styleUrl: './docentes.scss'
})
export class Docentes {
  // Inyecto DomSanitizer para sanitizar URLs de PDFs y enlaces externos
  private sanitizer = inject(DomSanitizer);

  /**
   * Datos de las secciones para docentes
   * 
   * Cargo los datos desde el JSON y añado la propiedad 'abierto' a cada sección
   * para controlar el estado del acordeón (expandido/contraído). Por defecto,
   * todas las secciones inician cerradas.
   */
  data = {
    ...docentesData,
    secciones: docentesData.secciones.map(s => ({ ...s, abierto: false }))
  };

  // Iconos de FontAwesome para controles visuales
  iconoExpandir = faChevronDown;     // Chevron hacia abajo para expandir
  iconoContraer = faChevronUp;       // Chevron hacia arriba para contraer
  iconoLink = faExternalLinkAlt;     // Icono de enlace externo
  iconoPdf = faFilePdf;              // Icono de archivo PDF

  /**
   * Sanitiza URLs para permitir embebido seguro de contenido externo
   * 
   * Angular bloquea por seguridad las URLs externas por defecto. Utilizo este
   * método para marcar explícitamente las URLs de PDFs como seguras después
   * de verificar que provienen de fuentes confiables (Google Drive institucional).
   * 
   * @param url - URL del recurso a sanitizar
   * @returns URL marcada como segura para embebido
   */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Alterna el estado expandido/contraído de una sección del acordeón
   * 
   * @param item - Objeto de la sección a expandir/contraer
   * 
   * Cuando el usuario hace clic en una sección, este método invierte su estado.
   * Si estaba abierta, se cierra, y viceversa.
   */
  toggleSeccion(item: any): void {
    item.abierto = !item.abierto;
  }
}

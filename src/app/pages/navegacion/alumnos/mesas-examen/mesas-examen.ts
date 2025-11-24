/**
 * Componente MesasExamen - Visualizador de mesas de exámenes finales
 * 
 * Desarrollé esta página para que los alumnos puedan consultar las fechas de
 * mesas de exámenes finales de ambas carreras. Los documentos se muestran
 * embebidos desde Google Docs, permitiendo actualizaciones rápidas por parte
 * de coordinación sin tocar el código del sitio.
 * 
 * Características implementadas:
 * - Información destacada sobre fechas de inscripción (1° y 2° llamado)
 * - Documentos embebidos con las mesas de cada carrera
 * - Botón de descarga para cada documento
 * - DomSanitizer para carga segura de iframes de Google Docs
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define la estructura de un documento de mesa de examen
 * 
 * @property titulo - Nombre descriptivo del documento (ej: "Mesas de Examen GIR")
 * @property url - URL de Google Docs del documento con las fechas
 */
interface DocumentoMesa {
  titulo: string;
  url: string;
}

@Component({
  selector: 'app-mesas-examen',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './mesas-examen.html',
  styleUrl: './mesas-examen.scss'
})
export class MesasExamen {
  // Ciclo lectivo actual mostrado en el banner
  cicloLectivo: string = '2025';
  
  /**
   * Información destacada sobre inscripción a exámenes
   * 
   * Este texto se muestra prominentemente en la parte superior de la página
   * con las fechas clave de inscripción para ambos llamados. Utilizo <br>
   * para saltos de línea ya que se renderiza como innerHTML en el template.
   */
  informacion: string = 'Inscripción a exámenes finales<br>Turno 2025 (1º y 2º llamado) por SIU GUARANI<br>1ºLLAMADO: Del lunes 14/07 a viernes 18/07<br>2ºLLAMADO: Del lunes 04/08 a viernes 08/08';

  /**
   * Lista de documentos con las fechas de mesas de examen
   * 
   * Cada entrada contiene el título y la URL de Google Docs donde se encuentran
   * las fechas específicas de cada mesa, tribunal y aula.
   */
  documentos: DocumentoMesa[] = [
    {
      titulo: 'Mesas de Examen GIR',
      url: 'https://docs.google.com/document/d/1fWeqIuYLt7LqFwminYMu1rRa4vjNB9sT/preview'
    },
    {
      titulo: 'Mesas de Examen HyS',
      url: 'https://docs.google.com/document/d/1Y-sAYydbrYymA5PLK0fqJTiWIurjOqVS/preview'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Sanitiza URLs para permitir embebido seguro de documentos de Google
   * 
   * Utilizo este método para marcar las URLs de Google Docs como seguras,
   * permitiendo su visualización en iframes dentro del sitio.
   * 
   * @param url - URL del documento de Google a sanitizar
   * @returns URL marcada como segura para el iframe
   */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Genera la URL para descargar el documento
   * 
   * Reemplazo '/preview' por '/edit?rtpof=true&sd=true' para que al hacer clic
   * en el botón de descarga, el usuario pueda ver/descargar el documento completo.
   * Los parámetros adicionales optimizan la visualización en Google Docs.
   * 
   * @param url - URL base del documento
   * @returns URL procesada para descarga/visualización completa
   */
  getDownloadUrl(url: string): string {
    return url.replace('/preview', '/edit?rtpof=true&sd=true');
  }
}

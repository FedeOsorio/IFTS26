/**
 * Componente Horarios (Alumnos) - Visualizador de horarios de cursada
 * 
 * Desarrollé esta página para que los alumnos puedan consultar fácilmente los
 * horarios de ambas carreras (GIR y HyS) en un solo lugar. Los horarios se
 * muestran embebidos desde Google Sheets y Google Drive, permitiendo que los
 * coordinadores actualicen el contenido sin necesidad de modificar el sitio.
 * 
 * Características implementadas:
 * - Visualización de horarios embebidos (Sheets y Drive)
 * - Botón de descarga/apertura para cada documento
 * - DomSanitizer para carga segura de iframes
 * - Interfaz TypeScript para tipar correctamente los documentos
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define la estructura de un documento de horarios
 * 
 * @property titulo - Nombre descriptivo del documento (ej: "Horarios GIR")
 * @property url - URL de Google Sheets o Drive del documento
 * @property tipo - Tipo de documento ('sheets' para planillas, 'drive' para PDFs)
 */
interface HorarioDoc {
  titulo: string;
  url: string;
  tipo: 'sheets' | 'drive';
}

@Component({
  selector: 'app-horarios',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss'
})
export class Horarios {
  // Ciclo lectivo actual mostrado en el banner
  cicloLectivo: string = '2025';
  
  /**
   * Lista de documentos de horarios disponibles
   * 
   * Cada entrada contiene la URL del documento embebido y su tipo para determinar
   * cómo procesar el enlace de descarga/visualización.
   */
  horarios: HorarioDoc[] = [
    {
      titulo: 'Horarios GIR',
      url: 'https://docs.google.com/spreadsheets/d/1GBDAGwHdMc9h0WNdRAZjaCNBFe8xQsPy2jF-3360ZSg/preview',
      tipo: 'sheets'
    },
    {
      titulo: 'Horarios HyS',
      url: 'https://drive.google.com/file/d/1W_ufVoVrH4hI2AK3rGBe09H-2KBnO9V_/preview',
      tipo: 'drive'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Sanitiza URLs para permitir embebido seguro de contenido de Google
   * 
   * Angular bloquea por defecto las URLs externas en iframes. Este método marca
   * explícitamente las URLs de Google Sheets/Drive como seguras para embebido.
   * 
   * @param url - URL del documento de Google a sanitizar
   * @returns URL marcada como segura para el iframe
   */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Genera la URL correcta para descargar o abrir el documento
   * 
   * Según el tipo de documento, modifico la URL para que al hacer clic en el
   * botón de descarga, el usuario sea redirigido a la versión editable/descargable:
   * - Sheets: reemplaza /preview por /edit para abrir la planilla
   * - Drive: reemplaza /preview por /view para ver/descargar el PDF
   * 
   * @param horario - Objeto con los datos del documento
   * @returns URL procesada para descarga/visualización completa
   */
  getDownloadUrl(horario: HorarioDoc): string {
    if (horario.tipo === 'sheets') {
      return horario.url.replace('/preview', '/edit?usp=sharing');
    }
    return horario.url.replace('/preview', '/view');
  }
}

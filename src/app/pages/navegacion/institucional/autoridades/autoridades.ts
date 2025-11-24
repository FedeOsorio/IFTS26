/**
 * Componente Autoridades - Listado de autoridades institucionales
 * 
 * Desarrollé esta página para mostrar el organigrama de autoridades del
 * IFTS N°26. Los datos se cargan dinámicamente desde un archivo JSON externo
 * para facilitar actualizaciones sin modificar código.
 * 
 * Incluye:
 * - Rector/a
 * - Vicerrector/a
 * - Secretaría Académica
 * - Secretaría Administrativa
 * - Coordinaciones de carrera
 * - Otras autoridades institucionales
 * 
 * El archivo JSON (autoridades.json) permite actualizaciones rápidas
 * cuando hay cambios en la conducción institucional.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import autoridadesData from '../../../../../assets/data/autoridades.json';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define una autoridad institucional
 * 
 * @property cargo - Nombre del cargo (ej: "Rector", "Coordinador GIR")
 * @property nombres - Array de nombres de personas que ocupan el cargo
 *                      (puede ser array porque algunos cargos tienen suplentes)
 */
export interface Autoridad {
  cargo: string;
  nombres: string[];
}

@Component({
  selector: 'app-autoridades',
  imports: [FontAwesomeModule, CommonModule, PageBannerComponent],
  templateUrl: './autoridades.html',
  styleUrl: './autoridades.scss'
})
export class Autoridades {
  /** Icono de FontAwesome para representar autoridades */
  iconoAutoridad = faUserTie;

  /**
   * Datos de autoridades cargados desde JSON
   * 
   * Cargo la información desde autoridades.json para que el personal
   * administrativo pueda actualizar autoridades editando solo el JSON,
   * sin necesidad de tocar el código TypeScript.
   */
  autoridades: Autoridad[] = (autoridadesData as any).autoridades;
}

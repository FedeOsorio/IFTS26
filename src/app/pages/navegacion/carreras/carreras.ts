/**
 * Componente Carreras - Página principal de carreras del instituto
 * 
 * Desarrollé este componente como punto de entrada a la sección de carreras
 * del IFTS N°26. Actualmente actúa como contenedor base, pero puede expandirse
 * para incluir:
 * - Presentación general de las carreras ofrecidas
 * - Enlaces destacados a cada carrera (GIR y HyS)
 * - Información sobre modalidad de cursada
 * - Video institucional de carreras
 * 
 * Las subsecciones específicas de cada carrera se encuentran en:
 * - /carreras/gir (Gestión Integral del Riesgo)
 * - /carreras/hys (Higiene y Seguridad en el Trabajo)
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-carreras',
  imports: [],
  templateUrl: './carreras.html',
  styleUrl: './carreras.scss'
})
export class Carreras {
  // Este componente puede expandirse para incluir información general
  // sobre las carreras ofrecidas, requisitos de ingreso comunes,
  // comparativa entre carreras, etc.
}

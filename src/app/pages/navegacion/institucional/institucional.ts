/**
 * Componente Institucional - Página principal de la sección institucional
 * 
 * Desarrollé este componente como punto de entrada a la sección institucional
 * del sitio. Actualmente actúa como contenedor base, pero puede expandirse
 * para incluir:
 * - Presentación general del instituto
 * - Historia y trayectoria
 * - Misión, visión y valores
 * - Enlaces a subsecciones (calendario, autoridades, reglamento, evacuación)
 * 
 * Las subsecciones específicas se encuentran en:
 * - /institucional/calendario-academico
 * - /institucional/autoridades
 * - /institucional/reglamento-organico
 * - /institucional/evacuacion
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-institucional',
  imports: [],
  templateUrl: './institucional.html',
  styleUrl: './institucional.scss'
})
export class Institucional {
  // Este componente puede expandirse en el futuro para incluir
  // contenido dinámico, como resumen institucional, estadísticas,
  // logros destacados, etc.
}

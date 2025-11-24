/**
 * Componente Curso - Información sobre curso de ingreso
 * 
 * Desarrollé este componente como base para la sección de curso de ingreso.
 * Actualmente es un componente vacío que puede expandirse para incluir:
 * - Información sobre el curso de ingreso (si existe)
 * - Contenidos del curso
 * - Fechas y horarios
 * - Requisitos y modalidad
 * - Material de estudio
 * 
 * Nota: Actualmente el IFTS N°26 no requiere curso de ingreso (ingreso directo),
 * pero este componente está preparado por si en el futuro se implementa uno.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './curso.html',
  styleUrl: './curso.scss'
})
export class Curso {
  // Este componente puede expandirse para incluir:
  // - descripcionCurso: string
  // - temasCurso: string[]
  // - fechasInicio: Date
  // - modalidad: string
  // - etc.
}

/**
 * Componente Alumnos - Página principal de la sección para estudiantes
 * 
 * Desarrollé este componente como punto de entrada a la sección de alumnos
 * del sitio. Actualmente actúa como contenedor base para las subsecciones,
 * pero puede expandirse para incluir:
 * - Resumen de servicios disponibles para alumnos
 * - Accesos rápidos a trámites más frecuentes
 * - Avisos importantes para estudiantes
 * - Enlaces destacados a recursos académicos
 * 
 * Las subsecciones específicas se encuentran en:
 * - /alumnos/horarios (Horarios de cursada)
 * - /alumnos/mesas-examen (Fechas de exámenes)
 * - /alumnos/constancias (Trámites de constancias)
 * - /alumnos/becas (Información de becas)
 * - /alumnos/cooperadora (Cooperadora escolar)
 * - /alumnos/equivalencias (Reconocimiento de materias)
 * - Y otros servicios estudiantiles
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  imports: [],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.scss'
})
export class Alumnos {
  // Este componente puede expandirse en el futuro para incluir
  // contenido dinámico como: avisos importantes, estadísticas de cursada,
  // enlaces rápidos personalizados, etc.
}

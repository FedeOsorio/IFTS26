/**
 * Componente HysHorarios - Horarios de la carrera Higiene y Seguridad en el Trabajo
 * 
 * Desarrollé esta página para mostrar de forma organizada los horarios de cursada
 * de la carrera HyS, distribuidos por año académico. La información está estructurada
 * con interfaces TypeScript para garantizar consistencia de datos.
 * 
 * Características implementadas:
 * - Organización de materias por año (1°, 2°)
 * - Detalle completo: nombre de materia, día, horario y aula
 * - Banner con ciclo lectivo y fecha de actualización
 * - Nota importante sobre posibles cambios en los horarios
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../../components/page-banner/page-banner';

/**
 * Interfaz que define la estructura de una materia
 * 
 * @property nombre - Nombre completo de la materia
 * @property dia - Día de la semana de cursada (Lunes, Martes, etc.)
 * @property horario - Rango horario en formato "HH:MM - HH:MM"
 * @property aula - Aula asignada (opcional, puede estar sin definir)
 */
interface Materia {
  nombre: string;
  dia: string;
  horario: string;
  aula?: string;
}

/**
 * Interfaz que agrupa materias por año académico
 * 
 * @property anio - Número de año (1 para primer año, 2 para segundo, etc.)
 * @property materias - Array de materias correspondientes a ese año
 */
interface HorarioAnio {
  anio: number;
  materias: Materia[];
}

@Component({
  selector: 'app-hys-horarios',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss',
  standalone: true
})
export class HysHorarios {
  // Información general del ciclo lectivo
  cicloLectivo: string = '2025';
  actualizacion: string = 'Última actualización: Marzo 2025';

  /**
   * Horarios completos de la carrera HyS organizados por año
   * 
   * Estructuré los horarios en un array de objetos para facilitar su renderizado
   * en el template. Cada año tiene su lista de materias con todos los detalles
   * necesarios para que los alumnos planifiquen su cursada.
   */
  horarios: HorarioAnio[] = [
    {
      anio: 1,
      materias: [
        { nombre: 'Introducción a la Higiene y Seguridad', dia: 'Lunes', horario: '18:00 - 20:00', aula: '301' },
        { nombre: 'Física Aplicada', dia: 'Lunes', horario: '20:00 - 22:00', aula: '301' },
        { nombre: 'Química General y Aplicada', dia: 'Martes', horario: '18:00 - 20:00', aula: 'Lab 2' },
        { nombre: 'Matemática', dia: 'Martes', horario: '20:00 - 22:00', aula: '301' },
        { nombre: 'Legislación y Normativa', dia: 'Miércoles', horario: '18:00 - 20:00', aula: '302' },
        { nombre: 'Comunicación Profesional', dia: 'Miércoles', horario: '20:00 - 22:00', aula: '302' },
        { nombre: 'Informática Aplicada I', dia: 'Jueves', horario: '18:00 - 20:00', aula: 'Lab 1' },
        { nombre: 'Práctica Profesionalizante I', dia: 'Viernes', horario: '18:00 - 20:00', aula: '301' }
      ]
    },
    {
      anio: 2,
      materias: [
        { nombre: 'Seguridad Industrial', dia: 'Lunes', horario: '18:00 - 20:00', aula: '303' },
        { nombre: 'Higiene Industrial', dia: 'Lunes', horario: '20:00 - 22:00', aula: '303' },
        { nombre: 'Prevención y Control de Incendios', dia: 'Martes', horario: '18:00 - 20:00', aula: '304' },
        { nombre: 'Riesgos Eléctricos', dia: 'Martes', horario: '20:00 - 22:00', aula: '304' },
        { nombre: 'Ergonomía', dia: 'Miércoles', horario: '18:00 - 20:00', aula: '303' },
        { nombre: 'Toxicología Laboral', dia: 'Miércoles', horario: '20:00 - 22:00', aula: 'Lab 2' },
        { nombre: 'Informática Aplicada II', dia: 'Jueves', horario: '18:00 - 20:00', aula: 'Lab 1' },
        { nombre: 'Práctica Profesionalizante II', dia: 'Viernes', horario: '18:00 - 20:00', aula: '303' }
      ]
    }
  ];

  /**
   * Advertencia importante sobre cambios
   * 
   * Incluyo esta nota para que los alumnos sepan que deben verificar siempre
   * en las fuentes oficiales (SIU Guaraní, carteleras) ante posibles modificaciones
   * durante el ciclo lectivo.
   */
  notaImportante: string = 'Los horarios pueden sufrir modificaciones durante el ciclo lectivo. Verificá siempre en SIU Guaraní o en las carteleras del instituto las novedades sobre cambios de horarios o aulas.';
}

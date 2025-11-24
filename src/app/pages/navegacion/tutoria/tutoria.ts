/**
 * Componente Tutoria - Página de información sobre el sistema de tutorías
 * 
 * Desarrollé esta página para que los alumnos conozcan el sistema de tutorías
 * del instituto y puedan contactar al tutor institucional. El servicio de tutorías
 * brinda orientación académica y acompañamiento personalizado a los estudiantes
 * durante su trayectoria en el IFTS.
 * 
 * Información incluida:
 * - Datos del tutor institucional (nombre, cargo, descripción)
 * - Horarios de atención organizados por día
 * - Múltiples canales de contacto (email, teléfono, ubicación)
 * - Listado de servicios que ofrece la tutoría
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

/**
 * Interfaz que define un horario de atención
 * 
 * @property dia - Día de la semana (Lunes, Martes, etc.)
 * @property horario - Rango horario de atención (ej: "18:00 a 20:00 hs")
 */
interface HorarioAtencion {
  dia: string;
  horario: string;
}

/**
 * Interfaz que define un canal de contacto
 * 
 * @property icono - Clase CSS del icono Bootstrap Icons
 * @property tipo - Tipo de contacto (Email, Teléfono, Ubicación)
 * @property valor - Valor concreto del contacto (email, número, dirección)
 */
interface ContactoTutoria {
  icono: string;
  tipo: string;
  valor: string;
}

@Component({
  selector: 'app-tutoria',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './tutoria.html',
  styleUrl: './tutoria.scss'
})
export class Tutoria {
  /**
   * Información del tutor institucional
   * 
   * Estos datos se muestran en la sección superior de la página
   * para que los alumnos identifiquen al profesional responsable.
   */
  tutorNombre: string = 'Prof. Gustavo Loscri';
  tutorCargo: string = 'Tutor Institucional';
  tutorDescripcion: string = 'El Prof. Gustavo Loscri se desempeña como Tutor Institucional del IFTS N°26, brindando orientación y acompañamiento personalizado a los estudiantes durante su trayectoria académica.';

  /**
   * Horarios de atención del tutor
   * 
   * Estructuré los horarios en un array de objetos para facilitar su renderizado
   * en el template y permitir futuras modificaciones sin tocar el código HTML.
   */
  horariosAtencion: HorarioAtencion[] = [
    { dia: 'Lunes', horario: '18:00 a 20:00 hs' },
    { dia: 'Miércoles', horario: '18:00 a 20:00 hs' },
    { dia: 'Viernes', horario: '17:00 a 19:00 hs' }
  ];

  /**
   * Canales de contacto con el servicio de tutorías
   * 
   * Incluyo múltiples formas de contacto para que los alumnos elijan
   * la que les resulte más conveniente. Cada contacto tiene un icono
   * representativo para mejor visualización.
   */
  contactosTutoria: ContactoTutoria[] = [
    { icono: 'bi-envelope-fill', tipo: 'Email', valor: 'tutoria@ifts26.edu.ar' },
    { icono: 'bi-telephone-fill', tipo: 'Teléfono', valor: '4931-9843' },
    { icono: 'bi-geo-alt-fill', tipo: 'Ubicación', valor: 'Estados Unidos 3141' }
  ];

  /**
   * Servicios que ofrece el sistema de tutorías
   * 
   * Listé las principales áreas en las que el tutor puede asistir a los
   * estudiantes, cubriendo tanto aspectos académicos como administrativos
   * e institucionales.
   */
  servicios: string[] = [
    'Orientación académica y planificación de estudios',
    'Asesoramiento en trámites administrativos',
    'Apoyo en situaciones de dificultad académica',
    'Información sobre becas y programas de ayuda',
    'Acompañamiento en procesos de inscripción',
    'Resolución de consultas institucionales'
  ];
}

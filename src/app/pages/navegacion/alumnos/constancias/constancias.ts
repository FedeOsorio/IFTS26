/**
 * Componente Constancias - Información sobre trámites de constancias académicas
 * 
 * Desarrollé esta página para que los alumnos conozcan los diferentes tipos de
 * constancias que pueden solicitar y los requisitos para cada una. Las constancias
 * son documentos oficiales emitidos por el instituto que acreditan aspectos de
 * la situación académica del estudiante.
 * 
 * Incluye información sobre:
 * - Tipos de constancias disponibles
 * - Requisitos específicos de cada una
 * - Lugar y horario de atención
 * - Tiempo estimado de entrega
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define la estructura de un tipo de constancia
 * 
 * @property titulo - Nombre oficial de la constancia
 * @property icono - Clase CSS del icono Bootstrap Icons
 * @property descripcion - Breve explicación de qué acredita la constancia
 * @property requisitos - Array de requisitos para solicitar la constancia
 * @property imagen - URL de imagen de ejemplo de la constancia
 * @property pdf - URL del archivo PDF de modelo/formulario
 */
interface TipoConstancia {
  titulo: string;
  icono: string;
  descripcion: string;
  requisitos: string[];
  imagen: string;
  pdf: string;
}

@Component({
  selector: 'app-constancias',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './constancias.html',
  styleUrl: './constancias.scss'
})
export class Constancias {
  /**
   * Información general sobre constancias
   * 
   * Texto introductorio que explica brevemente qué son las constancias
   * y para qué sirven.
   */
  infoGeneral: string = 'Las constancias son documentos oficiales emitidos por el instituto que acreditan diferentes aspectos de tu situación académica.';
  
  /**
   * Array de tipos de constancias disponibles
   * 
   * Listé los principales tipos de constancias que los estudiantes pueden
   * solicitar, con información detallada de cada una para que sepan exactamente
   * qué necesitan llevar al momento de hacer el trámite.
   */
  tiposConstancias: TipoConstancia[] = [
    {
      titulo: 'Constancia de Alumno Regular',
      icono: 'bi-person-check',
      descripcion: 'Acredita tu condición de alumno regular del IFTS N°26.',
      requisitos: [
        'Estar matriculado en el ciclo lectivo vigente',
        'Presentar DNI original',
        'Completar formulario de solicitud'
      ],
      imagen: '/assets/img/constancia-alumno.png',
      pdf: '/assets/pdf/constancia-alumno.pdf'
    },
    {
      titulo: 'Constancia de Examen',
      icono: 'bi-file-earmark-check',
      descripcion: 'Certifica tu presentación y aprobación de exámenes.',
      requisitos: [
        'Haber rendido el examen correspondiente',
        'Presentar DNI original',
        'Indicar materia y fecha del examen'
      ],
      imagen: '/assets/img/constancia-examen.png',
      pdf: '/assets/pdf/constancia-examen.pdf'
    }
  ];

  /**
   * Información práctica sobre el trámite de constancias
   * 
   * Incluyo los datos que los alumnos necesitan saber para realizar
   * el trámite: horarios, lugar y tiempos de entrega estimados.
   */
  horarioAtencion: string = 'Lunes a Viernes de 18:00 a 21:00 hs';
  lugarTramite: string = 'Bedelía - Planta Baja';
  tiempoEntrega: string = '48 a 72 horas hábiles';
}

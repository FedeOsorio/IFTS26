/**
 * Componente Equivalencias - Trámite de reconocimiento de materias cursadas
 * 
 * Desarrollé esta página para guiar a los estudiantes en el proceso de solicitud
 * de equivalencias por materias cursadas en otras instituciones. Este trámite
 * permite acreditar conocimientos previos y avanzar más rápido en la carrera.
 * 
 * Tipos de equivalencias:
 * - Por carrera completa (título previo relacionado)
 * - Por materias cursadas (contenidos equivalentes)
 * - Por experiencia laboral (en casos específicos)
 * 
 * Incluye información sobre:
 * - Pasos del trámite completo
 * - Documentación requerida
 * - Tipos de equivalencias disponibles
 * - Contacto para consultas
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define un paso del trámite de equivalencias
 * 
 * @property numero - Número de orden del paso (1, 2, 3...)
 * @property titulo - Nombre descriptivo del paso
 * @property descripcion - Explicación detallada de qué hacer en este paso
 */
interface PasoEquivalencia {
  numero: number;
  titulo: string;
  descripcion: string;
}

/**
 * Interfaz que define un tipo de equivalencia disponible
 * 
 * @property titulo - Nombre del tipo de equivalencia
 * @property descripcion - Explicación de cuándo aplica este tipo
 * @property icono - Clase CSS del icono Bootstrap Icons
 */
interface TipoEquivalencia {
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-equivalencias',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './equivalencias.html',
  styleUrl: './equivalencias.scss',
  standalone: true
})
export class Equivalencias {
  /**
   * Descripción general del trámite de equivalencias
   * 
   * Explico brevemente qué son las equivalencias y cuál es su propósito
   * para que los estudiantes entiendan si les corresponde este trámite.
   */
  descripcion: string = 'Si cursaste materias en otra institución educativa, podés solicitar el reconocimiento de equivalencias para acreditar esos conocimientos y avanzar en tu carrera en el IFTS Nº26.';

  /**
   * Tipos de equivalencias disponibles
   * 
   * Detallo los tres tipos principales de equivalencias que los estudiantes
   * pueden solicitar, con explicaciones sobre cuándo aplica cada uno.
   */
  tiposEquivalencias: TipoEquivalencia[] = [
    {
      titulo: 'Equivalencias por Carrera Completa',
      descripcion: 'Si tenés un título de nivel superior relacionado, podés solicitar equivalencias por las materias afines a tu nueva carrera.',
      icono: 'bi-mortarboard-fill'
    },
    {
      titulo: 'Equivalencias por Materias Cursadas',
      descripcion: 'Si cursaste materias específicas en otra institución, podés solicitar su reconocimiento si los contenidos son equivalentes.',
      icono: 'bi-book-half'
    },
    {
      titulo: 'Equivalencias por Experiencia Laboral',
      descripcion: 'En algunos casos, la experiencia laboral comprobable puede ser considerada para otorgar equivalencias en materias prácticas.',
      icono: 'bi-briefcase'
    }
  ];

  /**
   * Pasos del trámite de equivalencias
   * 
   * Estructuré una guía paso a paso para que los estudiantes sepan exactamente
   * qué hacer en cada etapa del trámite, desde la solicitud inicial hasta la
   * confirmación final en SIU Guaraní.
   */
  pasos: PasoEquivalencia[] = [
    {
      numero: 1,
      titulo: 'Solicitar el Trámite',
      descripcion: 'Presentá una nota en Bedelía solicitando el reconocimiento de equivalencias. Indicá las materias que cursaste y la institución de origen.'
    },
    {
      numero: 2,
      titulo: 'Reunir Documentación',
      descripcion: 'Adjuntá certificado analítico original, programas de las materias cursadas y título (si corresponde). Toda documentación debe estar legalizada.'
    },
    {
      numero: 3,
      titulo: 'Evaluación Académica',
      descripcion: 'El departamento académico evaluará los contenidos de las materias cursadas y determinará si son equivalentes a las del plan de estudios vigente.'
    },
    {
      numero: 4,
      titulo: 'Resolución',
      descripcion: 'Recibirás una notificación con las equivalencias otorgadas. Las materias reconocidas figurarán como aprobadas en tu historia académica.'
    },
    {
      numero: 5,
      titulo: 'Confirmación en SIU',
      descripcion: 'Verificá en SIU Guaraní que las equivalencias hayan sido cargadas correctamente. Consultá en Bedelía ante cualquier duda.'
    }
  ];

  /**
   * Lista de documentos requeridos para el trámite
   * 
   * Enumero todos los documentos que los estudiantes deben presentar
   * para iniciar el trámite de equivalencias, incluyendo formatos y
   * características específicas de cada uno.
   */
  documentosRequeridos: string[] = [
    'Nota formal solicitando equivalencias',
    'Certificado analítico original y legalizado',
    'Programas de las materias cursadas (firmados y sellados)',
    'Título de nivel superior (si corresponde)',
    'DNI original y copia',
    'Constancia de alumno regular del IFTS Nº26'
  ];

  // Consideraciones importantes
  consideraciones: string[] = [
    'El trámite puede demorar entre 30 y 60 días hábiles',
    'No todas las materias solicitadas pueden ser equivalentes',
    'Los contenidos deben coincidir en al menos un 70%',
    'Las equivalencias no otorgan promedio, solo acreditación',
    'Consultá con la coordinación de carrera antes de iniciar el trámite'
  ];

  // Contacto
  emailBedelia: string = 'bedelia&#64;ifts26.edu.ar';
}

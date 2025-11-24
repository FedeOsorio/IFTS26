/**
 * Componente MatriculaProfesional - Guía de matriculación en colegios profesionales
 * 
 * Desarrollé esta página para orientar a los egresados sobre la matriculación
 * profesional, requisito fundamental para ejercer legalmente las profesiones
 * de Técnico Superior en Higiene y Seguridad o en Gestión Integral del Riesgo.
 * 
 * Información incluida:
 * - Organismos de matriculación según carrera
 * - Pasos del trámite de matriculación
 * - Beneficios de estar matriculado
 * - Requisitos y documentación necesaria
 * - Recomendaciones sobre elección de colegio profesional
 * 
 * Esto es fundamental para que los egresados puedan firmar proyectos,
 * realizar pericias y ejercer plenamente su profesión.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define un paso del trámite de matriculación
 * 
 * @property numero - Número de orden del paso
 * @property titulo - Nombre descriptivo del paso
 * @property descripcion - Explicación detallada del paso
 */
interface PasoMatricula {
  numero: number;
  titulo: string;
  descripcion: string;
}

/**
 * Interfaz que define un organismo de matriculación
 * 
 * @property nombre - Nombre oficial del colegio/consejo profesional
 * @property carrera - Carrera a la que corresponde
 * @property icono - Clase CSS del icono Bootstrap Icons
 * @property enlace - URL del sitio web oficial del organismo
 */
interface Organismo {
  nombre: string;
  carrera: string;
  icono: string;
  enlace: string;
}

@Component({
  selector: 'app-matricula-profesional',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './matricula-profesional.html',
  styleUrl: './matricula-profesional.scss'
})
export class MatriculaProfesional {
  /**
   * Información general sobre la matriculación profesional
   * 
   * Explico la importancia de la matriculación y doy recomendaciones
   * sobre cómo elegir el mejor colegio profesional según el lugar de
   * desempeño y los beneficios que ofrece cada uno.
   */
  descripcion: string = `Una vez iniciado el tramite del título de Técnico Superior en Higiene y Seguridad y con el certificado de titulo en tramite el egresado ya se puede matricular en colegios profesionales.<br><br>` 
  + `Sugerimos informarse con docentes y compañeros ya recibidos acerca de cuáles son las mejores opciones, ya que la oferta es variada y se deben considerar los costos y beneficios que proporciona cada colegio profesional.<br><br>` 
  + `Esta evaluación personal debe considerar el lugar de desempeño profesional, ya que cada colegio tiene una jurisdicción asignada.`;

  /**
   * Organismos de matriculación según carrera
   * 
   * Listo los principales colegios profesionales donde los egresados
   * deben matricularse según su carrera para ejercer legalmente.
   */
  organismos: Organismo[] = [
    {
      nombre: 'Consejo Profesional de Higiene, Seguridad y Medio Ambiente',
      carrera: 'Tecnicatura en Higiene y Seguridad en el Trabajo',
      icono: 'bi-shield-check',
      enlace: 'https://www.cphisma.org.ar'
    },
    {
      nombre: 'Registro Nacional de Profesionales en Gestión de Riesgo',
      carrera: 'Tecnicatura en Gestión Integral del Riesgo',
      icono: 'bi-clipboard-data',
      enlace: 'https://www.argentina.gob.ar'
    }
  ];

  /**
   * Pasos generales del trámite de matriculación
   * 
   * Estructuré una guía secuencial para que los egresados sepan cómo
   * gestionar su matriculación profesional desde la obtención del título
   * hasta recibir su número de matrícula.
   */
  pasos: PasoMatricula[] = [
    {
      numero: 1,
      titulo: 'Obtener el Título',
      descripcion: 'Completá tu carrera y tramitá tu título oficial de Técnico Superior en Bedelía del IFTS N°26.'
    },
    {
      numero: 2,
      titulo: 'Contactar al Organismo',
      descripcion: 'Comunicate con el consejo profesional o registro correspondiente a tu carrera para conocer los requisitos específicos.'
    },
    {
      numero: 3,
      titulo: 'Reunir Documentación',
      descripcion: 'Prepará la documentación requerida: título, DNI, certificado analítico, certificado de antecedentes, etc.'
    },
    {
      numero: 4,
      titulo: 'Presentar Solicitud',
      descripcion: 'Presentá tu solicitud de matriculación con la documentación completa ante el organismo correspondiente.'
    },
    {
      numero: 5,
      titulo: 'Obtener Matrícula',
      descripcion: 'Una vez aprobada tu solicitud, recibís tu número de matrícula profesional para ejercer legalmente.'
    }
  ];

  /**
   * Beneficios de estar matriculado profesionalmente
   * 
   * Enumero las ventajas que obtienen los profesionales al matricularse,
   * más allá del requisito legal, para motivar este paso fundamental.
   */
  beneficios: string[] = [
    'Ejercicio legal de la profesión',
    'Respaldo y reconocimiento profesional',
    'Acceso a actualizaciones y capacitaciones',
    'Cobertura de seguro de responsabilidad civil',
    'Participación en eventos y congresos profesionales'
  ];
}

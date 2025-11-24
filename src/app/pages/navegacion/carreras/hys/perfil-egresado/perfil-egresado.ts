/**
 * Componente HysPerfilEgresado - Perfil profesional del egresado de HyS
 * 
 * Desarrollé esta página para presentar de forma completa y atractiva el perfil
 * del egresado de la Tecnicatura Superior en Higiene y Seguridad en el Trabajo.
 * Incluye información sobre:
 * - Descripción general del perfil profesional
 * - Áreas de conocimiento que domina el egresado
 * - Competencias profesionales específicas
 * - Salidas laborales concretas
 * - Información sobre matriculación profesional
 * 
 * Utilicé interfaces TypeScript para estructurar cada sección y facilitar
 * futuras actualizaciones del contenido.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../../components/page-banner/page-banner';

/**
 * Interfaz que define un área de conocimiento
 * 
 * @property titulo - Nombre del área (ej: "Seguridad Industrial")
 * @property descripcion - Breve explicación del contenido del área
 * @property icono - Clase CSS del icono Bootstrap Icons (ej: "bi-shield-check")
 */
interface AreaConocimiento {
  titulo: string;
  descripcion: string;
  icono: string;
}

/**
 * Interfaz que define una competencia profesional
 * 
 * @property titulo - Enunciado de la competencia
 * @property descripcion - Detalle de qué implica esa competencia en la práctica
 */
interface Competencia {
  titulo: string;
  descripcion: string;
}

/**
 * Interfaz que define una salida laboral
 * 
 * @property titulo - Nombre del ámbito laboral
 * @property descripcion - Detalle de las tareas en ese ámbito
 * @property icono - Clase CSS del icono Bootstrap Icons
 */
interface Salida {
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-hys-perfil-egresado',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './perfil-egresado.html',
  styleUrl: './perfil-egresado.scss',
  standalone: true
})
export class HysPerfilEgresado {
  /**
   * Descripción general del perfil profesional
   * 
   * Resumen introductorio que define el alcance y capacidades del técnico
   * egresado de la carrera de Higiene y Seguridad en el Trabajo.
   */
  descripcionPerfil: string = 'El egresado de la Tecnicatura Superior en Higiene y Seguridad en el Trabajo es un profesional capacitado para prevenir accidentes laborales, proteger la salud de los trabajadores y gestionar sistemas de seguridad en diversos ámbitos laborales.';

  /**
   * Áreas de conocimiento que domina el egresado
   * 
   * Agrupé las áreas principales en las que el técnico adquiere experticia
   * durante la carrera. Cada área incluye un icono representativo para
   * mejorar la visualización.
   */
  areasConocimiento: AreaConocimiento[] = [
    {
      titulo: 'Seguridad Industrial',
      descripcion: 'Prevención de accidentes, análisis de riesgos y gestión de la seguridad en entornos industriales.',
      icono: 'bi-shield-check'
    },
    {
      titulo: 'Higiene Laboral',
      descripcion: 'Control de contaminantes, medición de agentes físicos y químicos, protección de la salud.',
      icono: 'bi-heart-pulse'
    },
    {
      titulo: 'Legislación y Normativa',
      descripcion: 'Marco legal argentino, normas internacionales, auditorías y cumplimiento normativo.',
      icono: 'bi-file-earmark-text'
    },
    {
      titulo: 'Ergonomía y Psicosociología',
      descripcion: 'Diseño de puestos de trabajo, prevención de trastornos musculoesqueléticos, riesgos psicosociales.',
      icono: 'bi-person-workspace'
    }
  ];

  /**
   * Competencias profesionales específicas
   * 
   * Listé las capacidades concretas que el egresado puede desempeñar en el
   * campo laboral. Cada competencia describe una acción profesional específica
   * relacionada con la prevención de riesgos y la seguridad laboral.
   */
  competencias: Competencia[] = [
    {
      titulo: 'Identificar y evaluar riesgos laborales',
      descripcion: 'Realizar inspecciones, análisis de tareas y evaluaciones de riesgos en diferentes sectores productivos.'
    },
    {
      titulo: 'Diseñar e implementar planes de prevención',
      descripcion: 'Desarrollar programas de seguridad, capacitaciones y procedimientos de trabajo seguro.'
    },
    {
      titulo: 'Investigar accidentes y enfermedades profesionales',
      descripcion: 'Analizar causas, elaborar informes técnicos y proponer medidas correctivas y preventivas.'
    },
    {
      titulo: 'Realizar mediciones y monitoreo ambiental',
      descripcion: 'Utilizar instrumentos de medición de agentes físicos, químicos y biológicos.'
    },
    {
      titulo: 'Asesorar en normativa y legislación vigente',
      descripcion: 'Brindar asesoramiento técnico-legal sobre cumplimiento de leyes y decretos de seguridad.'
    },
    {
      titulo: 'Gestionar sistemas de prevención de incendios',
      descripcion: 'Diseñar planes de evacuación, seleccionar sistemas de protección contra incendios.'
    }
  ];

  /**
   * Salidas laborales concretas
   * 
   * Identifiqué los principales ámbitos donde el egresado puede insertarse
   * laboralmente, tanto en relación de dependencia como de forma independiente.
   * Cada salida incluye un icono representativo.
   */
  salidasLaborales: Salida[] = [
    {
      titulo: 'Industria y Manufactura',
      descripcion: 'Gestión de seguridad en plantas industriales, fábricas y establecimientos productivos.',
      icono: 'bi-gear'
    },
    {
      titulo: 'Construcción',
      descripcion: 'Supervisión de seguridad en obras, control de riesgos y cumplimiento normativo.',
      icono: 'bi-cone-striped'
    },
    {
      titulo: 'Empresas de Servicios',
      descripcion: 'Consultoría, auditorías y asesoramiento en prevención de riesgos laborales.',
      icono: 'bi-briefcase'
    },
    {
      titulo: 'Sector Público',
      descripcion: 'Organismos de fiscalización, ministerios y administración pública.',
      icono: 'bi-building'
    },
    {
      titulo: 'Emprendimiento Independiente',
      descripcion: 'Consultoría privada, capacitaciones y asesoramiento técnico independiente.',
      icono: 'bi-person-check'
    }
  ];

  /**
   * Información sobre matriculación profesional
   * 
   * Aclaro que los egresados deben obtener matrícula profesional en el CPHISMA
   * (Consejo Profesional de Higiene, Seguridad y Medio Ambiente), lo cual
   * les permite ejercer la profesión de forma legal y con respaldo institucional.
   */
  infoMatriculacion: string = 'Los egresados de la carrera deben tramitar su matrícula profesional en el Consejo Profesional de Higiene, Seguridad y Medio Ambiente (CPHISMA), lo que les habilitará para ejercer la profesión.';
}

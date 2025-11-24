import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../../components/page-banner/page-banner';

interface AreaConocimiento {
  titulo: string;
  descripcion: string;
  icono: string;
}

interface Competencia {
  titulo: string;
  descripcion: string;
}

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
  // Descripción general
  descripcionPerfil: string = 'El egresado de la Tecnicatura Superior en Higiene y Seguridad en el Trabajo es un profesional capacitado para prevenir accidentes laborales, proteger la salud de los trabajadores y gestionar sistemas de seguridad en diversos ámbitos laborales.';

  // Áreas de conocimiento
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

  // Competencias profesionales
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

  // Salidas laborales
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

  // Matriculación
  infoMatriculacion: string = 'Los egresados de la carrera deben tramitar su matrícula profesional en el Consejo Profesional de Higiene, Seguridad y Medio Ambiente (CPHISMA), lo que les habilitará para ejercer la profesión.';
}

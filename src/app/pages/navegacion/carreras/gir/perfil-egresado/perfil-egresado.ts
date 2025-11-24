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
  selector: 'app-gir-perfil-egresado',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './perfil-egresado.html',
  styleUrl: './perfil-egresado.scss',
  standalone: true
})
export class GirPerfilEgresado {
  // Descripción general
  descripcionPerfil: string = 'El egresado de la Tecnicatura Superior en Gestión Inmobiliaria y Registro es un profesional capacitado para intervenir en todos los aspectos de la actividad inmobiliaria, con conocimientos técnicos, administrativos y legales.';

  // Áreas de conocimiento
  areasConocimiento: AreaConocimiento[] = [
    {
      titulo: 'Gestión Inmobiliaria',
      descripcion: 'Compra, venta y alquiler de propiedades. Administración de inmuebles y consorcios.',
      icono: 'bi-building'
    },
    {
      titulo: 'Tasaciones y Valuaciones',
      descripcion: 'Evaluación técnica y económica de propiedades inmuebles según normativa vigente.',
      icono: 'bi-calculator'
    },
    {
      titulo: 'Marco Legal y Contratos',
      descripcion: 'Elaboración de contratos inmobiliarios, normativa registral y derecho inmobiliario.',
      icono: 'bi-file-earmark-text'
    },
    {
      titulo: 'Marketing y Comercialización',
      descripcion: 'Estrategias de marketing inmobiliario, negociación y atención al cliente.',
      icono: 'bi-megaphone'
    }
  ];

  // Competencias profesionales
  competencias: Competencia[] = [
    {
      titulo: 'Gestionar operaciones de compra, venta y alquiler de inmuebles',
      descripcion: 'Intervenir en todas las etapas de transacciones inmobiliarias desde la captación hasta el cierre.'
    },
    {
      titulo: 'Administrar consorcios y propiedades',
      descripcion: 'Realizar la administración integral de consorcios, cobro de expensas y gestión de proveedores.'
    },
    {
      titulo: 'Realizar tasaciones y valuaciones técnicas',
      descripcion: 'Evaluar inmuebles aplicando metodologías reconocidas y normativa vigente.'
    },
    {
      titulo: 'Elaborar y asesorar en contratos inmobiliarios',
      descripcion: 'Redactar contratos de locación, compraventa y garantías conforme a la legislación.'
    },
    {
      titulo: 'Implementar estrategias de marketing inmobiliario',
      descripcion: 'Diseñar y ejecutar campañas publicitarias y acciones comerciales efectivas.'
    },
    {
      titulo: 'Gestionar trámites en el Registro de la Propiedad',
      descripcion: 'Realizar inscripciones, certificados y consultas registrales.'
    }
  ];

  // Salidas laborales
  salidasLaborales: Salida[] = [
    {
      titulo: 'Inmobiliarias y Empresas del Sector',
      descripcion: 'Trabajo en agencias inmobiliarias, empresas constructoras y desarrolladoras de proyectos.',
      icono: 'bi-shop'
    },
    {
      titulo: 'Administración de Consorcios',
      descripcion: 'Gestión profesional de edificios y complejos habitacionales.',
      icono: 'bi-buildings'
    },
    {
      titulo: 'Tasaciones y Peritajes',
      descripcion: 'Valuación técnica de inmuebles para entidades bancarias, seguros y particulares.',
      icono: 'bi-clipboard-data'
    },
    {
      titulo: 'Registro de la Propiedad',
      descripcion: 'Gestión de trámites y documentación registral en organismos públicos.',
      icono: 'bi-file-earmark-ruled'
    },
    {
      titulo: 'Emprendimiento Independiente',
      descripcion: 'Apertura y gestión de inmobiliaria propia o consultoría independiente.',
      icono: 'bi-briefcase'
    }
  ];

  // Matriculación
  infoMatriculacion: string = 'Los egresados de la carrera pueden tramitar su matrícula profesional ante el organismo correspondiente, lo que les habilitará para ejercer la profesión de forma independiente.';
}

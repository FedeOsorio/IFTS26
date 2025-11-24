import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface PasoMatricula {
  numero: number;
  titulo: string;
  descripcion: string;
}

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
  // Información general
  descripcion: string = 'Una vez que te recibás como Técnico Superior, podés tramitar tu matrícula profesional para ejercer legalmente tu profesión en Argentina.';

  // Organismos de matriculación
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

  // Pasos generales
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

  // Beneficios
  beneficios: string[] = [
    'Ejercicio legal de la profesión',
    'Respaldo y reconocimiento profesional',
    'Acceso a actualizaciones y capacitaciones',
    'Cobertura de seguro de responsabilidad civil',
    'Participación en eventos y congresos profesionales'
  ];
}

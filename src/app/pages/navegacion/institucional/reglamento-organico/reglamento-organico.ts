import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface ReglamentoSection {
  titulo: string;
  articulos: { numero: string; contenido: string }[];
}

@Component({
  selector: 'app-reglamento-organico',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './reglamento-organico.html',
  styleUrl: './reglamento-organico.scss'
})
export class ReglamentoOrganico {
  // URL del PDF para descarga
  pdfUrl = '/assets/pdf/reglamento-organico.pdf';

  // Contenido del reglamento extraído del PDF
  reglamento: ReglamentoSection[] = [
    {
      titulo: 'CAPÍTULO I - DISPOSICIONES GENERALES',
      articulos: [
        {
          numero: 'Artículo 1°',
          contenido: 'El presente Reglamento Orgánico regula la organización, funcionamiento y administración del Instituto de Formación Técnica Superior N° 26, dependiente de la Agencia de Habilidades para el Futuro del Gobierno de la Ciudad Autónoma de Buenos Aires.'
        },
        {
          numero: 'Artículo 2°',
          contenido: 'El Instituto tiene como finalidad la formación de técnicos superiores en las especialidades autorizadas por la autoridad educativa competente, brindando una educación de calidad que responda a las necesidades del desarrollo económico y social.'
        }
      ]
    },
    {
      titulo: 'CAPÍTULO II - ESTRUCTURA ORGANIZATIVA',
      articulos: [
        {
          numero: 'Artículo 3°',
          contenido: 'El Instituto estará dirigido por un Rector/a, quien será asistido por un Vicerrector/a y contará con las siguientes áreas: Secretaría Académica, Secretaría Administrativa, Coordinación de Carreras, Departamento de Alumnos y Biblioteca.'
        },
        {
          numero: 'Artículo 4°',
          contenido: 'El Rector/a es la máxima autoridad del Instituto y tiene a su cargo la conducción académica, administrativa y de gestión de la institución.'
        }
      ]
    },
    {
      titulo: 'CAPÍTULO III - FUNCIONES DEL PERSONAL',
      articulos: [
        {
          numero: 'Artículo 5°',
          contenido: 'Son funciones del Rector/a: representar al Instituto ante organismos oficiales y privados, conducir la gestión académica e institucional, proponer el nombramiento del personal docente y no docente, convocar al Consejo Directivo y ejecutar sus resoluciones.'
        },
        {
          numero: 'Artículo 6°',
          contenido: 'El Vicerrector/a asiste al Rector en todas sus funciones y lo reemplaza en caso de ausencia temporal. Coordina las actividades académicas y supervisa el cumplimiento de los programas de estudio.'
        },
        {
          numero: 'Artículo 7°',
          contenido: 'La Secretaría Académica tiene a su cargo la organización y supervisión de las actividades de enseñanza, el registro de actas de examen, la emisión de certificados y títulos, y el seguimiento del desempeño académico de los estudiantes.'
        }
      ]
    },
    {
      titulo: 'CAPÍTULO IV - RÉGIMEN DE ESTUDIANTES',
      articulos: [
        {
          numero: 'Artículo 8°',
          contenido: 'Son estudiantes regulares del Instituto quienes se encuentren debidamente inscriptos en alguna de las carreras autorizadas y cumplan con los requisitos académicos establecidos en el régimen de correlatividades y asistencia.'
        },
        {
          numero: 'Artículo 9°',
          contenido: 'Los estudiantes tienen derecho a recibir educación de calidad, acceder a los recursos del Instituto, participar en actividades académicas y estudiantiles, y ser evaluados con objetividad y transparencia.'
        },
        {
          numero: 'Artículo 10°',
          contenido: 'Los estudiantes tienen la obligación de cumplir con el régimen académico, respetar las normas de convivencia, cuidar los bienes del Instituto y mantener un comportamiento acorde a los valores institucionales.'
        }
      ]
    },
    {
      titulo: 'CAPÍTULO V - RÉGIMEN ACADÉMICO',
      articulos: [
        {
          numero: 'Artículo 11°',
          contenido: 'El año académico se divide en dos cuatrimestres. La asistencia obligatoria a clases es del 70% para mantener la condición de alumno regular.'
        },
        {
          numero: 'Artículo 12°',
          contenido: 'Las evaluaciones se realizarán según lo establecido en cada plan de estudios. Los exámenes finales tendrán tres llamados anuales en los turnos establecidos por el calendario académico.'
        },
        {
          numero: 'Artículo 13°',
          contenido: 'Para aprobar una asignatura se requiere una calificación mínima de 4 (cuatro) puntos en una escala de 1 a 10. Los estudiantes libres deberán rendir examen completo de la materia.'
        }
      ]
    },
    {
      titulo: 'CAPÍTULO VI - PERSONAL DOCENTE',
      articulos: [
        {
          numero: 'Artículo 14°',
          contenido: 'El personal docente estará integrado por profesores titulares, asociados, adjuntos y auxiliares, según corresponda a cada asignatura y plan de estudios.'
        },
        {
          numero: 'Artículo 15°',
          contenido: 'Son deberes del personal docente: cumplir con el dictado de clases según el horario asignado, evaluar a los estudiantes con criterios objetivos, participar en reuniones de departamento y actividades institucionales, y mantener actualizada su formación profesional.'
        }
      ]
    }
  ];

  downloadPDF(): void {
    window.open(this.pdfUrl, '_blank');
  }
}

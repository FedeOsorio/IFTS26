import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface TipoConstancia {
  titulo: string;
  icono: string;
  descripcion: string;
  requisitos: string[];
  imagen: string;
}

@Component({
  selector: 'app-constancias',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './constancias.html',
  styleUrl: './constancias.scss'
})
export class Constancias {
  // Información general
  infoGeneral: string = 'Las constancias son documentos oficiales emitidos por el instituto que acreditan diferentes aspectos de tu situación académica.';
  
  // Tipos de constancias disponibles
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
      imagen: '/assets/pdf/constancia-alumno.pdf'
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
      imagen: '/assets/pdf/constancia-examen.pdf'
    }
  ];

  // Información de contacto
  horarioAtencion: string = 'Lunes a Viernes de 18:00 a 21:00 hs';
  lugarTramite: string = 'Bedelía - Planta Baja';
  tiempoEntrega: string = '48 a 72 horas hábiles';
}

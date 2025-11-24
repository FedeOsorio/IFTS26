import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface MesaExamen {
  materia: string;
  fecha: string;
  hora: string;
  aula: string;
  presidente: string;
}

interface TurnoExamen {
  turno: string;
  mes: string;
  carrera: string;
  mesas: MesaExamen[];
}

@Component({
  selector: 'app-mesas-examen',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './mesas-examen.html',
  styleUrl: './mesas-examen.scss'
})
export class MesasExamen {
  // Información general
  cicloLectivo: string = '2025';
  actualizacion: string = 'Última actualización: Marzo 2025';

  // Turnos de examen GIR
  mesasGIR: TurnoExamen[] = [
    {
      turno: 'Julio - Único Llamado',
      mes: 'Julio 2025',
      carrera: 'Gestión Integral del Riesgo',
      mesas: [
        {
          materia: 'Introducción a la GIR',
          fecha: '15/07/2025',
          hora: '18:00',
          aula: 'Aula 1',
          presidente: 'Prof. Juan Pérez'
        },
        {
          materia: 'Matemática',
          fecha: '17/07/2025',
          hora: '18:00',
          aula: 'Aula 2',
          presidente: 'Prof. María Gómez'
        },
        {
          materia: 'Gestión de Emergencias',
          fecha: '19/07/2025',
          hora: '18:00',
          aula: 'Aula 1',
          presidente: 'Prof. Carlos Ruiz'
        }
      ]
    }
  ];

  // Turnos de examen HyS
  mesasHYS: TurnoExamen[] = [
    {
      turno: 'Julio-Agosto - 1° y 2° Llamado',
      mes: 'Julio-Agosto 2025',
      carrera: 'Higiene y Seguridad en el Trabajo',
      mesas: [
        {
          materia: 'Introducción a la HyS',
          fecha: '16/07/2025',
          hora: '18:00',
          aula: 'Aula 3',
          presidente: 'Prof. Laura Martínez'
        },
        {
          materia: 'Física Aplicada',
          fecha: '18/07/2025',
          hora: '18:00',
          aula: 'Aula 2',
          presidente: 'Prof. Roberto Silva'
        },
        {
          materia: 'Higiene Industrial',
          fecha: '22/07/2025',
          hora: '18:00',
          aula: 'Aula 4',
          presidente: 'Prof. Ana Torres'
        }
      ]
    }
  ];

  // Requisitos
  requisitos: string[] = [
    'Inscripción previa en el sistema SIU Guaraní',
    'Presentar DNI original el día del examen',
    'Respetar horarios de presentación',
    'Tener regularizada la materia',
    'Verificar fecha, hora y aula asignada'
  ];

  // Nota importante
  notaImportante: string = 'Las mesas de examen están sujetas a modificaciones. Es responsabilidad del alumno verificar fechas y horarios en SIU Guaraní y en la cartelera de Bedelía.';
}

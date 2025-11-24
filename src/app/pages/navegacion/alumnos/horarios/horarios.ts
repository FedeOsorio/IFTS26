import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface Materia {
  nombre: string;
  dia: string;
  horario: string;
  aula?: string;
}

interface HorarioCarrera {
  carrera: string;
  anio: string;
  materias: Materia[];
}

@Component({
  selector: 'app-horarios',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss'
})
export class Horarios {
  // Información general
  cicloLectivo: string = '2025';
  actualizacion: string = 'Última actualización: Marzo 2025';

  // Horarios GIR
  horariosGIR: HorarioCarrera[] = [
    {
      carrera: 'Gestión Integral del Riesgo',
      anio: '1er Año',
      materias: [
        { nombre: 'Introducción a la GIR', dia: 'Lunes', horario: '18:00 - 21:00', aula: 'Aula 1' },
        { nombre: 'Matemática', dia: 'Miércoles', horario: '18:00 - 21:00', aula: 'Aula 2' },
        { nombre: 'Comunicación', dia: 'Viernes', horario: '18:00 - 21:00', aula: 'Aula 1' }
      ]
    },
    {
      carrera: 'Gestión Integral del Riesgo',
      anio: '2do Año',
      materias: [
        { nombre: 'Gestión de Emergencias', dia: 'Martes', horario: '18:00 - 21:00', aula: 'Aula 3' },
        { nombre: 'Normativa Legal', dia: 'Jueves', horario: '18:00 - 21:00', aula: 'Aula 1' }
      ]
    }
  ];

  // Horarios HyS
  horariosHYS: HorarioCarrera[] = [
    {
      carrera: 'Higiene y Seguridad en el Trabajo',
      anio: '1er Año',
      materias: [
        { nombre: 'Introducción a la HyS', dia: 'Lunes', horario: '18:00 - 21:00', aula: 'Aula 4' },
        { nombre: 'Física Aplicada', dia: 'Miércoles', horario: '18:00 - 21:00', aula: 'Aula 3' },
        { nombre: 'Química General', dia: 'Viernes', horario: '18:00 - 21:00', aula: 'Laboratorio' }
      ]
    },
    {
      carrera: 'Higiene y Seguridad en el Trabajo',
      anio: '2do Año',
      materias: [
        { nombre: 'Higiene Industrial', dia: 'Martes', horario: '18:00 - 21:00', aula: 'Aula 2' },
        { nombre: 'Seguridad Industrial', dia: 'Jueves', horario: '18:00 - 21:00', aula: 'Aula 4' }
      ]
    }
  ];

  // Nota informativa
  notaImportante: string = 'Los horarios pueden estar sujetos a modificaciones. Consultá regularmente en Bedelía o en el sistema SIU Guaraní.';
}

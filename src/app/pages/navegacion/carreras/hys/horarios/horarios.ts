import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../../components/page-banner/page-banner';

interface Materia {
  nombre: string;
  dia: string;
  horario: string;
  aula?: string;
}

interface HorarioAnio {
  anio: number;
  materias: Materia[];
}

@Component({
  selector: 'app-hys-horarios',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss',
  standalone: true
})
export class HysHorarios {
  // Información general
  cicloLectivo: string = '2025';
  actualizacion: string = 'Última actualización: Marzo 2025';

  // Horarios por año
  horarios: HorarioAnio[] = [
    {
      anio: 1,
      materias: [
        { nombre: 'Introducción a la Higiene y Seguridad', dia: 'Lunes', horario: '18:00 - 20:00', aula: '301' },
        { nombre: 'Física Aplicada', dia: 'Lunes', horario: '20:00 - 22:00', aula: '301' },
        { nombre: 'Química General y Aplicada', dia: 'Martes', horario: '18:00 - 20:00', aula: 'Lab 2' },
        { nombre: 'Matemática', dia: 'Martes', horario: '20:00 - 22:00', aula: '301' },
        { nombre: 'Legislación y Normativa', dia: 'Miércoles', horario: '18:00 - 20:00', aula: '302' },
        { nombre: 'Comunicación Profesional', dia: 'Miércoles', horario: '20:00 - 22:00', aula: '302' },
        { nombre: 'Informática Aplicada I', dia: 'Jueves', horario: '18:00 - 20:00', aula: 'Lab 1' },
        { nombre: 'Práctica Profesionalizante I', dia: 'Viernes', horario: '18:00 - 20:00', aula: '301' }
      ]
    },
    {
      anio: 2,
      materias: [
        { nombre: 'Seguridad Industrial', dia: 'Lunes', horario: '18:00 - 20:00', aula: '303' },
        { nombre: 'Higiene Industrial', dia: 'Lunes', horario: '20:00 - 22:00', aula: '303' },
        { nombre: 'Prevención y Control de Incendios', dia: 'Martes', horario: '18:00 - 20:00', aula: '304' },
        { nombre: 'Riesgos Eléctricos', dia: 'Martes', horario: '20:00 - 22:00', aula: '304' },
        { nombre: 'Ergonomía', dia: 'Miércoles', horario: '18:00 - 20:00', aula: '303' },
        { nombre: 'Toxicología Laboral', dia: 'Miércoles', horario: '20:00 - 22:00', aula: 'Lab 2' },
        { nombre: 'Informática Aplicada II', dia: 'Jueves', horario: '18:00 - 20:00', aula: 'Lab 1' },
        { nombre: 'Práctica Profesionalizante II', dia: 'Viernes', horario: '18:00 - 20:00', aula: '303' }
      ]
    }
  ];

  // Nota importante
  notaImportante: string = 'Los horarios pueden sufrir modificaciones durante el ciclo lectivo. Verificá siempre en SIU Guaraní o en las carteleras del instituto las novedades sobre cambios de horarios o aulas.';
}

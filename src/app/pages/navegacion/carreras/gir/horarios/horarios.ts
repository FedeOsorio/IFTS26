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
  selector: 'app-gir-horarios',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss',
  standalone: true
})
export class GirHorarios {
  // Información general
  cicloLectivo: string = '2025';
  actualizacion: string = 'Última actualización: Marzo 2025';

  // Horarios por año
  horarios: HorarioAnio[] = [
    {
      anio: 1,
      materias: [
        { nombre: 'Introducción a la Gestión Inmobiliaria', dia: 'Lunes', horario: '18:00 - 20:00', aula: '201' },
        { nombre: 'Matemática Aplicada', dia: 'Lunes', horario: '20:00 - 22:00', aula: '201' },
        { nombre: 'Normativa Inmobiliaria', dia: 'Martes', horario: '18:00 - 20:00', aula: '202' },
        { nombre: 'Comunicación y Expresión', dia: 'Martes', horario: '20:00 - 22:00', aula: '202' },
        { nombre: 'Técnicas Administrativas', dia: 'Miércoles', horario: '18:00 - 20:00', aula: '201' },
        { nombre: 'Informática Aplicada I', dia: 'Miércoles', horario: '20:00 - 22:00', aula: 'Lab 1' },
        { nombre: 'Economía y Mercado Inmobiliario', dia: 'Jueves', horario: '18:00 - 20:00', aula: '203' },
        { nombre: 'Práctica Profesionalizante I', dia: 'Viernes', horario: '18:00 - 20:00', aula: '201' }
      ]
    },
    {
      anio: 2,
      materias: [
        { nombre: 'Tasaciones y Valuaciones', dia: 'Lunes', horario: '18:00 - 20:00', aula: '204' },
        { nombre: 'Contratos Inmobiliarios', dia: 'Lunes', horario: '20:00 - 22:00', aula: '204' },
        { nombre: 'Gestión de Alquileres', dia: 'Martes', horario: '18:00 - 20:00', aula: '205' },
        { nombre: 'Marketing Inmobiliario', dia: 'Martes', horario: '20:00 - 22:00', aula: '205' },
        { nombre: 'Informática Aplicada II', dia: 'Miércoles', horario: '18:00 - 20:00', aula: 'Lab 1' },
        { nombre: 'Administración de Consorcios', dia: 'Miércoles', horario: '20:00 - 22:00', aula: '204' },
        { nombre: 'Impuestos y Régimen Tributario', dia: 'Jueves', horario: '18:00 - 20:00', aula: '206' },
        { nombre: 'Práctica Profesionalizante II', dia: 'Viernes', horario: '18:00 - 20:00', aula: '204' }
      ]
    }
  ];

  // Nota importante
  notaImportante: string = 'Los horarios pueden sufrir modificaciones durante el ciclo lectivo. Verificá siempre en SIU Guaraní o en las carteleras del instituto las novedades sobre cambios de horarios o aulas.';
}

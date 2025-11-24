import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

interface HorarioAtencion {
  dia: string;
  horario: string;
}

interface ContactoTutoria {
  icono: string;
  tipo: string;
  valor: string;
}

@Component({
  selector: 'app-tutoria',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './tutoria.html',
  styleUrl: './tutoria.scss'
})
export class Tutoria {
  // Información del tutor
  tutorNombre: string = 'Prof. Gustavo Loscri';
  tutorCargo: string = 'Tutor Institucional';
  tutorDescripcion: string = 'El Prof. Gustavo Loscri se desempeña como Tutor Institucional del IFTS N°26, brindando orientación y acompañamiento personalizado a los estudiantes durante su trayectoria académica.';

  // Horarios de atención
  horariosAtencion: HorarioAtencion[] = [
    { dia: 'Lunes', horario: '18:00 a 20:00 hs' },
    { dia: 'Miércoles', horario: '18:00 a 20:00 hs' },
    { dia: 'Viernes', horario: '17:00 a 19:00 hs' }
  ];

  // Contacto
  contactosTutoria: ContactoTutoria[] = [
    { icono: 'bi-envelope-fill', tipo: 'Email', valor: 'tutoria@ifts26.edu.ar' },
    { icono: 'bi-telephone-fill', tipo: 'Teléfono', valor: '4931-9843' },
    { icono: 'bi-geo-alt-fill', tipo: 'Ubicación', valor: 'Estados Unidos 3141' }
  ];

  // Servicios de tutoría
  servicios: string[] = [
    'Orientación académica y planificación de estudios',
    'Asesoramiento en trámites administrativos',
    'Apoyo en situaciones de dificultad académica',
    'Información sobre becas y programas de ayuda',
    'Acompañamiento en procesos de inscripción',
    'Resolución de consultas institucionales'
  ];
}

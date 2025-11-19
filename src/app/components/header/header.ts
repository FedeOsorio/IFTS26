import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective } from "@coreui/angular";
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  imports: [
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  public isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public navButtons = [
    {
      label: 'Inicio',
      route: '/'
    },
    {
      label: 'Pre-Inscripción',
      route: '/pre-inscripcion'
    },
    {
      label: 'Institucional',
      items: [
        { text: 'Calendario Académico', route: '/institucional/calendario-academico' },
        { text: 'Datos Institucionales', route: '/institucional/autoridades' },
        { text: 'Reglamento Orgánico', route: '/institucional/reglamento-organico' },
        { text: 'Repositorio', route: '/institucional/repositorio' },
        { text: 'Plano de Evacuación', route: '/institucional/evacuacion' }
      ]
    },
    {
      label: 'Carreras',
      items: [
        { text: 'Gestión Integral del Riesgo', route: '/carrera/gir' },
        { text: 'Higiene y Seguridad en el Trabajo', route: '/carrera/hys' }
      ]
    },
    {
      label: 'Docentes',
      route: '/docentes'
    },
    {
      label: 'Alumnos',
      items: [
        { text: 'Tutorías', route: '/tutoria'},
        { text: 'Constancias', route: '/alumnos/constancias' },
        { text: 'Becas Progresar', route: '/alumnos/becas' },
        { text: 'Títulos Extranjeros', route: '/alumnos/titulos-extranjeros' },
        { text: 'Matrícula Profesional', route: '/alumnos/matricula-profesional' },
        { text: 'Horarios', route: '/alumnos/horarios' },
        { text: 'Mesas de exámen', route: '/alumnos/mesas-examen' },
        { text: 'Cooperadora', route: '/alumnos/cooperadora' }
      ]
    },
    {
      label: 'SIU Guaraní/Moodle',
      route: '/accesos'
    },
    {
      label: 'Publicaciones',
      route: '/novedades'
    },
    {
      label: 'Contacto',
      route: '/contacto'
    }
  ];
}

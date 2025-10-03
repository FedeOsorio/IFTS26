import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective } from "@coreui/angular";

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
  public navButtons = [
    {
      label: 'Inicio',
      items: [{ text: 'Página Principal', route: '/' }, { text: 'Noticias Destacadas', route: '/noticias' },]
    },
    {
      label: 'Pre-Inscripción',
      items: [{ text: 'Ver Instructivo', route: '/preinscripcion/instructivo' }, { text: 'Formulario de Inscripción', route: '/preinscripcion/formulario' }, { text: 'Consultar Estado', route: '/preinscripcion/estado' }]
    },
    {
      label: 'Institucional',
      items: [
        { text: 'Nuestra Historia', route: '/institucional/historia' },
        { text: 'Autoridades', route: '/institucional/autoridades' },
        { text: 'Misión y Visión', route: '/institucional/mision' },
        { text: 'Normativas', route: '/institucional/normativas' }
      ]
    },
    {
      label: 'Carreras',
      items: [
        { text: 'Oferta Académica de Grado', route: '/carreras/grado' },
        { text: 'Oferta de Posgrado', route: '/carreras/posgrado' },
        { text: 'Planes de Estudio', route: '/carreras/planes' }
      ]
    },
    {
      label: 'Docentes',
      items: [
        { text: 'Portal Docente', route: '/docentes/portal' },
        { text: 'Material de Cátedra', route: '/docentes/material' },
        { text: 'Novedades para Docentes', route: '/docentes/novedades' }
      ]
    },
    {
      label: 'Alumnos',
      items: [
        { text: 'Portal de Alumnos', route: '/alumnos/portal' },
        { text: 'Trámites Frecuentes', route: '/alumnos/tramites' },
        { text: 'Calendario Académico', route: '/alumnos/calendario' },
        { text: 'Bienestar Estudiantil', route: '/alumnos/bienestar' }
      ]
    },
    {
      label: 'Tutorías',
      items: [
        { text: 'Programa de Tutorías', route: '/tutorias/programa' },
        { text: 'Solicitar un Tutor', route: '/tutorias/solicitar' },
        { text: 'Horarios de Consulta', route: '/tutorias/horarios' }
      ]
    },
    {
      label: 'SIU Guaraní/Moodle',
      items: [
        { text: 'Acceder a SIU Guaraní', route: '/acceso/siu-guarani' },
        { text: 'Acceder a Moodle', route: '/acceso/moodle' },
        { text: 'Guías y Tutoriales', route: '/acceso/ayuda' }
      ]
    },
    {
      label: 'Novedades',
      items: [
        { text: 'Últimas Noticias', route: '/novedades/noticias' },
        { text: 'Eventos y Agenda', route: '/novedades/eventos' },
        { text: 'Archivo de Novedades', route: '/novedades/archivo' }
      ]
    },
    {
      label: 'Contacto',
      items: [
        { text: 'Formulario de Contacto', route: '/contacto/formulario' },
        { text: 'Ubicación y Horarios', route: '/contacto/ubicacion' },
        { text: 'Teléfonos Útiles', route: '/contacto/telefonos' }
      ]
    }
  ];
}

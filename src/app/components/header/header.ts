import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  
  mobileMenuOpen = false;
  openSubmenu: string | null = null;

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
        { text: 'Tutorías', route: '/tutoria' },
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

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.openSubmenu = null;
    }
  }

  toggleSubmenu(label: string): void {
    this.openSubmenu = this.openSubmenu === label ? null : label;
  }

  closeMenus(): void {
    this.mobileMenuOpen = false;
    this.openSubmenu = null;
  }
}
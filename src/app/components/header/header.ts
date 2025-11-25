import { Component, HostListener, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit, AfterViewInit {
  @ViewChild('desktopMenu') desktopMenu!: ElementRef;
  
  mobileMenuOpen = false;
  openSubmenu: string | null = null;
  moreMenuOpen = false;
  visibleButtons: any[] = [];
  hiddenButtons: any[] = [];

  // NavButtons originales de IFTS26 con todos sus links
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

  ngOnInit(): void {
    this.calculateVisibleButtons();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.calculateVisibleButtons(), 100);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateVisibleButtons();
  }

  calculateVisibleButtons(): void {
    const screenWidth = window.innerWidth;
    
    // En mobile/tablet, mostrar todos en hamburguesa
    if (screenWidth < 1024) {
      this.visibleButtons = this.navButtons;
      this.hiddenButtons = [];
      return;
    }

    // Lógica responsive para desktop
    let maxVisible = this.navButtons.length;
    
    if (screenWidth < 1400) {
      maxVisible = 6; // Mostrar 6 + botón Más
    } else if (screenWidth < 1600) {
      maxVisible = 8; // Mostrar 8 + botón Más
    }

    if (maxVisible < this.navButtons.length) {
      this.visibleButtons = this.navButtons.slice(0, maxVisible);
      this.hiddenButtons = this.navButtons.slice(maxVisible);
    } else {
      this.visibleButtons = this.navButtons;
      this.hiddenButtons = [];
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.openSubmenu = null;
    }
  }

  toggleSubmenu(label: string): void {
    this.openSubmenu = this.openSubmenu === label ? null : label;
  }

  toggleMoreMenu(): void {
    this.moreMenuOpen = !this.moreMenuOpen;
  }

  closeMenus(): void {
    this.mobileMenuOpen = false;
    this.openSubmenu = null;
    this.moreMenuOpen = false;
  }
}

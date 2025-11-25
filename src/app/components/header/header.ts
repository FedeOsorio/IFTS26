/**
 * Componente Header - Barra de navegación principal del sitio
 * 
 * Desarrollé este componente para manejar toda la navegación del sitio web.
 * Incluye un menú responsive que se adapta a diferentes tamaños de pantalla:
 * - Desktop: menú horizontal con submenús desplegables y botón "Más"
 * - Mobile/Tablet: menú hamburguesa con acordeón
 * 
 * La lógica de visibilidad de botones que implementé redistribuye automáticamente
 * los enlaces según el ancho disponible, moviendo los que no entran al menú "Más".
 * 
 * @author Marcos - IFTS N°26
 */

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
  // Referencia al elemento del menú desktop para cálculos de ancho
  @ViewChild('desktopMenu') desktopMenu!: ElementRef;
  
  // Estados de apertura/cierre de los diferentes menús
  mobileMenuOpen = false;           // Controla el menú hamburguesa en mobile
  openSubmenu: string | null = null; // Almacena qué submenú está abierto actualmente
  moreMenuOpen = false;              // Controla el menú desplegable "Más" en desktop
  openDesktopSubmenu: string | null = null; // Controla qué submenú desktop está abierto
  
  // Arrays para distribuir botones entre visibles y ocultos (lógica responsive)
  visibleButtons: any[] = [];        // Botones que se muestran directamente en el header
  hiddenButtons: any[] = [];         // Botones que van dentro del menú "Más"

  /**
   * Estructura completa de navegación del sitio IFTS26
   * 
   * Definí aquí todos los enlaces principales y sus submenús. Algunos botones
   * tienen una propiedad 'route' (enlace directo) y otros tienen 'items' 
   * (submenús con múltiples opciones).
   */
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
        { text: 'Cooperadora', route: '/alumnos/cooperadora' },
        { text: 'Preguntas frecuentes', route: '/preguntas' }
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

  /**
   * Inicialización del componente
   * Calculo qué botones mostrar según el ancho de pantalla inicial
   */
  ngOnInit(): void {
    this.calculateVisibleButtons();
  }

  /**
   * Después de que la vista se renderiza
   * Espero 100ms para asegurarme de que el DOM está completamente cargado
   * antes de hacer cálculos de ancho
   */
  ngAfterViewInit(): void {
    setTimeout(() => this.calculateVisibleButtons(), 100);
  }

  /**
   * Escucho cambios en el tamaño de ventana del navegador
   * Angular ejecuta este método automáticamente cuando el usuario redimensiona la ventana
   */
  @HostListener('window:resize')
  onResize(): void {
    this.calculateVisibleButtons();
  }

  /**
   * Cerrar menús al hacer clic fuera de ellos
   */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const headerElement = document.querySelector('.header');
    
    if (headerElement && !headerElement.contains(target)) {
      this.openDesktopSubmenu = null;
      this.moreMenuOpen = false;
    }
  }

  /**
   * Calcula qué botones mostrar directamente y cuáles ocultar en el menú "Más"
   * 
   * Esta lógica que implementé permite que el header se adapte dinámicamente:
   * - Mobile/Tablet (<1024px): todos los botones van al menú hamburguesa
   * - Desktop pequeño (<1400px): muestra 6 botones + menú "Más"
   * - Desktop mediano (<1600px): muestra 8 botones + menú "Más"
   * - Desktop grande (≥1600px): muestra todos los botones sin menú "Más"
   */
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

  /**
   * Alternar visibilidad del menú hamburguesa en mobile
   * Si se cierra el menú, también cierro todos los submenús abiertos
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.openSubmenu = null;
    }
  }

  /**
   * Alternar visibilidad de un submenú específico
   * 
   * @param label - El nombre del menú (ej: "Alumnos", "Institucional")
   * 
   * Si el submenú ya está abierto, lo cierro. Si está cerrado, lo abro
   * y cierro cualquier otro submenú que estuviera abierto.
   */
  toggleSubmenu(label: string): void {
    this.openSubmenu = this.openSubmenu === label ? null : label;
  }

  /**
   * Alternar visibilidad de un submenú desktop
   * Se usa para los menús desplegables en la versión desktop
   */
  toggleDesktopSubmenu(label: string): void {
    this.openDesktopSubmenu = this.openDesktopSubmenu === label ? null : label;
  }

  /**
   * Alternar visibilidad del menú desplegable "Más" en desktop
   */
  toggleMoreMenu(): void {
    this.moreMenuOpen = !this.moreMenuOpen;
  }

  /**
   * Cerrar todos los menús abiertos
   * Utilizo este método cuando el usuario navega a otra página o hace clic fuera del menú
   */
  closeMenus(): void {
    this.mobileMenuOpen = false;
    this.openSubmenu = null;
    this.moreMenuOpen = false;
    this.openDesktopSubmenu = null;
  }
}

/**
 * Componente para la página de la carrera Gestión de la Información y Redes (GIR)
 * 
 * Muestra información detallada sobre la carrera: descripción, duración, modalidad,
 * requisitos de inscripción, plan de estudios y correlatividades.
 * Incluye botones de navegación rápida para acceder a horarios y perfil del egresado.
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';
import {
  faChevronDown,
  faChevronUp,
  faTableList,      // Para Plan de Estudio
  faDiagramProject, // Para Correlatividades
  faClock,          // Para Horarios
  faUserGraduate    // Para Perfil del Egresado
} from '@fortawesome/free-solid-svg-icons';

/**
 * Interfaz que define la estructura de las secciones expandibles
 * como el plan de estudios y el régimen de correlatividades
 */
interface SeccionExpandible {
  titulo: string;     // Título de la sección
  icono: any;         // Ícono de FontAwesome
  imagenSrc: string;  // Ruta de la imagen (PDF o PNG)
  abierto: boolean;   // Estado de expansión del accordion
}

@Component({
  selector: 'app-gir',
  imports: [CommonModule, RouterLink, FontAwesomeModule, PageBannerComponent],
  templateUrl: './gir.html',
  styleUrl: './gir.scss'
})
export class Gir {
  // Iconos utilizados en el componente
  iconoExpandir = faChevronDown;      // Ícono para expandir secciones
  iconoContraer = faChevronUp;        // Ícono para contraer secciones
  iconoClock = faClock;                // Ícono para el botón de horarios
  iconoGraduate = faUserGraduate;      // Ícono para el botón de perfil del egresado

  // Secciones expandibles: plan de estudios y correlatividades
  secciones: SeccionExpandible[] = [
    {
      titulo: 'Plan de Estudios y Carga Horaria',
      icono: faTableList,
      imagenSrc: '/assets/pdf/plan-gir.pdf',
      abierto: false
    },
    {
      titulo: 'Régimen de Correlatividades',
      icono: faDiagramProject,
      imagenSrc: '/assets/img/correlatividades-git.png',
      abierto: false
    }
  ];

  /**
   * Alterna el estado de apertura/cierre de una sección expandible
   * @param seccion - La sección a expandir o contraer
   */
  toggleSeccion(seccion: SeccionExpandible): void {
    seccion.abierto = !seccion.abierto;
  }
}

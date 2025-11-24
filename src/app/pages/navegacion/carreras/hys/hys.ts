/**
 * Componente para la página de la carrera Higiene y Seguridad en el Trabajo (HyS)
 * 
 * Presenta información completa sobre la carrera: descripción, habilidades que desarrolla,
 * duración, modalidad, requisitos, y contenido académico.
 * Incluye navegación rápida hacia horarios y perfil del egresado.
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faHelmetSafety, faClipboardList, faUserGraduate, faClock } from '@fortawesome/free-solid-svg-icons';
import datosHigiene from '../../../../../assets/data/higiene-seguridad.json'
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz para las secciones expandibles del plan de estudios
 */
interface SeccionExpandible {
  titulo: string;     // Título de la sección
  icono: any;         // Ícono de FontAwesome
  imagenSrc: string;  // Ruta al archivo PDF o imagen
  abierto: boolean;   // Estado de expansión
}

@Component({
  selector: 'app-hys',
  imports: [CommonModule, RouterLink, FontAwesomeModule, PageBannerComponent],
  templateUrl: './hys.html',
  styleUrl: './hys.scss'
})
export class Hys {
  // Iconos utilizados en el componente
  iconoExpandir = faChevronDown;        // Ícono para expandir accordion
  iconoContraer = faChevronUp;          // Ícono para contraer accordion
  iconoPerfil = faUserGraduate;         // Ícono para perfil del profesional
  iconoClock = faClock;                  // Ícono para horarios
  iconoGraduate = faUserGraduate;        // Ícono para perfil del egresado

  // Estado del accordion de perfil profesional
  perfilAbierto = false;
  
  // Datos de la carrera cargados desde JSON
  data = datosHigiene;
  
  // Secciones expandibles del plan de estudios
  secciones = [
    {
      titulo: 'Plan de Estudio (Nuevo Plan)',
      icono: faClipboardList,
      imagenSrc: '/assets/pdf/plan-hyst.pdf',
      abierto: false
    }
  ];

  /**
   * Alterna el estado de las secciones con imágenes (plan de estudios)
   * @param seccion - La sección a expandir o contraer
   */
  toggleSeccion(seccion: any): void {
    seccion.abierto = !seccion.abierto;
  }

  /**
   * Alterna la visualización del perfil del profesional
   */
  togglePerfil(): void {
    this.perfilAbierto = !this.perfilAbierto;
  }

}

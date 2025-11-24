/**
 * Componente Home - Página de inicio del sitio
 * 
 * Esta es la primera página que ven los visitantes del sitio. Implementé aquí
 * la estructura de bienvenida con:
 * - Banner principal con imagen y mensaje de bienvenida
 * - Tarjetas informativas destacadas (componente InfoCards)
 * - Sección de carreras con scroll suave
 * - Enlaces rápidos a secciones importantes
 * 
 * Utilizo signals de Angular para el título, lo cual permite actualizaciones
 * reactivas si fuera necesario en el futuro.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoCards } from '../../components/info-cards/info-cards';

@Component({
  selector: 'app-home',
  imports: [InfoCards, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  /**
   * Título de la página almacenado como signal
   * Los signals son la nueva forma reactiva de Angular para manejar estado
   */
  protected readonly title = signal('IFTS26');

  /**
   * Hace scroll suave hacia la sección de carreras
   * 
   * Implementé este método para mejorar la experiencia del usuario cuando hace
   * clic en el botón "Ver Carreras" del banner. En lugar de un salto brusco,
   * el navegador se desplaza suavemente hacia la sección de carreras.
   */
  scrollToCarreras(): void {
    const carrerasSection = document.querySelector('.careers-section');
    if (carrerasSection) {
      carrerasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

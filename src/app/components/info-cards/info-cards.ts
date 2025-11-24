/**
 * Componente InfoCards - Tarjetas informativas destacadas de la página de inicio
 * 
 * Desarrollé este componente para mostrar las tres secciones principales del sitio
 * de manera visual y accesible en la home. Cada tarjeta incluye:
 * - Un icono representativo de FontAwesome
 * - Un título descriptivo
 * - Un texto breve explicativo
 * - Un enlace para acceder a más información
 * 
 * Las tres tarjetas que implementé son:
 * 1. Carreras (icono birrete): enlaza a la sección de carreras
 * 2. Para Alumnos (icono personas): enlaza a servicios para estudiantes
 * 3. Institucional (icono libro): enlaza a información del instituto
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-cards',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './info-cards.html',
  styleUrl: './info-cards.scss'
})
export class InfoCards {
  // Iconos de FontAwesome para cada tarjeta informativa
  faGraduationCap = faGraduationCap; // Birrete para sección de carreras
  faUsers = faUsers;                 // Grupo de personas para sección de alumnos
  faBookOpen = faBookOpen;           // Libro abierto para sección institucional
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faHelmetSafety, faClipboardList, faUserGraduate, faClock } from '@fortawesome/free-solid-svg-icons';
import datosHigiene from '../../../../../assets/data/higiene-seguridad.json'

interface SeccionExpandible {
  titulo: string;
  icono: any;
  imagenSrc: string;
  abierto: boolean;
}

@Component({
  selector: 'app-hys',
  imports: [CommonModule, RouterLink, FontAwesomeModule],
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
  
  secciones = [
    {
      titulo: 'Plan de Estudio (Nuevo Plan)',
      icono: faClipboardList,
      imagenSrc: '/assets/pdf/plan-hyst.pdf',
      abierto: false
    }
  ];

  // Método para las secciones de imagen
  toggleSeccion(seccion: any): void {
    seccion.abierto = !seccion.abierto;
  }

  // Método específico para el Perfil
  togglePerfil(): void {
    this.perfilAbierto = !this.perfilAbierto;
  }

}

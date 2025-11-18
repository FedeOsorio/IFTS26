import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faTableList,      // Para Plan de Estudio
  faDiagramProject  // Para Correlatividades
} from '@fortawesome/free-solid-svg-icons';

interface SeccionExpandible {
  titulo: string;
  icono: any;
  imagenSrc: string; // La ruta de la imagen que subirá el admin
  abierto: boolean;
}

@Component({
  selector: 'app-gir',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './gir.html',
  styleUrl: './gir.scss'
})
export class Gir {
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;

  // Definición de las solapas expandibles
  secciones: SeccionExpandible[] = [
    {
      titulo: 'Plan de Estudios y Carga Horaria',
      icono: faTableList,
      // Esta imagen la subirá el admin. De momento usamos un placeholder.
      imagenSrc: 'assets/images/plan-estudios-gir.jpg',
      abierto: false
    },
    {
      titulo: 'Régimen de Correlatividades',
      icono: faDiagramProject,
      imagenSrc: 'assets/images/correlatividades-gir.jpg',
      abierto: false
    }
  ];

  toggleSeccion(seccion: SeccionExpandible): void {
    seccion.abierto = !seccion.abierto;
  }
}

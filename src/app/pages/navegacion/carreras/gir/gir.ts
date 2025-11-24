import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';
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
  imports: [CommonModule, FontAwesomeModule, PageBannerComponent],
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

  toggleSeccion(seccion: SeccionExpandible): void {
    seccion.abierto = !seccion.abierto;
  }
}

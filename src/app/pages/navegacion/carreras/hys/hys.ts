import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faHelmetSafety, faClipboardList, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import datosHigiene from '../../../../../assets/data/higiene-seguridad.json'
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface SeccionExpandible {
  titulo: string;
  icono: any;
  imagenSrc: string;
  abierto: boolean;
}

@Component({
  selector: 'app-hys',
  imports: [CommonModule, FontAwesomeModule, PageBannerComponent],
  templateUrl: './hys.html',
  styleUrl: './hys.scss'
})
export class Hys {
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoPerfil = faUserGraduate; 

  perfilAbierto = false;
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

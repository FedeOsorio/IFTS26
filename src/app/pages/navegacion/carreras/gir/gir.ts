import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faBookOpen,
  faListCheck,
  faShieldHalved,
  faUserGraduate,
  faClipboardList,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import girData from '../../../../../assets/data/gestion-riesgo.json';

// Interfaz para el manejo interno
interface SeccionExpandible {
  titulo: string;
  imagenSrc?: string;
  contenidoTexto?: string;
  abierto: boolean;
  icono: any; // Agregado para UI
}

@Component({
  selector: 'app-gir',
  imports: [CommonModule, FontAwesomeModule], // Agregado CommonModule
  templateUrl: './gir.html',
  styleUrl: './gir.scss'
})
export class Gir implements OnInit {
  private sanitizer = inject(DomSanitizer);

  // Datos crudos del JSON
  data = girData;

  // Lista procesada para la vista
  listaSecciones: SeccionExpandible[] = [];

  // Íconos UI
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;

  ngOnInit(): void {
    // Procesamos las secciones para agregar estado abierto y el ícono correspondiente
    if (this.data.secciones) {
      this.listaSecciones = this.data.secciones.map((s: any) => ({
        ...s,
        abierto: s.abierto || false,
        icono: this.determinarIconoPorTitulo(s.titulo)
      }));
    }
  }

  // Función para asignar íconos automáticamente según el título (Igual que componente Hys)
  private determinarIconoPorTitulo(titulo: string): any {
    const tituloLower = titulo.toLowerCase();

    if (tituloLower.includes('plan')) return faClipboardList;
    if (tituloLower.includes('perfil') || tituloLower.includes('egresado')) return faUserGraduate;
    if (tituloLower.includes('horario')) return faClock;
    if (tituloLower.includes('programas') || tituloLower.includes('materias')) return faBookOpen;
    if (tituloLower.includes('requisitos')) return faListCheck;

    return faShieldHalved; // Ícono por defecto
  }

  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleSeccion(item: SeccionExpandible): void {
    item.abierto = !item.abierto;
  }
}
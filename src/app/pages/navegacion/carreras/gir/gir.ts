import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser'; // Importamos SafeResourceUrl
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

// Interfaz actualizada
interface SeccionExpandible {
  titulo: string;
  imagenSrc?: string;
  pdfSrc?: string;          // Ruta cruda del JSON
  pdfSeguro?: SafeResourceUrl; // Ruta segura procesada
  contenidoTexto?: string;
  abierto: boolean;
  icono: any;
}

@Component({
  selector: 'app-gir',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './gir.html',
  styleUrl: './gir.scss'
})
export class Gir implements OnInit {
  private sanitizer = inject(DomSanitizer);

  data = girData;
  listaSecciones: SeccionExpandible[] = [];

  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;

  ngOnInit(): void {
    if (this.data.secciones) {
      this.listaSecciones = this.data.secciones.map((s: any) => ({
        ...s,
        abierto: s.abierto || false,
        icono: this.determinarIconoPorTitulo(s.titulo),
        // LÓGICA DE PDF: Sanitizamos aquí una sola vez
        pdfSeguro: s.pdfSrc ? this.sanitizer.bypassSecurityTrustResourceUrl(s.pdfSrc) : undefined
      }));
    }
  }

  private determinarIconoPorTitulo(titulo: string): any {
    const tituloLower = titulo.toLowerCase();
    if (tituloLower.includes('plan')) return faClipboardList;
    if (tituloLower.includes('perfil') || tituloLower.includes('egresado')) return faUserGraduate;
    if (tituloLower.includes('horario')) return faClock;
    if (tituloLower.includes('programas') || tituloLower.includes('materias')) return faBookOpen;
    if (tituloLower.includes('requisitos')) return faListCheck;
    return faShieldHalved;
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
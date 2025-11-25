import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faBookOpen,
  faListCheck,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import girData from '../../../../../assets/data/gestion-riesgo.json'

interface SeccionExpandible {
  titulo: string;
  icono: any;
  imagenSrc: string; // La ruta de la imagen que subirá el admin
  abierto: boolean;
}

@Component({
  selector: 'app-gir',
  imports: [FontAwesomeModule],
  templateUrl: './gir.html',
  styleUrl: './gir.scss'
})
export class Gir {
  private sanitizer = inject(DomSanitizer);

  // Mapeamos los datos para asegurar que las solapas tengan la propiedad 'abierto'
  data = {
    ...girData,
    secciones: girData.secciones ? girData.secciones.map((s: any) => ({ ...s, abierto: s.abierto || false })) : []
  };

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoEscudo = faShieldHalved;
  iconoLibro = faBookOpen;
  iconoLista = faListCheck;

  // Función para convertir Markdown a HTML seguro
  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // Función para abrir/cerrar solapas
  toggleSeccion(item: any): void {
    item.abierto = !item.abierto;
  }
}

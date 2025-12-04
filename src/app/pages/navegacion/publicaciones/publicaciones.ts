import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { faChevronDown, faChevronUp, faCalendarAlt, faImages } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import publicacionesData from '../../../../assets/data/publicaciones.json'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publicaciones',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.scss'
})
export class Publicaciones {
private sanitizer = inject(DomSanitizer);
  
  data = publicacionesData;
  items: any[] = [];

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoFecha = faCalendarAlt;
  iconoGaleria = faImages;

  ngOnInit() {
    // Inicializamos añadiendo la propiedad 'abierto'
    if (this.data.items) {
      this.items = this.data.items.map((item: any) => ({
        ...item,
        abierto: false
      }));
    }
  }

  togglePublicacion(item: any): void {
    item.abierto = !item.abierto;
  }

  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { faChevronDown, faChevronUp, faCalendarDays, faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import mesasData from '../../../../../assets/data/mesas-examen.json'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-mesas-examen',
  imports: [FontAwesomeModule],
  templateUrl: './mesas-examen.html',
  styleUrl: './mesas-examen.scss'
})

export class MesasExamen {
  private sanitizer = inject(DomSanitizer);

  data = {
    ...mesasData,
    turnos: mesasData.turnos.map((t: any) => ({ ...t, abierto: false }))
  };

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoCalendario = faCalendarDays;
  iconoPdf = faFilePdf;
  iconoDescarga = faDownload;

  // Renderizar Markdown (para la cabecera)
  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // Sanitizar URL para iframe
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Toggle Solapa
  toggleTurno(item: any): void {
    // Opcional: cerrar otros al abrir uno
    // this.data.turnos.forEach(t => { if (t !== item) t.abierto = false; });
    item.abierto = !item.abierto;
  }
}


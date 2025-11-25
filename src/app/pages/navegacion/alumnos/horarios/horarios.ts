import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faClock, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import horariosData from '../../../../../assets/data/horarios.json'

@Component({
  selector: 'app-horarios',
  imports: [FontAwesomeModule],
  templateUrl: './horarios.html',
  styleUrl: './horarios.scss'
})
export class Horarios {
private sanitizer = inject(DomSanitizer);

  data = {
    ...horariosData,
    cronogramas: horariosData.cronogramas.map((c: any) => ({ ...c, abierto: false }))
  };

  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoReloj = faClock;
  iconoDescargar = faFileArrowDown;

  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleCronograma(item: any): void {
    this.data.cronogramas.forEach(c => {
      if (c !== item) c.abierto = false;
    });
    item.abierto = !item.abierto;
  }
}

import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { faChevronDown, faChevronUp, faFileSignature, faDownload, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import constanciasData from '../../../../../assets/data/constancias.json'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-constancias',
  imports: [FontAwesomeModule],
  templateUrl: './constancias.html',
  styleUrl: './constancias.scss'
})
export class Constancias {
  private sanitizer = inject(DomSanitizer);

  data = {
    ...constanciasData,
    tramites: constanciasData.tramites.map((t: any) => ({ ...t, abierto: false }))
  };

  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoTramite = faFileSignature;
  iconoDescarga = faDownload;
  iconoLampara = faLightbulb;

  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleTramite(item: any): void {
    item.abierto = !item.abierto;
  }
}

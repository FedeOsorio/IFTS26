import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faHandHoldingDollar, faDownload, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import becasData from '../../../../../assets/data/becas.json'

@Component({
  selector: 'app-becas',
  imports: [FontAwesomeModule],
  templateUrl: './becas.html',
  styleUrl: './becas.scss'
})
export class Becas {

  private sanitizer = inject(DomSanitizer);

  data = {
    ...becasData,
    becas: becasData.becas.map((b: any) => ({ ...b, abierto: false }))
  };

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoBeca = faHandHoldingDollar;
  iconoDescarga = faDownload;
  iconoIntro = faGraduationCap;

  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleBeca(item: any): void {
    // Opcional: Cerrar los demás al abrir uno (Acordeón estricto)
    // this.data.becas.forEach(b => { if (b !== item) b.abierto = false; });
    item.abierto = !item.abierto;
  }
}

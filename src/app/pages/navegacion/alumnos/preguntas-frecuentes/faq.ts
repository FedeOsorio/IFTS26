import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import faqData from '../../../../../assets/data/faq.json'

@Component({
  selector: 'app-faq',
  imports: [FontAwesomeModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  private sanitizer = inject(DomSanitizer);

  // Mapeamos para el estado 'abierto'
  data = {
    ...faqData,
    items: faqData.items.map((i: any) => ({ ...i, abierto: false }))
  };

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoPregunta = faCircleQuestion;

  renderMarkdown(text: string): SafeHtml {
    if (!text) return '';
    const html = marked.parse(text, { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleItem(item: any): void {
    // Si querés que se cierre el anterior al abrir uno nuevo:
    // this.data.items.forEach(i => { if (i !== item) i.abierto = false; });
    item.abierto = !item.abierto;
  }
}

import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { faChalkboardTeacher, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import tutoriasData from '../../../../../assets/data/tutorias.json'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { marked } from 'marked';

@Component({
  selector: 'app-tutoria',
  imports: [FontAwesomeModule],
  templateUrl: './tutoria.html',
  styleUrl: './tutoria.scss'
})
export class Tutoria {
  private sanitizer = inject(DomSanitizer);

  data = tutoriasData;

  // Íconos
  iconoTutor = faChalkboardTeacher;
  iconoEmail = faEnvelope;

  renderMarkdown(markdownString: string): SafeHtml {
    if (!markdownString) return this.sanitizer.bypassSecurityTrustHtml('');

    // CAMBIO AQUÍ: Agregamos {async: false} y 'as string'
    const html = marked.parse(markdownString, { async: false }) as string;

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

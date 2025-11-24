import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { faChalkboardTeacher, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import tutoriasData from '../../../../../assets/data/tutorias.json'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

  // Función para sanitizar el Markdown (asumimos que el CMS lo convierte a HTML)
  getSafeHtml(html: string): SafeHtml {
    // Si el CMS devuelve HTML limpio, lo sanitizamos para permitir su renderizado
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

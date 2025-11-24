import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importante
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

import dataPreInscripcion from '../../../../assets/data/pre-inscripcion.json';

@Component({
  selector: 'app-pre-inscripcion',
  imports: [FontAwesomeModule, PageBannerComponent],
  templateUrl: './pre-inscripcion.html',
  styleUrl: './pre-inscripcion.scss'
})
export class PreInscripcion {
  private sanitizer = inject(DomSanitizer);

  // Asignamos los datos
  data = dataPreInscripcion;

  // Íconos
  iconoCalendario = faCalendarCheck;
  iconoUbicacion = faLocationDot;

  // Función para limpiar la URL del video/presentación
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

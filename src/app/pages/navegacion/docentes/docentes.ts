import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faExternalLinkAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import docentesData from '../../../../assets/data/docentes.json';

@Component({
  selector: 'app-docentes',
  imports: [FontAwesomeModule],
  templateUrl: './docentes.html',
  styleUrl: './docentes.scss'
})
export class Docentes {

  private sanitizer = inject(DomSanitizer);

  data = {
    ...docentesData,
    secciones: docentesData.secciones.map(s => ({ ...s, abierto: false }))
  };

  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoLink = faExternalLinkAlt;
  iconoPdf = faFilePdf;

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleSeccion(item: any): void {
    item.abierto = !item.abierto;
  }
}
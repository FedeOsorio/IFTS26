import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { faChevronDown, faChevronUp, faDownload, faRoute } from '@fortawesome/free-solid-svg-icons';
import planosData from '../../../../../assets/data/plano-evacuacion.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-evacuacion',
  imports: [FontAwesomeModule],
  templateUrl: './evacuacion.html',
  styleUrl: './evacuacion.scss'
})
export class Evacuacion {

  private sanitizer = inject(DomSanitizer);

  data = {
    ...planosData,
    documentos: planosData.documentos.map(doc => ({ ...doc, abierto: false }))
  };

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoDescarga = faDownload;
  iconoRuta = faRoute; // <--- Usamos este ícono

  // Función para sanitizar la URL del PDF y permitir su uso en iframe
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Toggle del acordeón (misma lógica: cierra los demás)
  toggleDocumento(doc: any): void {
    this.data.documentos.forEach(d => {
      if (d !== doc) {
        d.abierto = false;
      }
    });
    doc.abierto = !doc.abierto;
  }
}

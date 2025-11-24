import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp, faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import reglamentoData from '../../../../../assets/data/reglamento-organico.json'

@Component({
  selector: 'app-reglamento-organico',
  imports: [FontAwesomeModule],
  templateUrl: './reglamento-organico.html',
  styleUrl: './reglamento-organico.scss'
})
export class ReglamentoOrganico {

  private sanitizer = inject(DomSanitizer);

  // Mapeamos los datos y agregamos la propiedad 'abierto' para los acordeones
  data = {
    ...reglamentoData,
    documentos: reglamentoData.documentos.map(doc => ({ ...doc, abierto: false }))
  };

  // Íconos
  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  iconoPdf = faFilePdf;
  iconoDescarga = faDownload;

  // Función para sanitizar la URL del PDF y permitir su uso en iframe
  getSafeUrl(url: string): SafeResourceUrl {
    // Usamos bypassSecurityTrustResourceUrl para permitir la carga del PDF
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // Toggle del acordeón
  toggleDocumento(doc: any): void {
    // Cerramos los demás documentos y abrimos el seleccionado
    this.data.documentos.forEach(d => {
      if (d !== doc) {
        d.abierto = false;
      }
    });
    doc.abierto = !doc.abierto;
  }
}

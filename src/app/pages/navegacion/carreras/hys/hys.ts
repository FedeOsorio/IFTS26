import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core'; // Importar OnInit e inject
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importar tipos de seguridad
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faChevronDown, 
  faChevronUp, 
  faUserGraduate, 
  faClock, 
  faClipboardList, 
  faHelmetSafety 
} from '@fortawesome/free-solid-svg-icons';
import datosHigiene from '../../../../../assets/data/higiene-seguridad.json';

interface SeccionExpandible {
  titulo: string;
  tipo?: string;
  imagenSrc?: string;
  pdfSrc?: string;
  contenidoTexto?: string;
  abierto: boolean;
  icono: any;
  porqueEstudiar?: string;
  pdfSeguro?: SafeResourceUrl; 
}

@Component({
  selector: 'app-hys',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hys.html',
  styleUrl: './hys.scss'
})
export class Hys implements OnInit {
  
  private sanitizer = inject(DomSanitizer);

  iconoExpandir = faChevronDown;
  iconoContraer = faChevronUp;
  
  // Datos del JSON
  tituloPrincipal: string = datosHigiene.titulo;
  imagenIntro: string = datosHigiene.imgIntro;
  descripcionIntro: string = datosHigiene.descripcion;
  // Si tienes los campos nuevos en el JSON, agrégalos aquí
  porqueEstudiar: string | undefined = (datosHigiene as any).porqueEstudiar; 

  listaSecciones: SeccionExpandible[] = [];

  ngOnInit(): void {
    if (datosHigiene.secciones) {
      this.listaSecciones = datosHigiene.secciones.map((seccion: any) => ({
        ...seccion,
        abierto: seccion.abierto || false,
        icono: this.determinarIconoPorTitulo(seccion.titulo),
        // AQUI ESTA LA CLAVE: Sanitizamos la URL antes de renderizar
        pdfSeguro: seccion.pdfSrc ? this.sanitizer.bypassSecurityTrustResourceUrl(seccion.pdfSrc) : undefined
      }));
    }
  }

  toggleSeccion(seccion: SeccionExpandible): void {
    seccion.abierto = !seccion.abierto;
  }

  private determinarIconoPorTitulo(titulo: string): any {
    const tituloLower = titulo.toLowerCase();
    if (tituloLower.includes('plan')) return faClipboardList;
    if (tituloLower.includes('perfil') || tituloLower.includes('egresado')) return faUserGraduate;
    if (tituloLower.includes('horario')) return faClock;
    return faHelmetSafety;
  }
}
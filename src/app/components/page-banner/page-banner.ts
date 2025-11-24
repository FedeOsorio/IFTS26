/**
 * Componente PageBanner - Banner reutilizable para páginas internas
 * 
 * Desarrollé este componente para estandarizar el diseño de los banners en todas
 * las páginas del sitio. Implementa un diseño hero con imagen de fondo, título
 * y subtítulo personalizables.
 * 
 * Características:
 * - Imagen de fondo configurable
 * - Título y subtítulo dinámicos
 * - Altura ajustable
 * - Overlay oscuro para mejorar legibilidad del texto
 * - Responsive design
 * 
 * Uso típico:
 * ```html
 * <app-page-banner
 *   [title]="'Mi Página'"
 *   [subtitle]="'Descripción de la página'"
 *   [backgroundImage]="'/assets/img/mi-banner.jpg'"
 *   [height]="'500px'">
 * </app-page-banner>
 * ```
 * 
 * @author Marcos - IFTS N°26
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './page-banner.html',
    styleUrls: ['./page-banner.scss']
})
export class PageBannerComponent {
    /**
     * Inputs: propiedades configurables del componente
     * 
     * @Input permite recibir valores desde el componente padre.
     * Definí valores por defecto para que el componente funcione
     * incluso si no se pasan todos los parámetros.
     */
    
    /** URL de la imagen de fondo del banner */
    @Input() backgroundImage: string = '/assets/img/banner.jpg';
    
    /** Título principal que se muestra en el banner */
    @Input() title: string = '';
    
    /** Subtítulo o descripción breve debajo del título */
    @Input() subtitle: string = '';
    
    /** Altura del banner (puede especificarse en px, vh, etc.) */
    @Input() height: string = '400px';
}

// Componente Banner Hero reutilizable para todas las páginas
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
    @Input() backgroundImage: string = '/assets/img/banner.jpg';
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() height: string = '400px'; // Altura del banner
}

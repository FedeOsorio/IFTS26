// Componente Footer del sitio IFTS26.
// Muestro información de contacto, redes sociales y ubicación del instituto.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  // Datos de contacto del instituto
  contactInfo = {
    name: 'Instituto de Formación Técnica Superior N°26',
    address: 'Av. Córdoba 3030',
    postalCode: 'C1187AAP - Ciudad Autónoma de Buenos Aires',
    phones: '4961-4644 / 4962-1716',
    email: 'ifts26@bue.edu.ar',
    facebook: 'https://www.facebook.com/ifts26',
    instagram: 'https://www.instagram.com/ifts26'
  };

  currentYear = new Date().getFullYear();
}

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
    address: 'Av. Córdoba 3030',
    postalCode: 'C1187AAP - Ciudad Autónoma de Buenos Aires',
    phones: '4961-4644 / 4962-1716',
    schedule: 'Horario de atención al público: 18:30 a 21:00 hs',
    facebook: 'https://www.facebook.com/ifts26',
    instagram: 'https://www.instagram.com/ifts26'
  };

  careers = [
    {
      name: 'Gestión Integral de Riesgo',
      email: 'tecnicaturagir@yahoo.com',
      label: 'Gestión Integral de Riesgo:'
    },
    {
      name: 'Higiene y Seguridad en el Trabajo',
      email: 'tecnicaturaenseguridadhigiene@yahoo.com.ar',
      label: 'Higiene y Seguridad en el Trabajo:'
    }
  ];

  currentYear = new Date().getFullYear();
}

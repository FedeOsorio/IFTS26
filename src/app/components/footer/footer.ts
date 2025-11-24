/**
 * Componente Footer - Pie de página del sitio
 * 
 * Desarrollé este componente para mostrar toda la información de contacto del
 * instituto de manera organizada y accesible en todas las páginas. Incluye:
 * - Dirección física y horarios de atención
 * - Teléfonos de contacto
 * - Enlaces a redes sociales (Facebook e Instagram)
 * - Emails específicos de cada carrera
 * - Copyright dinámico con el año actual
 * 
 * @author Marcos - IFTS N°26
 */

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
  /**
   * Información general de contacto del instituto
   * Estos datos se muestran en la sección principal del footer
   */
  contactInfo = {
    address: 'Estados Unidos 3141',
    postalCode: 'C1228ABC - Ciudad Autónoma de Buenos Aires',
    phones: '4931-9843 / 4932-6210',
    schedule: 'Horario de atención al público: 18:30 a 21:00 hs',
    facebook: 'https://www.facebook.com/ifts26',
    instagram: 'https://www.instagram.com/ifts_26/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExUmxScXptb212ZWVPMkpqYXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7RdEPGQxQeTuC8xcBxP-q7Wsv2R3JMhKIfjztQ67UnJ3Q9wmqCHeQJ6T82mw_aem_2hg7OXtXB7wwn3QsBl_1Ig'
  };

  /**
   * Información específica de cada carrera
   * Cada carrera tiene su propio email de contacto para consultas académicas
   */
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

  /**
   * Año actual para el copyright
   * Utilizo new Date().getFullYear() para que se actualice automáticamente cada año
   */
  currentYear = new Date().getFullYear();
}

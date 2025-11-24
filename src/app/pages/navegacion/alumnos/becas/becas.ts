import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface Beca {
  nombre: string;
  descripcion: string;
  icono: string;
  requisitos: string[];
  enlace?: string;
}

@Component({
  selector: 'app-becas',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './becas.html',
  styleUrl: './becas.scss'
})
export class Becas {
  // Banner de Progresar
  progresarBanner: string = '/assets/img/progresar.jpg';
  
  // Información general
  infoGeneral: string = 'El IFTS N°26 te acompaña en tu trayectoria académica brindando información sobre las becas y programas de ayuda económica disponibles para estudiantes de nivel superior.';

  // Programas de becas
  becasDisponibles: Beca[] = [
    {
      nombre: 'Programa Progresar',
      descripcion: 'Beca nacional destinada a jóvenes de 18 a 24 años que estudian en instituciones de nivel superior. Apoya económicamente para que puedas continuar y finalizar tus estudios.',
      icono: 'bi-mortarboard-fill',
      requisitos: [
        'Tener entre 18 y 24 años',
        'Ser argentino/a nativo/a, naturalizado/a o residente con al menos 5 años de residencia en el país',
        'Estar inscripto y cursando en una carrera de nivel superior',
        'No tener otro título de nivel superior',
        'Cumplir con el criterio de ingresos del grupo familiar'
      ],
      enlace: 'https://www.argentina.gob.ar/educacion/progresar'
    },
    {
      nombre: 'Becas Jurisdiccionales CABA',
      descripcion: 'Programa de becas otorgadas por el Gobierno de la Ciudad de Buenos Aires para estudiantes de nivel superior de instituciones públicas y privadas.',
      icono: 'bi-building',
      requisitos: [
        'Ser residente de la Ciudad Autónoma de Buenos Aires',
        'Estar cursando en una institución de nivel superior reconocida',
        'Acreditar condición de alumno regular',
        'Cumplir con los requisitos socioeconómicos establecidos'
      ]
    },
    {
      nombre: 'Becas del Instituto',
      descripcion: 'El IFTS N°26 cuenta con un fondo de becas institucionales para casos especiales y situaciones de vulnerabilidad socioeconómica de estudiantes.',
      icono: 'bi-bank',
      requisitos: [
        'Ser alumno regular del IFTS N°26',
        'Presentar nota solicitando la beca',
        'Adjuntar documentación que acredite la situación socioeconómica',
        'Mantener regularidad en la cursada'
      ]
    }
  ];

  // Contacto para consultas
  contactoBecas: string = 'Para más información sobre becas, comunicate con Bedelía o la Tutoría Institucional.';
}

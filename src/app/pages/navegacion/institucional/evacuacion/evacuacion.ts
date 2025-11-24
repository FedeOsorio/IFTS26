import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface Instruccion {
  numero: number;
  titulo: string;
  descripcion: string;
}

interface ContactoEmergencia {
  icono: string;
  titulo: string;
  numero: string;
}

@Component({
  selector: 'app-evacuacion',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './evacuacion.html',
  styleUrl: './evacuacion.scss'
})
export class Evacuacion {
  instrucciones: Instruccion[] = [
    {
      numero: 1,
      titulo: 'Mantené la Calma',
      descripcion: 'Evitá correr y no grites. Mantené la calma para facilitar la evacuación ordenada.'
    },
    {
      numero: 2,
      titulo: 'Seguí las Señales',
      descripcion: 'Dirigite hacia las salidas de emergencia siguiendo las señalizaciones verdes.'
    },
    {
      numero: 3,
      titulo: 'No Uses Ascensores',
      descripcion: 'Utilizá únicamente las escaleras para evacuar el edificio.'
    },
    {
      numero: 4,
      titulo: 'Ayudá a Otros',
      descripcion: 'Si es posible, asistí a personas con movilidad reducida o que necesiten ayuda.'
    },
    {
      numero: 5,
      titulo: 'Dirigite al Punto de Encuentro',
      descripcion: 'Una vez fuera, dirigite al punto de encuentro establecido en la vereda opuesta.'
    },
    {
      numero: 6,
      titulo: 'No Regreses',
      descripcion: 'No regreses al edificio hasta que el personal autorizado lo indique.'
    }
  ];

  contactosEmergencia: ContactoEmergencia[] = [
    { icono: 'bi-telephone-fill', titulo: 'Emergencias', numero: '911' },
    { icono: 'bi-fire', titulo: 'Bomberos', numero: '100' },
    { icono: 'bi-hospital', titulo: 'SAME', numero: '107' },
    { icono: 'bi-shield-fill-check', titulo: 'Defensa Civil', numero: '103' }
  ];

  planoImageUrl = '/assets/img/plano.jpg';
}

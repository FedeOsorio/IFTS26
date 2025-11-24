/**
 * Componente Evacuacion - Protocolo de evacuación y emergencias
 * 
 * Desarrollé esta página para informar a toda la comunidad educativa sobre
 * los procedimientos de seguridad en caso de emergencia. Es fundamental que
 * estudiantes, docentes y personal conozcan cómo actuar ante situaciones
 * de riesgo (incendio, sismo, amenaza, etc.).
 * 
 * Información incluida:
 * - Instrucciones paso a paso de evacuación
 * - Teléfonos de emergencia (911, bomberos, SAME, Defensa Civil)
 * - Plano de evacuación del edificio
 * - Ubicación de salidas de emergencia
 * - Punto de encuentro exterior
 * 
 * La seguridad es prioritaria y esta información puede salvar vidas.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define una instrucción del protocolo de evacuación
 * 
 * @property numero - Número de orden de la instrucción
 * @property titulo - Acción principal de la instrucción
 * @property descripcion - Explicación detallada de qué hacer
 */
interface Instruccion {
  numero: number;
  titulo: string;
  descripcion: string;
}

/**
 * Interfaz que define un contacto de emergencia
 * 
 * @property icono - Clase CSS del icono Bootstrap Icons
 * @property titulo - Nombre del servicio de emergencia
 * @property numero - Teléfono de contacto
 */
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
  /**
   * Instrucciones del protocolo de evacuación
   * 
   * Estructuré las instrucciones en orden secuencial para que en una
   * emergencia las personas sepan exactamente qué hacer en cada paso.
   * La claridad y el orden son cruciales en situaciones de estrés.
   */
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

  /**
   * Teléfonos de emergencia importantes
   * 
   * Listo los números de emergencia que deben estar siempre accesibles:
   * servicios de urgencia, bomberos, asistencia médica y defensa civil.
   */
  contactosEmergencia: ContactoEmergencia[] = [
    { icono: 'bi-telephone-fill', titulo: 'Emergencias', numero: '911' },
    { icono: 'bi-fire', titulo: 'Bomberos', numero: '100' },
    { icono: 'bi-hospital', titulo: 'SAME', numero: '107' },
    { icono: 'bi-shield-fill-check', titulo: 'Defensa Civil', numero: '103' }
  ];

  /**
   * Imagen del plano de evacuación del edificio
   * 
   * Muestro el plano oficial con las salidas de emergencia, rutas de
   * evacuación y punto de encuentro para que todos conozcan las vías
   * de escape desde cualquier sector del instituto.
   */
  planoImageUrl = '/assets/img/plano.jpg';
}

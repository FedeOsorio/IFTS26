/**
 * Componente raíz de la aplicación
 * 
 * Desarrollé este componente como el contenedor principal que se mantiene presente
 * en todas las páginas del sitio. Contiene el header, el footer y un RouterOutlet
 * que funciona como un "espacio reservado" donde Angular renderiza las diferentes
 * páginas según la ruta activa.
 * 
 * La estructura visual general que implementé es:
 * - Header (navegación superior)
 * - RouterOutlet (contenido dinámico de cada página)
 * - Footer (pie de página con información de contacto)
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}

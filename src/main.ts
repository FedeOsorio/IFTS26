/**
 * Punto de entrada principal de la aplicación Angular
 * 
 * Este archivo es el primero que se ejecuta cuando el navegador carga la aplicación.
 * Implementé la inicialización de la aplicación utilizando el método standalone 
 * (sin módulos tradicionales de Angular), lo cual simplifica la arquitectura y 
 * mejora el rendimiento inicial.
 * 
 * @author Marcos - IFTS N°26
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Inicio la aplicación con el componente raíz y la configuración definida
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

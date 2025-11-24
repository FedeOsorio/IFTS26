/**
 * Configuración global de la aplicación Angular
 * 
 * Implementé aquí todos los servicios y configuraciones que necesita la aplicación
 * para funcionar correctamente. Angular utiliza este objeto durante el arranque
 * inicial en main.ts.
 * 
 * Configuraciones que incluí:
 * - Manejo global de errores del navegador
 * - Detección de cambios optimizada (eventCoalescing mejora performance)
 * - Sistema de ruteo con scroll automático al cambiar de página
 * - Hidratación del cliente para mejorar la carga inicial (SSR ready)
 * - Animaciones cargadas de forma asíncrona
 * - Cliente HTTP con Fetch API moderna
 * 
 * @author Marcos - IFTS N°26
 */

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Capturo errores globales del navegador para mejor debugging
    provideBrowserGlobalErrorListeners(),
    
    // Optimizo la detección de cambios agrupando eventos
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    // Configuro el sistema de rutas con scroll automático hacia arriba al cambiar página
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    
    // Habilito hidratación para mejor rendimiento en carga inicial
    provideClientHydration(withEventReplay()),
    
    // Cargo animaciones de forma asíncrona para reducir el bundle inicial
    provideAnimationsAsync(),
    
    // Configuro cliente HTTP con la API Fetch moderna del navegador
    provideHttpClient(withFetch())
  ]
};

/**
 * Componente CalendarioAcademico - Calendario de eventos académicos del ciclo lectivo
 * 
 * Desarrollé esta página para mostrar las fechas importantes del año académico
 * organizadas por cuatrimestre. Los datos se cargan dinámicamente desde un
 * archivo JSON externo mediante HttpClient.
 * 
 * Eventos incluidos:
 * - Inicio y fin de cuatrimestre
 * - Mesas de examen
 * - Recesos y feriados
 * - Inscripciones a materias
 * - Fechas administrativas importantes
 * 
 * Utilizo HttpClient en lugar de import directo para demostrar carga
 * asíncrona de datos, lo cual es útil si en el futuro se migra a una API.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define un evento del calendario académico
 * 
 * @property titulo - Nombre del evento
 * @property descripcion - Detalle del evento
 * @property fecha - Fecha o período del evento
 */
export interface EventoCalendario {
  titulo: string;
  descripcion: string;
  fecha: string;
}

/**
 * Interfaz que define la estructura completa del calendario
 * 
 * @property primerCuatrimestre - Eventos del primer cuatrimestre
 * @property segundoCuatrimestre - Eventos del segundo cuatrimestre
 */
export interface CalendarioData {
  primerCuatrimestre: EventoCalendario[];
  segundoCuatrimestre: EventoCalendario[];
}

@Component({
  selector: 'app-calendario-academico',
  imports: [CommonModule, FontAwesomeModule, PageBannerComponent],
  templateUrl: './calendario-academico.html',
  styleUrl: './calendario-academico.scss'
})
export class CalendarioAcademico {
  /** Icono de FontAwesome para representar calendario */
  iconoCalendario = faCalendarDays;

  /** Inyecto HttpClient para cargar datos desde JSON */
  private http = inject(HttpClient);

  /** Arrays de eventos por cuatrimestre */
  primerCuatrimestre: EventoCalendario[] = [];
  segundoCuatrimestre: EventoCalendario[] = [];

  /** Ruta al archivo JSON con datos del calendario */
  private dataUrl = 'assets/data/calendario.json';

  constructor() { }

  /**
   * Hook de inicialización - Carga datos del calendario
   * 
   * Al inicializar el componente, cargo los eventos del calendario desde
   * el archivo JSON usando HttpClient. Esto permite actualizar fechas sin
   * recompilar la aplicación.
   */
  ngOnInit(): void {
    this.http.get<CalendarioData>(this.dataUrl).subscribe(data => {
      this.primerCuatrimestre = data.primerCuatrimestre;
      this.segundoCuatrimestre = data.segundoCuatrimestre;
    });
  }
}

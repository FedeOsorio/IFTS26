import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export interface EventoCalendario {
  titulo: string;
  descripcion: string;
  fecha: string;
}

export interface CalendarioData {
  primerCuatrimestre: EventoCalendario[];
  segundoCuatrimestre: EventoCalendario[];
}

@Component({
  selector: 'app-calendario-academico',
  imports: [FontAwesomeModule],
  templateUrl: './calendario-academico.html',
  styleUrl: './calendario-academico.scss'
})
export class CalendarioAcademico {
  iconoCalendario = faCalendarDays;

  private http = inject(HttpClient);

  primerCuatrimestre: EventoCalendario[] = [];
  segundoCuatrimestre: EventoCalendario[] = [];

  private dataUrl = 'assets/data/calendario.json';

  constructor() { }

  ngOnInit(): void {
    this.http.get<CalendarioData>(this.dataUrl).subscribe(data => {
      this.primerCuatrimestre = data.primerCuatrimestre;
      this.segundoCuatrimestre = data.segundoCuatrimestre;
    });
  }
}

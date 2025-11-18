import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import autoridadesData from '../../../../../assets/data/autoridades.json';
import { CommonModule } from '@angular/common';


export interface Autoridad {
  cargo: string;
  nombres: string[];
}

@Component({
  selector: 'app-autoridades',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './autoridades.html',
  styleUrl: './autoridades.scss'
})
export class Autoridades {
  iconoAutoridad = faUserTie;

  // Datos del JSON
  autoridades: Autoridad[] = autoridadesData;
}

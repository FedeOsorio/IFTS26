import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faFileDownload, faCalendar, faShareFromSquare, faGraduationCap, faArrowRightToBracket, faCircleInfo, faTriangleExclamation, faFileLines, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-accesos',
  imports: [CommonModule, FontAwesomeModule, PageBannerComponent],
  templateUrl: './accesos.html',
  styleUrl: './accesos.scss'
})
export class Accesos {
  faqs: FaqItem[] = [
    {
      id: 1,
      question: '¿Olvidé mi contraseña, qué hago?',
      answer: 'Podés recuperarla desde el link "Olvidé mi contraseña" en la página de ingreso, o acercarte personalmente a secretaría con tu DNI para que te la restablezcan.',
      open: false
    },
    {
      id: 2,
      question: '¿Hasta cuándo puedo inscribirme a materias?',
      answer: 'La inscripción tiene fechas específicas que se publican en el calendario académico. Generalmente es durante las dos primeras semanas antes del inicio del cuatrimestre.',
      open: false
    },
    {
      id: 3,
      question: 'No puedo inscribirme a una materia, ¿por qué?',
      answer: 'Puede ser por varias razones: no cumplís con las correlatividades requeridas, la materia alcanzó el cupo máximo, o hay conflictos de horario con otras materias.',
      open: false
    },
    {
      id: 4,
      question: '¿Cómo descargo mi certificado de alumno regular?',
      answer: 'Ingresá a SIU Guaraní, andá a la sección "Certificados" y seleccioná "Certificado de Alumno Regular". El sistema generará un PDF que podés descargar e imprimir.',
      open: false
    }
  ];

  iconoSiu = faArrowRightToBracket;
  iconoMoodle = faGraduationCap;
  iconoInfo = faCircleInfo;
  iconoAlerta = faTriangleExclamation;
  iconoDoc = faFileLines;
  iconoTip = faLightbulb;
  iconoTarget = faShareFromSquare;
  iconoCalendar = faCalendar;
  iconoDownload = faFileDownload;

  constructor() { }

  toggleFaq(selectedFaq: FaqItem): void {
    selectedFaq.open = !selectedFaq.open;
  }
}

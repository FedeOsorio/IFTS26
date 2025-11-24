/**
 * Componente para la página de Accesos al Sistema
 * 
 * Proporciona información y acceso a los sistemas principales del instituto:
 * - SIU Guaraní (gestión académica)
 * - Moodle (plataforma educativa)
 * - Tutoriales paso a paso
 * - Sección de ayuda y contacto
 * - Preguntas frecuentes (FAQ)
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faFileDownload, faCalendar, faShareFromSquare, faGraduationCap, faArrowRightToBracket, faCircleInfo, faTriangleExclamation, faFileLines, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

/**
 * Interfaz para los elementos del FAQ (Preguntas Frecuentes)
 */
interface FaqItem {
  id: number;         // Identificador único
  question: string;   // Pregunta a mostrar
  answer: string;     // Respuesta con el texto explicativo
  open: boolean;      // Estado de apertura del accordion
}

@Component({
  selector: 'app-accesos',
  imports: [CommonModule, FontAwesomeModule, PageBannerComponent],
  templateUrl: './accesos.html',
  styleUrl: './accesos.scss'
})
export class Accesos {
  // Lista de preguntas frecuentes sobre los sistemas
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

  // Iconos utilizados en el componente
  iconoSiu = faArrowRightToBracket;      // Ícono para acceso SIU Guaraní
  iconoMoodle = faGraduationCap;         // Ícono para acceso Moodle
  iconoInfo = faCircleInfo;              // Ícono informativo
  iconoAlerta = faTriangleExclamation;   // Ícono de alerta
  iconoDoc = faFileLines;                // Ícono de documento
  iconoTip = faLightbulb;                // Ícono de sugerencia
  iconoTarget = faShareFromSquare;       // Ícono de redirección
  iconoCalendar = faCalendar;            // Ícono de calendario
  iconoDownload = faFileDownload;        // Ícono de descarga

  constructor() { }

  /**
   * Alterna el estado de apertura de una pregunta frecuente
   * 
   * Método que controla el acordeón del FAQ: cierra todas las preguntas
   * excepto la seleccionada, proporcionando una experiencia de usuario
   * limpia donde solo una pregunta está expandida a la vez.
   * 
   * @param selectedFaq - El ítem del FAQ a expandir o contraer
   */
  toggleFaq(selectedFaq: FaqItem): void {
    selectedFaq.open = !selectedFaq.open;
  }
}

/**
 * Componente Preguntas - Preguntas Frecuentes (FAQ)
 * 
 * Desarrollé esta página tipo FAQ (Frequently Asked Questions) para responder
 * las consultas más comunes de estudiantes y aspirantes. Implementé un sistema
 * de acordeón interactivo para organizar las preguntas y respuestas.
 * 
 * Categorías de preguntas incluidas:
 * - Inscripción y requisitos de ingreso
 * - Horarios y duración de carreras
 * - Sistema de cursada y evaluación
 * - Acceso a sistemas (SIU, Moodle)
 * - Trámites administrativos
 * - Salida laboral y continuidad de estudios
 * - Ubicación y contacto
 * 
 * El componente usa FontAwesome para iconos de expansión/colapso y
 * permite al usuario abrir/cerrar cada pregunta individualmente.
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

/**
 * Interfaz que define una pregunta frecuente
 * 
 * @property pregunta - Texto de la pregunta
 * @property respuesta - Texto de la respuesta
 * @property abierta - Estado del acordeón (expandido/colapsado)
 */
interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
  abierta: boolean;
}

@Component({
  selector: 'app-preguntas',
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.scss'
})
export class Preguntas {
  /** Iconos de FontAwesome para controles del acordeón */
  iconoAbajo = faChevronDown;   // Flecha hacia abajo (pregunta cerrada)
  iconoArriba = faChevronUp;    // Flecha hacia arriba (pregunta abierta)

  /**
   * Array de preguntas frecuentes con sus respuestas
   * 
   * Compilé las preguntas más habituales que recibimos en Bedelía, por mail
   * y en redes sociales. Las respuestas son claras y completas para que los
   * estudiantes puedan resolver sus dudas sin necesidad de consultar presencialmente.
   * 
   * Todas las preguntas inician con abierta: false para un mejor rendimiento inicial.
   */
  preguntas: PreguntaFrecuente[] = [
    {
      pregunta: '¿Cuándo son las inscripciones?',
      respuesta: 'Las inscripciones se realizan durante los meses de noviembre y diciembre para el ciclo lectivo siguiente. Te recomendamos estar atento/a a las redes sociales y la página web para conocer las fechas exactas.',
      abierta: false
    },
    {
      pregunta: '¿Cuáles son los requisitos para inscribirme?',
      respuesta: 'Debes tener título secundario completo (bachiller, comercial, técnico, etc.). Al momento de la inscripción debes presentar: DNI original, fotocopia del DNI (1era y 2da hoja), fotocopia del título secundario (legalizada o con sello de la escuela), 2 fotos 4x4.',
      abierta: false
    },
    {
      pregunta: '¿Hay examen de ingreso?',
      respuesta: 'No, el ingreso es directo. No hay examen de admisión. Solo debes cumplir con los requisitos de documentación y realizar la inscripción en las fechas establecidas.',
      abierta: false
    },
    {
      pregunta: '¿Cuánto dura la carrera?',
      respuesta: 'Ambas tecnicaturas (GIR y HyS) tienen una duración de 3 años, distribuidos en 6 cuatrimestres. La carga horaria es de aproximadamente 20 horas semanales.',
      abierta: false
    },
    {
      pregunta: '¿Cuál es el horario de cursada?',
      respuesta: 'La cursada se realiza en turno tarde-noche, generalmente de 18:00 a 22:00 hs. Los horarios específicos de cada materia pueden variar según el cuatrimestre. Podés consultarlos en la sección "Horarios" de nuestra web.',
      abierta: false
    },
    {
      pregunta: '¿La carrera es gratuita?',
      respuesta: 'Sí, la carrera es completamente gratuita. Es de gestión pública y depende del Gobierno de la Ciudad de Buenos Aires. Existe una cooperadora voluntaria que colabora con mejoras para el instituto.',
      abierta: false
    },
    {
      pregunta: '¿Qué diferencia hay entre GIR y HyS?',
      respuesta: 'La Tecnicatura en Gestión Integral del Riesgo (GIR) se enfoca en la prevención y gestión de emergencias, desastres naturales y antrópicos. La Tecnicatura en Higiene y Seguridad (HyS) se centra en la seguridad laboral, prevención de accidentes de trabajo y enfermedades profesionales. Ambas tienen alta salida laboral.',
      abierta: false
    },
    {
      pregunta: '¿Puedo trabajar y estudiar al mismo tiempo?',
      respuesta: 'Sí, la cursada está diseñada en horario tarde-noche justamente para que puedas trabajar durante el día. Muchos de nuestros estudiantes trabajan y estudian simultáneamente.',
      abierta: false
    },
    {
      pregunta: '¿Qué salida laboral tienen las carreras?',
      respuesta: 'Ambas tecnicaturas tienen muy buena salida laboral. Podés trabajar en empresas privadas, organismos públicos, consultoras, aseguradoras, hospitales, industrias, construcción, entre otros. Muchos egresados consiguen empleo incluso antes de finalizar la carrera.',
      abierta: false
    },
    {
      pregunta: '¿Puedo hacer equivalencias de materias?',
      respuesta: 'Sí, si cursaste materias en otras instituciones o carreras afines, podés solicitar equivalencias. Debes presentar los programas y certificados analíticos en la secretaría del instituto para que sean evaluados.',
      abierta: false
    },
    {
      pregunta: '¿Cómo accedo al SIU Guaraní?',
      respuesta: 'Ingresá a https://guarani-autogestionagencia.bue.edu.ar/ con tu número de DNI como usuario y la contraseña que te asignen al inscribirte. Si tenés problemas, consultá la sección "Accesos" en nuestra web.',
      abierta: false
    },
    {
      pregunta: '¿Qué es el aula virtual (Moodle)?',
      respuesta: 'Es la plataforma educativa donde los docentes suben material de estudio, tareas y comunicados. Ingresá en https://aulasvirtuales.bue.edu.ar/login/index.php con tus credenciales. Es muy importante que revises regularmente el aula virtual.',
      abierta: false
    },
    {
      pregunta: '¿Cuándo son las mesas de examen?',
      respuesta: 'Hay 3 turnos de examen por año: febrero-marzo (verano), julio (invierno) y noviembre-diciembre (especial). Las fechas específicas se publican en el SIU Guaraní y en la cartelera del instituto.',
      abierta: false
    },
    {
      pregunta: '¿Cómo me inscribo a un examen?',
      respuesta: 'Las inscripciones a mesas de examen se realizan únicamente a través del SIU Guaraní. Tenés que estar atento/a a las fechas de inscripción porque son acotadas (generalmente 10-15 días antes del examen).',
      abierta: false
    },
    {
      pregunta: '¿Cuántas veces puedo rendir una materia?',
      respuesta: 'Podés rendir cada materia hasta 3 veces en condición de regular. Si perdés la regularidad, podés rendirla libre pero el examen es más extenso. Consultá el régimen académico para más detalles.',
      abierta: false
    },
    {
      pregunta: '¿Qué pasa si pierdo la regularidad?',
      respuesta: 'Perdés la regularidad si no cumplís con el 75% de asistencia o no aprobás los trabajos prácticos. En ese caso, podés rendir la materia libre, pero el examen incluye toda la materia (teórico y práctico).',
      abierta: false
    },
    {
      pregunta: '¿Dónde está ubicado el instituto?',
      respuesta: 'Estamos en Av. Rivadavia 5637, Caballito, CABA. Muy cerca de la estación Primera Junta del subte A. También pasan varias líneas de colectivos por Rivadavia.',
      abierta: false
    },
    {
      pregunta: '¿Hay tutorías disponibles?',
      respuesta: 'Sí, contamos con el programa de tutorías para ayudarte con dudas académicas, orientación en la cursada y acompañamiento durante tu trayecto educativo. Consultá horarios y modalidades en la sección "Tutorías" de la web.',
      abierta: false
    },
    {
      pregunta: '¿Necesito computadora propia?',
      respuesta: 'Si bien es recomendable tener computadora para hacer trabajos y acceder al aula virtual, el instituto cuenta con aulas de informática disponibles para los estudiantes.',
      abierta: false
    },
    {
      pregunta: '¿El título está reconocido oficialmente?',
      respuesta: 'Sí, ambas tecnicaturas están oficialmente reconocidas por el Ministerio de Educación de la Ciudad de Buenos Aires. Al egresar obtenés un título oficial de Técnico Superior.',
      abierta: false
    },
    {
      pregunta: '¿Puedo continuar estudiando después?',
      respuesta: 'Sí, una vez egresado/a podés hacer el Ciclo de Licenciatura en universidades que tengan convenio. También podés especializarte con cursos, posgrados y capacitaciones en seguridad e higiene.',
      abierta: false
    },
    {
      pregunta: '¿Cómo me contacto con el instituto?',
      respuesta: 'Podés escribir a tecnicaturagir@yahoo.com (GIR) o tecnicaturaenseguridadhigiene@yahoo.com.ar (HyS), llamar al (011) 4432-1893, o acercarte personalmente a Av. Rivadavia 5637 en horario de atención.',
      abierta: false
    }
  ];

  /**
   * Alterna el estado de apertura de una pregunta
   * 
   * Método que controla el acordeón: abre la pregunta si estaba cerrada
   * y la cierra si estaba abierta. Permite al usuario interactuar con
   * el FAQ de forma intuitiva.
   * 
   * @param index - Índice de la pregunta en el array
   */
  togglePregunta(index: number): void {
    this.preguntas[index].abierta = !this.preguntas[index].abierta;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface PasoInscripcion {
  numero: number;
  titulo: string;
  descripcion: string;
}

interface Requisito {
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-finales',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './finales.html',
  styleUrl: './finales.scss',
  standalone: true
})
export class Finales {
  // Información general
  descripcion: string = 'La inscripción a finales se realiza exclusivamente a través del sistema SIU Guaraní. Recordá que debés cumplir con todos los requisitos académicos y administrativos antes de inscribirte.';

  // Pasos para inscribirse
  pasos: PasoInscripcion[] = [
    {
      numero: 1,
      titulo: 'Ingresá a SIU Guaraní',
      descripcion: 'Accedé al sistema con tu usuario y contraseña. Verificá que tu estado académico esté actualizado y que no tengas deudas administrativas.'
    },
    {
      numero: 2,
      titulo: 'Seleccioná "Inscripción a Exámenes"',
      descripcion: 'En el menú principal del SIU, buscá la opción de inscripción a exámenes finales. El sistema mostrará las materias disponibles según tu situación académica.'
    },
    {
      numero: 3,
      titulo: 'Verificá las Correlatividades',
      descripcion: 'Asegurate de tener aprobadas todas las materias correlativas. El sistema no te permitirá inscribirte si no cumplís con este requisito.'
    },
    {
      numero: 4,
      titulo: 'Elegí Fecha y Tribunal',
      descripcion: 'Seleccioná la fecha del examen y el tribunal. Verificá que no tengas superposición de horarios con otros finales o cursadas.'
    },
    {
      numero: 5,
      titulo: 'Confirmá la Inscripción',
      descripcion: 'Revisá cuidadosamente los datos y confirmá tu inscripción. Una vez confirmada, recibirás un comprobante que podés descargar desde el sistema.'
    },
    {
      numero: 6,
      titulo: 'Presentate el Día del Examen',
      descripcion: 'Llegá 15 minutos antes con tu DNI original. Verificá el aula y horario en el sistema o en las carteleras del instituto.'
    }
  ];

  // Requisitos para rendir
  requisitos: Requisito[] = [
    {
      titulo: 'Materia Regularizada',
      descripcion: 'La materia debe estar en estado regular (cursada aprobada con porcentaje de asistencia mínimo).',
      icono: 'bi-check-circle'
    },
    {
      titulo: 'Correlatividades Aprobadas',
      descripcion: 'Todas las materias correlativas anteriores deben estar aprobadas con examen final.',
      icono: 'bi-diagram-3'
    },
    {
      titulo: 'Inscripción en SIU',
      descripcion: 'Debés estar inscripto en el sistema SIU Guaraní dentro de las fechas establecidas.',
      icono: 'bi-calendar-check'
    },
    {
      titulo: 'DNI Original',
      descripcion: 'Es obligatorio presentar DNI original el día del examen. No se aceptan copias ni fotos.',
      icono: 'bi-card-heading'
    },
    {
      titulo: 'Sin Deudas Administrativas',
      descripcion: 'No debés tener materiales adeudados (libros de biblioteca, equipamiento, etc.).',
      icono: 'bi-exclamation-triangle'
    }
  ];

  // Fechas importantes
  fechasImportantes: string[] = [
    'La inscripción abre 7 días antes de cada turno de examen',
    'La inscripción cierra 48 horas antes del primer examen del turno',
    'No hay inscripción condicional ni fuera de término',
    'Podés inscribirte en todas las materias que cumplas requisitos',
    'La baja de la inscripción debe realizarse hasta 48hs antes del examen'
  ];

  // Nota importante
  notaImportante: string = 'Si no te presentás a un examen sin justificar la ausencia, perdés la condición de regular en esa materia. Consultá el Reglamento Orgánico para más información sobre justificaciones.';

  // Enlace a SIU
  enlaceSIU: string = 'https://siu.ifts26.edu.ar';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

interface Publicacion {
  id: number;
  titulo: string;
  fecha: string;
  categoria: 'Institucional' | 'Académico' | 'Evento' | 'Inscripción';
  resumen: string;
  contenido: string;
  imagen?: string;
  destacada: boolean;
}

@Component({
  selector: 'app-publicaciones',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.scss',
  standalone: true
})
export class Publicaciones {
  // Descripción de la sección
  descripcion: string = 'Mantente informado sobre las últimas novedades del IFTS Nº26: eventos, inscripciones, actividades académicas y noticias institucionales.';

  // Publicaciones destacadas y recientes
  publicaciones: Publicacion[] = [
    {
      id: 1,
      titulo: 'Inicio del Ciclo Lectivo 2025',
      fecha: '2025-03-01',
      categoria: 'Académico',
      resumen: 'Te damos la bienvenida al ciclo lectivo 2025. Consultá los horarios y comenzá tu cursada.',
      contenido: 'El Instituto IFTS Nº26 da inicio al ciclo lectivo 2025. Los horarios de cursada están disponibles en SIU Guaraní y en las carteleras del instituto. Recordá verificar tu inscripción y asistir puntualmente a las clases.',
      imagen: '/assets/img/banner.jpg',
      destacada: true
    },
    {
      id: 2,
      titulo: 'Inscripción a Finales - Turno Julio',
      fecha: '2025-06-15',
      categoria: 'Inscripción',
      resumen: 'Abre la inscripción para el turno de exámenes finales de julio. No te olvides de inscribirte en SIU.',
      contenido: 'Se encuentra abierta la inscripción para el turno de exámenes finales de julio 2025. Recordá que la inscripción se realiza exclusivamente a través de SIU Guaraní y cierra 48hs antes del primer examen. Verificá tus correlatividades antes de inscribirte.',
      destacada: false
    },
    {
      id: 3,
      titulo: 'Charla Informativa sobre Becas Progresar',
      fecha: '2025-04-10',
      categoria: 'Evento',
      resumen: 'Te invitamos a la charla informativa sobre el programa Becas Progresar 2025.',
      contenido: 'El próximo miércoles 15 de abril a las 18:00hs se realizará una charla informativa sobre el programa Becas Progresar 2025. La charla será en el Aula Magna del instituto. Inscripción libre y gratuita.',
      destacada: false
    }
  ];

  // Filtros de categoría
  categorias: string[] = ['Todas', 'Institucional', 'Académico', 'Evento', 'Inscripción'];
  categoriaSeleccionada: string = 'Todas';

  // Método para filtrar publicaciones
  get publicacionesFiltradas(): Publicacion[] {
    if (this.categoriaSeleccionada === 'Todas') {
      return this.publicaciones;
    }
    return this.publicaciones.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  // Método para obtener publicaciones destacadas
  get publicacionesDestacadas(): Publicacion[] {
    return this.publicaciones.filter(p => p.destacada);
  }

  // Método para formatear fecha
  formatearFecha(fecha: string): string {
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const date = new Date(fecha);
    return `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`;
  }

  // Método para seleccionar categoría
  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }
}

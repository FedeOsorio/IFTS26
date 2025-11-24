/**
 * Componente Publicaciones - Sistema de novedades y noticias del instituto
 * 
 * Desarrollé esta página para centralizar todas las publicaciones, novedades
 * y anuncios del IFTS N°26. El sistema permite mostrar noticias organizadas
 * por categorías con capacidad de filtrado.
 * 
 * Características implementadas:
 * - Sistema de categorías (Institucional, Académico, Evento, Inscripción)
 * - Filtrado dinámico de publicaciones
 * - Publicaciones destacadas
 * - Formato de fecha legible
 * - Interfaz TypeScript para tipo seguro
 * 
 * Actualmente las publicaciones están hardcodeadas, pero en el futuro
 * podrían cargarse desde una API o CMS (Content Management System).
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

/**
 * Interfaz que define la estructura de una publicación
 * 
 * @property id - Identificador único de la publicación
 * @property titulo - Título principal de la noticia
 * @property fecha - Fecha de publicación en formato ISO (YYYY-MM-DD)
 * @property categoria - Categoría de la publicación (tipo estricto con opciones limitadas)
 * @property resumen - Texto breve que se muestra en las tarjetas de vista previa
 * @property contenido - Texto completo de la publicación
 * @property imagen - URL de la imagen destacada (opcional)
 * @property destacada - Indica si la publicación debe mostrarse en la sección destacada
 */
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
  /**
   * Descripción de la sección
   * 
   * Texto introductorio que explica el propósito de esta página y ayuda
   * a los usuarios a entender qué tipo de información encontrarán aquí.
   */
  descripcion: string = 'Mantente informado sobre las últimas novedades del IFTS Nº26: eventos, inscripciones, actividades académicas y noticias institucionales.';

  /**
   * Array de publicaciones
   * 
   * Almaceno aquí todas las publicaciones del instituto. Cada publicación
   * incluye información completa: título, fecha, categoría, contenido, etc.
   * 
   * En el futuro, esto podría reemplazarse por una llamada a una API:
   * ```typescript
   * ngOnInit() {
   *   this.http.get<Publicacion[]>('/api/publicaciones').subscribe(
   *     publicaciones => this.publicaciones = publicaciones
   *   );
   * }
   * ```
   */
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

  /**
   * Array de categorías disponibles para filtrado
   * 
   * Incluyo 'Todas' como primera opción para permitir ver todas las
   * publicaciones sin filtro. Las demás coinciden con las categorías
   * definidas en la interfaz Publicacion.
   */
  categorias: string[] = ['Todas', 'Institucional', 'Académico', 'Evento', 'Inscripción'];
  
  /**
   * Categoría actualmente seleccionada en el filtro
   * Por defecto muestra todas las publicaciones.
   */
  categoriaSeleccionada: string = 'Todas';

  /**
   * Getter que retorna publicaciones filtradas por categoría
   * 
   * Implementé este getter (propiedad computada) para que Angular actualice
   * automáticamente la lista cuando cambia la categoría seleccionada.
   * 
   * @returns Array de publicaciones filtradas según la categoría seleccionada
   */
  get publicacionesFiltradas(): Publicacion[] {
    if (this.categoriaSeleccionada === 'Todas') {
      return this.publicaciones;
    }
    return this.publicaciones.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  /**
   * Getter que retorna solo las publicaciones marcadas como destacadas
   * 
   * Útil para mostrar una sección especial con las noticias más importantes
   * en la parte superior de la página.
   * 
   * @returns Array de publicaciones destacadas
   */
  get publicacionesDestacadas(): Publicacion[] {
    return this.publicaciones.filter(p => p.destacada);
  }

  /**
   * Formatea una fecha ISO a un formato legible en español
   * 
   * Convierte fechas como "2025-03-15" a "15 Mar 2025" para mejorar
   * la legibilidad en la interfaz de usuario.
   * 
   * @param fecha - Fecha en formato ISO (YYYY-MM-DD)
   * @returns Fecha formateada en español (ej: "15 Mar 2025")
   */
  formatearFecha(fecha: string): string {
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const date = new Date(fecha);
    return `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`;
  }

  /**
   * Cambia la categoría seleccionada para el filtrado
   * 
   * Este método se ejecuta cuando el usuario hace clic en un botón de categoría.
   * Al cambiar categoriaSeleccionada, el getter publicacionesFiltradas se
   * recalcula automáticamente y Angular actualiza la vista.
   * 
   * @param categoria - Nueva categoría a seleccionar
   */
  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }
}

/**
 * Configuración del sistema de ruteo de la aplicación
 * 
 * Definí aquí todas las rutas (URLs) disponibles en el sitio web del IFTS N°26
 * y la relación entre cada URL y su componente correspondiente. Angular utiliza
 * esta configuración para saber qué componente mostrar cuando el usuario navega
 * a una URL específica.
 * 
 * Estructura de rutas que implementé:
 * - Rutas principales: inicio, pre-inscripción, contacto
 * - Rutas institucionales: calendario, autoridades, reglamento, evacuación
 * - Rutas de carreras: GIR y HyS con sus subsecciones (horarios, perfil egresado)
 * - Rutas para alumnos: constancias, becas, títulos extranjeros, horarios, etc.
 * - Rutas de servicios: accesos, tutoría, publicaciones
 * - Ruta comodín (404): captura URLs no encontradas y redirige a página de error
 * 
 * @author Marcos - IFTS N°26
 */

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Curso } from './pages/navegacion/pre-inscripcion/curso/curso';
import { CalendarioAcademico } from './pages/navegacion/institucional/calendario-academico/calendario-academico';
import { Autoridades } from './pages/navegacion/institucional/autoridades/autoridades';
import { ReglamentoOrganico } from './pages/navegacion/institucional/reglamento-organico/reglamento-organico';
import { Evacuacion } from './pages/navegacion/institucional/evacuacion/evacuacion';
import { Carreras } from './pages/navegacion/carreras/carreras';
import { Docentes } from './pages/navegacion/docentes/docentes';
import { Constancias } from './pages/navegacion/alumnos/constancias/constancias';
import { Becas } from './pages/navegacion/alumnos/becas/becas';
import { TitulosExtranjeros } from './pages/navegacion/alumnos/titulos-extranjeros/titulos-extranjeros';
import { MatriculaProfesional } from './pages/navegacion/alumnos/matricula-profesional/matricula-profesional';
import { Horarios } from './pages/navegacion/alumnos/horarios/horarios';
import { MesasExamen } from './pages/navegacion/alumnos/mesas-examen/mesas-examen';
import { Cooperadora } from './pages/navegacion/alumnos/cooperadora/cooperadora';
import { Equivalencias } from './pages/navegacion/alumnos/equivalencias/equivalencias';
import { Preguntas } from './pages/navegacion/alumnos/preguntas/preguntas';
import { Tutoria } from './pages/navegacion/tutoria/tutoria';
import { Accesos } from './pages/navegacion/accesos/accesos';
import { Finales } from './pages/navegacion/accesos/finales/finales';
import { Publicaciones } from './pages/navegacion/publicaciones/publicaciones';
import { Contacto } from './pages/navegacion/contacto/contacto';
import { PreInscripcion } from './pages/navegacion/pre-inscripcion/pre-inscripcion';
import { Hys } from './pages/navegacion/carreras/hys/hys';
import { Gir } from './pages/navegacion/carreras/gir/gir';
import { GirHorarios } from './pages/navegacion/carreras/gir/horarios/horarios';
import { GirPerfilEgresado } from './pages/navegacion/carreras/gir/perfil-egresado/perfil-egresado';
import { HysHorarios } from './pages/navegacion/carreras/hys/horarios/horarios';
import { HysPerfilEgresado } from './pages/navegacion/carreras/hys/perfil-egresado/perfil-egresado';

export const routes: Routes = [
    // Redirección de la raíz vacía hacia la página de inicio
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    
    // Páginas principales
    { path: '', component: Home },
    { path: 'inicio', component: Home },
    { path: 'pre-inscripcion', component: PreInscripcion },
    { path: 'pre-inscripcion/curso', component: Curso },
    
    // Sección institucional
    { path: 'institucional/calendario-academico', component: CalendarioAcademico },
    { path: 'institucional/autoridades', component: Autoridades },
    { path: 'institucional/reglamento-organico', component: ReglamentoOrganico },
    { path: 'institucional/evacuacion', component: Evacuacion },
    
    // Carreras: Gestión de la Información y Redes (GIR)
    { path: 'carrera/gir', component: Gir },
    { path: 'carrera/gir/horarios', component: GirHorarios },
    { path: 'carrera/gir/perfil-egresado', component: GirPerfilEgresado },
    
    // Carreras: Higiene y Seguridad en el Trabajo (HyS)
    { path: 'carrera/hys', component: Hys },
    { path: 'carrera/hys/horarios', component: HysHorarios },
    { path: 'carrera/hys/perfil-egresado', component: HysPerfilEgresado },
    
    // Información para docentes
    { path: 'docentes', component: Docentes },
    
    // Sección de alumnos con diversos trámites y servicios
    { path: 'alumnos/constancias', component: Constancias },
    { path: 'alumnos/becas', component: Becas },
    { path: 'alumnos/titulos-extranjeros', component: TitulosExtranjeros },
    { path: 'alumnos/matricula-profesional', component: MatriculaProfesional },
    { path: 'alumnos/horarios', component: Horarios },
    { path: 'alumnos/mesas-examen', component: MesasExamen },
    { path: 'alumnos/cooperadora', component: Cooperadora },
    { path: 'alumnos/equivalencias', component: Equivalencias },
    
    // Servicios adicionales
    { path: 'preguntas', component: Preguntas },
    { path: 'tutoria', component: Tutoria },
    { path: 'accesos', component: Accesos },
    { path: 'accesos/finales', component: Finales },
    { path: 'novedades', component: Publicaciones },
    { path: 'contacto', component: Contacto },
    
    // Manejo de páginas no encontradas (404)
    { path: 'not-found', component: NotFound},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

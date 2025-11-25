import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { CalendarioAcademico } from './pages/navegacion/institucional/calendario-academico/calendario-academico';
import { Autoridades } from './pages/navegacion/institucional/autoridades/autoridades';
import { ReglamentoOrganico } from './pages/navegacion/institucional/reglamento-organico/reglamento-organico';
import { Repositorio } from './pages/navegacion/institucional/repositorio/repositorio';
import { Evacuacion } from './pages/navegacion/institucional/evacuacion/evacuacion';
import { Carreras } from './pages/navegacion/carreras/carreras';
import { Docentes } from './pages/navegacion/docentes/docentes';
import { Constancias } from './pages/navegacion/alumnos/constancias/constancias';
import { Becas } from './pages/navegacion/alumnos/becas/becas';
import { Faq } from './pages/navegacion/alumnos/preguntas-frecuentes/faq';
import { Horarios } from './pages/navegacion/alumnos/horarios/horarios';
import { MesasExamen } from './pages/navegacion/alumnos/mesas-examen/mesas-examen';
import { Cooperadora } from './pages/navegacion/alumnos/cooperadora/cooperadora';
import { Tutoria } from './pages/navegacion/alumnos/tutoria/tutoria';
import { Accesos } from './pages/navegacion/accesos/accesos';
import { Publicaciones } from './pages/navegacion/publicaciones/publicaciones';
import { Contacto } from './pages/navegacion/contacto/contacto';
import { PreInscripcion } from './pages/navegacion/pre-inscripcion/pre-inscripcion';
import { Hys } from './pages/navegacion/carreras/hys/hys';
import { Gir } from './pages/navegacion/carreras/gir/gir';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '', component: Home },
    { path: 'inicio', component: Home },
    { path: 'pre-inscripcion', component: PreInscripcion },
    { path: 'institucional/calendario-academico', component: CalendarioAcademico },
    { path: 'institucional/autoridades', component: Autoridades },
    { path: 'institucional/reglamento-organico', component: ReglamentoOrganico },
    { path: 'institucional/repositorio', component: Repositorio },
    { path: 'institucional/evacuacion', component: Evacuacion },
    { path: 'carrera/gir', component: Gir },
    { path: 'carrera/hys', component: Hys },
    { path: 'docentes', component: Docentes },
    { path: 'alumnos/constancias', component: Constancias },
    { path: 'alumnos/becas', component: Becas },
    { path: 'alumnos/faq', component: Faq },
    { path: 'alumnos/horarios', component: Horarios },
    { path: 'alumnos/mesas-examen', component: MesasExamen },
    { path: 'alumnos/cooperadora', component: Cooperadora },
    { path: 'tutoria', component: Tutoria },
    { path: 'accesos', component: Accesos },
    { path: 'novedades', component: Publicaciones },
    { path: 'contacto', component: Contacto },
    { path: 'not-found', component: NotFound},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

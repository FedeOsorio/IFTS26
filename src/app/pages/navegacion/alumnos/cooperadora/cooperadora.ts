import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

interface Proyecto {
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-cooperadora',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './cooperadora.html',
  styleUrl: './cooperadora.scss'
})
export class Cooperadora {
  // Información general
  descripcion: string = 'La Cooperadora del IFTS N°26 es una asociación civil sin fines de lucro que trabaja para mejorar la infraestructura, equipamiento y recursos educativos de nuestra institución.';
  
  // Imagen de cooperadora
  imagenCooperadora: string = '/assets/img/cooperadora.png';

  // Objetivos
  objetivos: string[] = [
    'Colaborar con el mejoramiento de la infraestructura del instituto',
    'Adquirir equipamiento y material didáctico',
    'Apoyar proyectos académicos y de investigación',
    'Brindar asistencia a estudiantes en situación de vulnerabilidad',
    'Organizar eventos culturales y académicos',
    'Fomentar la integración de la comunidad educativa'
  ];

  // Proyectos recientes
  proyectos: Proyecto[] = [
    {
      titulo: 'Equipamiento Tecnológico',
      descripcion: 'Adquisición de computadoras, proyectores y equipos audiovisuales para las aulas.',
      icono: 'bi-laptop'
    },
    {
      titulo: 'Biblioteca',
      descripcion: 'Ampliación del acervo bibliográfico con material actualizado para ambas carreras.',
      icono: 'bi-book'
    },
    {
      titulo: 'Becas de Estudio',
      descripcion: 'Otorgamiento de becas y ayuda económica a estudiantes en situación de necesidad.',
      icono: 'bi-piggy-bank'
    },
    {
      titulo: 'Mejoras Edilicias',
      descripcion: 'Refacción y mantenimiento de espacios comunes y aulas del instituto.',
      icono: 'bi-building'
    }
  ];

  // Cómo colaborar
  formasColaboracion: string[] = [
    'Cuota mensual voluntaria',
    'Donaciones puntuales',
    'Participación en eventos y rifas',
    'Colaboración en proyectos específicos',
    'Difusión de actividades de la cooperadora'
  ];

  // Contacto
  emailCooperadora: string = 'cooperadora&#64;ifts26.edu.ar';
}

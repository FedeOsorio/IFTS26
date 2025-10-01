import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent
  ],
  templateUrl: './course.html',
  styleUrl: './course.scss',

})
export class Course implements OnInit {
  slides: any[] = new Array(2).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '/assets/img/iftslogo.png',
      title: 'Tecnicatura Superior en Gestión Integral del Riesgo',
    };
    this.slides[1] = {
      id: 1,
      src: '/assets/img/iftslogo2.png',
      title: 'Tecnicatura Superior en Higiene y Seguridad en el Trabajo',
    };
  }
}
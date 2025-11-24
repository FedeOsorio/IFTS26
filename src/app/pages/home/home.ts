import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoCards } from '../../components/info-cards/info-cards';

@Component({
  selector: 'app-home',
  imports: [InfoCards, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly title = signal('IFTS26');

  scrollToCarreras(): void {
    const carrerasSection = document.querySelector('.careers-section');
    if (carrerasSection) {
      carrerasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

import { Component, signal } from '@angular/core';
import { Course } from "../../components/course/course";
import { InfoCards } from '../../components/info-cards/info-cards';

@Component({
  selector: 'app-home',
  imports: [InfoCards],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly title = signal('IFTS26');
}

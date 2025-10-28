import { Component, signal } from '@angular/core';
import { Course } from "../../components/course/course";

@Component({
  selector: 'app-home',
  imports: [Course],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly title = signal('IFTS26');
}

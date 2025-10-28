import { Component, signal } from '@angular/core';
import { Header } from "../../components/header/header";
import { Course } from "../../components/course/course";

@Component({
  selector: 'app-home',
  imports: [Header, Course],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly title = signal('IFTS26');
}

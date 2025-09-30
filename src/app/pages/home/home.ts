import { Component, signal } from '@angular/core';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly title = signal('IFTS26');
}

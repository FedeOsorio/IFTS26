import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

}

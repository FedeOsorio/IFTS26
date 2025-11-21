import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-cards',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './info-cards.html',
  styleUrl: './info-cards.scss'
})
export class InfoCards {

  faGraduationCap = faGraduationCap;
  faUsers = faUsers;
  faBookOpen = faBookOpen;

}

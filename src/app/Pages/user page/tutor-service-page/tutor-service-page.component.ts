import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHomePageComponent } from '../user-home-page/user-home-page.component';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-tutor-service-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './tutor-service-page.component.html',
  styleUrl: './tutor-service-page.component.css'
})
export class TutorServicePageComponent {

}

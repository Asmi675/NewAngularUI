import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-plumber-service-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './plumber-service-page.component.html',
  styleUrl: './plumber-service-page.component.css'
})
export class PlumberServicePageComponent {

}

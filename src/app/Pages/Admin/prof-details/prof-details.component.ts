import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-prof-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './prof-details.component.html',
  styleUrl: './prof-details.component.css'
})
export class ProfDetailsComponent {

}

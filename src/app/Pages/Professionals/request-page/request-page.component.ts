import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-request-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './request-page.component.html',
  styleUrl: './request-page.component.css'
})
export class RequestPageComponent {

}

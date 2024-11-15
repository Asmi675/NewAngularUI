import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './user-nav-bar.component.html',
  styleUrl: './user-nav-bar.component.css'
})
export class UserNavBarComponent {

}

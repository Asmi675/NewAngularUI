import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [NgbModule , RouterLink,RouterModule],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css'
})
export class UserHomePageComponent {

}

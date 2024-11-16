import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent implements OnInit {
  
  ProfileName:any =""
  ngOnInit(): void {
    this.ProfileName = localStorage.getItem('userName')
  }

}

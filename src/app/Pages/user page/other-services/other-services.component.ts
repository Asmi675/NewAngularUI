import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-other-services',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.css'
})
export class OtherServicesComponent implements OnInit{

  ProfileName:any =""
  onLogOut(){
    localStorage.clear()
  }


  ngOnInit(): void {
    this.ProfileName = localStorage.getItem('userName')
  }
}

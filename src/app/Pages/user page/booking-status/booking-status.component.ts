import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-booking-status',
  standalone: true,
  imports: [RouterLink ,RouterOutlet ],
  templateUrl: './booking-status.component.html',
  styleUrl: './booking-status.component.css'
})
export class BookingStatusComponent implements OnInit {
  ProfileName:any =""
  
  ngOnInit(): void {
  this.ProfileName = localStorage.getItem('userName')
  }

  onLogOut(){
    localStorage.clear()
  }

  Book(){
    console.log('Booking process initiated!');
  }
}

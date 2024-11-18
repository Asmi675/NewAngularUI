import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-request-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './request-page.component.html',
  styleUrl: './request-page.component.css'
})
export class RequestPageComponent implements OnInit {
  ngOnInit(): void {
   this.getAllBookings()
  }
  userName:any
  constructor(){
     this.userName = localStorage.getItem('userName')
  }

  http = inject(HttpClient)
BookingRequests:any
  getAllBookings(){
    this.http.get("https://localhost:7025/api/booking/Professional/"+this.userName).subscribe((res:any)=>{
      console.log(res)
      if(res.isSuccessful){
        this.BookingRequests=res.result
        console.log(this.BookingRequests)
      }
    })
  }
}

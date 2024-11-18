import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
   this.showCount()
  }
  userName:any
  constructor(private toastr:ToastrService){
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

  responseObj:any={
    responseId: 0,
    bookingId: 0,
    responseValue: false,
    responseMessage: ""
  }


  Confirm(id:any){
    this.responseObj.bookingId=id
    this.responseObj.responseValue=true
    this.http.put("https://localhost:7025/api/booking/ServiceResponse",this.responseObj).subscribe((res:any)=>{
      console.log(res)
      if (res.isSuccessful) {
        this.toastr.success("Confirmation Successfull")
      }
      
    })
  }
  bookingCount:any
  showCount(){
    this.http.get("https://localhost:7025/api/Summary/ProfessionalSummary/"+this.userName).subscribe((res:any)=>{
      console.log(res)
      if (res.isSuccessful) {
       this.bookingCount = res.result.count
      }
    })
  }
}

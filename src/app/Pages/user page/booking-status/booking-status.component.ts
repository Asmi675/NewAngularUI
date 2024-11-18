import { CommonModule, DatePipe } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-booking-status',
  standalone: true,
  imports: [RouterLink ,RouterOutlet,DatePipe,CommonModule,FormsModule ],
  templateUrl: './booking-status.component.html',
  styleUrl: './booking-status.component.css'
})
export class BookingStatusComponent implements OnInit {
  ProfileName:any =""
  http = inject(HttpClient)
  ngOnInit(): void {
  this.ProfileName = localStorage.getItem('userName')
  this.getBookingDetails(this.ProfileName)
 
  }

  onLogOut(){
    localStorage.clear()
  }
isVisible:boolean=false
  BookingDetails:any =[]
  uniqueProfessionalNames: any =[]

  getBookingDetails(userName:string){
    this.http.get("https://localhost:7025/api/booking/UserName/"+userName).subscribe((res:any)=>{
      console.log(res)
      if(res.isSuccessful){
        this.BookingDetails = res.result
        console.log(this.BookingDetails)
        this.extractUniqueNames(this.BookingDetails)
      }
    })
  }

 extractUniqueNames(BookingDetails:any[]){
  const professionalNamesSet = new Set<string>();

  for (let i = 0; i < BookingDetails.length; i++) {
    professionalNamesSet.add(this.BookingDetails[i].professionalName);
  }
  this.uniqueProfessionalNames = Array.from(professionalNamesSet);
  console.log(this.uniqueProfessionalNames)
 }
 Submit(){
  this.reviewObj.userName=this.ProfileName
  console.log(this.reviewObj)
  this.http.post("https://localhost:7057/api/User/Reviews/AddReview",this.reviewObj).subscribe((res:any)=>{
    console.log(res)
    
  })
 }

reviewObj:any={
  id: 0,
  professionalName: "",
  userName: "",
  dateTime: "2024-11-18T04:33:22.899Z",
  message: "",
  userRating: 0
}

 Review(name:string){
this.isVisible=true
this.reviewObj.professionalName=name

 }
 Delete(){

 }
  
}

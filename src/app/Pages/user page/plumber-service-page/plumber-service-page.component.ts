import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-plumber-service-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './plumber-service-page.component.html',
  styleUrl: './plumber-service-page.component.css'
})
export class PlumberServicePageComponent implements OnInit{
  
  // Array of services to be displayed on the page
  services = [
    { 
      id: 1, 
      name: 'Electrician Service', 
      price: 50, 
      imageUrl: 'https://via.placeholder.com/300x200' 
    },
    { 
      id: 2, 
      name: 'Electrician Service', 
      price: 75, 
      rating: 5, 
      imageUrl: 'https://via.placeholder.com/300x200' 
    },
    { 
      id: 3, 
      name: 'Electrician Service', 
      price: 100, 
      rating: 3, 
      imageUrl: 'https://via.placeholder.com/300x200' 
    },
    { 
      id: 4, 
      name: 'Electrician Service', 
      price: 40, 
      rating: 4, 
      imageUrl: 'https://via.placeholder.com/300x200' 
    },
    { 
      id: 5, 
      name: 'Electrician Service', 
      price: 150, 
      rating: 5, 
      imageUrl: 'https://via.placeholder.com/300x200' 
    },
    { 
      id: 6, 
      name: 'Electrician Service', 
      price: 80, 
      rating: 4, 
      imageUrl: 'https://via.placeholder.com/300x200' 
    },
  ];

  ProfileName:any =""
http = inject(HttpClient)
data:any[] = []
domain:string="Plumber"
  constructor() { }

  ngOnInit(): void {
    // Fetch services from backend (C# API)
    this.fetchServicesFromBackend();
    this.ProfileName = localStorage.getItem('userName')
  }

  BookingDetails:any={
    id: 0,
    userName: "",
    professionalName: "",
    bookingStatus: "",
    bookingRequestedSuccessfully: false,
    serviceProviderResponse: false,
    isCompleted: false,
    serviceProvided: "",
    serviceDetails: "",
    price: 0,
    createdAt: "2024-11-17T11:38:06.758Z",
    paymetSuccessful: false,
    cancelationConfirmed: false
  }
 


  fetchServicesFromBackend() {
    this.http.get("https://localhost:7057/api/Services/GetProfessionalsByDomain/"+this.domain).subscribe((res:any)=>{
      console.log(res.result)
      if(res) {
        this.data=res.result
      }
    })
  }
  onLogOut(){
    localStorage.clear()
  }

  Book(item:any,){
 console.log(item)
 this.BookingDetails.userName=localStorage.getItem('userName')
 this.BookingDetails.professionalName = item.userName
 this.BookingDetails.bookingStatus = "Booking Started"
 this.BookingDetails.serviceProvided = item.domain
 this.BookingDetails.price = item.basePay
 console.log(this.BookingDetails)
  }
}

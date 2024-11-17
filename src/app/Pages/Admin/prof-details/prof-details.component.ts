import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APIService } from '../../../Service/user.service';

@Component({
  selector: 'app-prof-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './prof-details.component.html',
  styleUrl: './prof-details.component.css'
})
export class ProfDetailsComponent implements OnInit {
  ngOnInit(): void {
   this.getProviders()
  }
  APIServices = inject(APIService)
http = inject(HttpClient)
ProfessionalList:any
confirmRes:any={
  id: "",
  rating: 4.5,
  status: false
}
confirm(id:any){
  this.confirmRes.id=id
  this.confirmRes.status=true
this.http.put("https://localhost:7057/api/Services/ConfirmService",this.confirmRes).subscribe((res:any)=>{
if (res.isSuccessful) {
  console.log(res)
  window.location.reload()
}
})
}

getProviders(){
  this.APIServices.getProfessionals().subscribe((res:any) =>{
    console.log(res.result)
    this.ProfessionalList=res.result;
})
}

}

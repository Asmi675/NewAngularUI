import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
registerObj:any={
  userName:"",
  email:"",
  phone:"",
  password:"",
  name:"",
  role:"user"
}
loginObj:any={
  userName:"",
  password:""
}
ischeck:boolean=false
http=inject(HttpClient)
router = inject(Router)

onRegister(){
  console.log(this.registerObj)
  if (this.ischeck) {
    this.registerObj.role="provider"
  }
  this.http.post("https://localhost:7001/api/AuthApi/Register",this.registerObj).subscribe((res:any)=>{
    console.log(res)
    if(res){
      alert("Successfully registered")
      window.location.reload()
    }
   else{
    alert("Something went wrong")
   }
  })
}

onLogin(){
  this.http.post("https://localhost:7001/api/AuthApi/Login",this.loginObj).subscribe((res:any)=>{
    console.log(res)

  })
}

}
